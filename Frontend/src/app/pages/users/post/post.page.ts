import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TokenstorageService } from 'src/app/services/tokenstorage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  postForm: FormGroup;
  post_id;
  post;
  loading;
  user_id;

  constructor(
    private _activatedRoute : ActivatedRoute,
    private _userService : UserService,
    private _formBuilder : FormBuilder,
    private _tokenService : TokenstorageService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.user_id = this._tokenService.getId();
    this.post_id = this._activatedRoute.snapshot.params['post_id'];
    this.postForm = this._formBuilder.group({
      text: ["", Validators.required]
    })
    this.getPost()
  }

  getPost() {
    this._userService.getPostById(this.post_id).subscribe(
      data => {
        this.post = data
        let date = this.reverseString(this.post.date.split('T')[0]);
        this.post['date'] = date;
        this.post.comments.forEach(element => {
          let Commenteddate = this.reverseString(element.date.split('T')[0]);
          element['date'] = Commenteddate;
        })
        this.loading = false;
      }
    )
  }

  deleteComment(val) {
    this._userService.deleteComment(this.post_id, val).subscribe(
      data => {
        this.getPost();
      }
    )
  }

  onSubmit() {
    this.loading = true;
    this._userService.commentById(this.post_id, this.postForm.get('text').value).subscribe(
      data=> {
        this.getPost();
        this.postForm.reset();
      }
    )
  }

  reverseString(str) {
    return str.split('-').reverse().join('-');
  }
}
