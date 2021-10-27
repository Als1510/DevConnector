import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.page.html',
  styleUrls: ['./create-profile.page.scss'],
})
export class CreateProfilePage implements OnInit {

  profileForm : FormGroup;
  dataLoaded = false;

  constructor(
    private _router: Router,
    private _formBuilder : FormBuilder,
    private _userService : UserService,
    private _alertService : AlertService 
  ) { }

  ngOnInit() {
    this.hide();
    this.profileForm = this._formBuilder.group({
      company: ["", Validators.required],
      website: ["", Validators.required],
      location: ["", Validators.required],
      bio: ["", Validators.required],
      status: ["", Validators.required],
      githubusername: ["", Validators.required],
      skills: ["", Validators.required],
      youtube: ["", Validators.required],
      facebook: ["", Validators.required],
      twitter: ["", Validators.required],
      instagram: ["", Validators.required],
      linkedin: ["", Validators.required],
    })
    this.getMyProfile();
    setTimeout(()=> {
      this.dataLoaded = true;
    }, 5000)
  }

  show() {
    document.getElementById('social-links').style.display = '';
  }

  hide() {
    document.getElementById('social-links').style.display = 'none';
  }

  getMyProfile(){
    this._userService.getLoggedInProfile().subscribe(
      data => {
        this.profileForm.get('company').setValue(data['company']);
        this.profileForm.get('website').setValue(data['website']);
        this.profileForm.get('location').setValue(data['location']);
        this.profileForm.get('bio').setValue(data['bio']);
        this.profileForm.get('status').setValue(data['status']);
        this.profileForm.get('githubusername').setValue(data['githubusername']);
        this.profileForm.get('skills').setValue(data['skills']);
        this.profileForm.get('youtube').setValue(data['social'].youtube);
        this.profileForm.get('facebook').setValue(data['social'].facebook);
        this.profileForm.get('twitter').setValue(data['social'].twitter);
        this.profileForm.get('instagram').setValue(data['social'].instagram);
        this.profileForm.get('linkedin').setValue(data['social'].linkedin);
        this.dataLoaded = true;
      }
    )
  }

  onSubmit() {
    this.dataLoaded = false;
    let company  = this.profileForm.get('company').value;
    let website = this.profileForm.get('website').value;
    let location = this.profileForm.get('location').value;
    let bio = this.profileForm.get('bio').value;
    let status = this.profileForm.get('status').value;
    let githubusername = this.profileForm.get('githubusername').value;
    let skills = this.profileForm.get('skills').value;
    let youtube = this.profileForm.get('youtube').value;
    let facebook = this.profileForm.get('facebook').value;
    let twitter = this.profileForm.get('twitter').value;
    let instagram = this.profileForm.get('instagram').value;
    let linkedin = this.profileForm.get('linkedin').value;

    this._userService.createUpdateProfile(company, website, location, bio, status, githubusername, skills, youtube, facebook, twitter, instagram, linkedin).subscribe(
      async data=>{
        this.dataLoaded = true;
        await this._alertService.presentToast(data['msg'], 'success');
        await this.getMyProfile()
      }
    )
    setTimeout(()=> {
      this.dataLoaded = false;
    }, 7000)
  }
}
