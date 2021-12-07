import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { LoaderService } from 'src/app/services/loader.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.page.html',
  styleUrls: ['./education.page.scss'],
})
export class EducationPage implements OnInit {

  educationForm : FormGroup
  loading;
  check = false;
  
  constructor(
    private _router: Router,
    private _formBuilder : FormBuilder,
    private _userService : UserService,
    private _alertService : AlertService,
    private _loaderService: LoaderService
  ) {
    this._loaderService.loading.subscribe((val)=>{
      this.loading = val;
    })
  }

  ngOnInit() {
    this.educationForm = this._formBuilder.group({
      school: ["", Validators.required],
      degree: ["", Validators.required],
      fieldofstudy: ["", Validators.required],
      from: ["", Validators.required],
      to: ["", Validators.required],
      current: [false, Validators.required],
      description: ["", Validators.required],
    })
  }

  checked() {
    this.check = !this.check
    this.educationForm.get('current').setValue(this.check)
  }

  onSubmit() {
    let school = this.educationForm.get('school').value;
    let degree = this.educationForm.get('degree').value;
    let fieldofstudy = this.educationForm.get('fieldofstudy').value;
    let from = this.educationForm.get('from').value;
    let to = this.educationForm.get('to').value;
    let current = this.educationForm.get('current').value;
    let description = this.educationForm.get('description').value;

    let start = new Date(from);
    let end = new Date(to);

    if(start > end) {  
      return this._alertService.presentToast("Selected Date is not valid", "danger");
    }

    this._userService.addUpdateEducation(school, degree, fieldofstudy, from, to, current, description).subscribe(
      data => {
        this._alertService.presentToast(data['msg'], 'success');
        this.educationForm.reset();
        this._router.navigate(['dashboard']);
      }
    )
  }
}
