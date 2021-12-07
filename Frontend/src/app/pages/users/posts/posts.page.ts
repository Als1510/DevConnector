import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { TokenstorageService } from 'src/app/services/tokenstorage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  postsForm: FormGroup;
  posts;
  loading;
  user_id;

  constructor(
    private _router: Router,
    private _userService: UserService,
    private _formBuilder: FormBuilder,
    private _tokenService : TokenstorageService,
    private _loaderService: LoaderService
  ) {
    this._loaderService.loading.subscribe((val)=>{
      this.loading = val;
    })
   }

  ngOnInit() {
    this.user_id = this._tokenService.getId();
    this.postsForm = this._formBuilder.group({
      text: ["", Validators.required]
    })
    this.getAllPosts();
  }

  getAllPosts() {
    this._userService.getAllPosts().subscribe(
      data => {
        this.posts = data;
        this.posts.forEach(element => {
          let date = this.reverseString(element.date.split('T')[0]);
          element['date'] = date;
        })
      }
    )
  }

  openPost(val) {
    this._router.navigate([`/post/${val}`]);
  }

  
  onSubmit() {
    this._userService.createPost(this.postsForm.get('text').value).subscribe(
      async data => {
        await this.getAllPosts();
        this.postsForm.reset();
      }
    )
  }
    
  deletePost(val) {
    this._userService.deletePostById(val).subscribe(
      data => {
        this.getAllPosts();
      }
    )
  }
      
  likePost(val) {
    this._userService.likePostBydId(val).subscribe(
      data => {
        this.getAllPosts();
      }
    )
  }

  unlikePost(val) {
    this._userService.unlikePostBydId(val).subscribe(
      data => {
        this.getAllPosts();
      }
    )
  }

  reverseString(str) {
    return str.split('-').reverse().join('-');
  }
}