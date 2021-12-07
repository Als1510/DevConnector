import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { LoaderService } from 'src/app/services/loader.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.scss'],
})
export class ExperiencePage implements OnInit {

  experienceForm: FormGroup;
  loading;
  check = false;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _alertService: AlertService,
    private _loaderService: LoaderService
  ) {
    this._loaderService.loading.subscribe((val) => {
      this.loading = val;
    })
  }

  ngOnInit() {
    this.experienceForm = this._formBuilder.group({
      title: ["", Validators.required],
      company: ["", Validators.required],
      location: ["", Validators.required],
      from: ["", Validators.required],
      to: ["", Validators.required],
      current: [false, Validators.required],
      description: ["", Validators.required],
    })
  }

  checked() {
    this.check = !this.check
    this.experienceForm.get('current').setValue(this.check)
  }

  onSubmit() {
    let title = this.experienceForm.get('title').value;
    let company = this.experienceForm.get('company').value;
    let location = this.experienceForm.get('location').value;
    let from = this.experienceForm.get('from').value;
    let to = this.experienceForm.get('to').value;
    let current = this.experienceForm.get('current').value
    let description = this.experienceForm.get('description').value;

    let start = new Date(from);
    let end = new Date(to);

    if (start > end) {
      return this._alertService.presentToast("Selected Date is not valid", "danger");
    }

    this._userService.addUpdateExperience(title, company, location, from, to, current, description).subscribe(
      data => {
        this._alertService.presentToast(data['msg'], 'success');
        this.experienceForm.reset();
        this._router.navigate(['dashboard']);
      }
    )
  }
}
