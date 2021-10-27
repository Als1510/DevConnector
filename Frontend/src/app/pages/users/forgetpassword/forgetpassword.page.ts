import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.page.html',
  styleUrls: ['./forgetpassword.page.scss'],
})

export class ForgetpasswordPage implements OnInit {

  resetPasswordForm: FormGroup;
  loading1 = false;
  loading2 = false;
  hide = false;

  constructor(
    private _authService : AuthService,
    private _router : Router,
    private _formBuilder : FormBuilder,
    private _alertService : AlertService,
    private _alertController : AlertController
  ) { }

  ngOnInit() {
    this.loading1 = false;
    this.loading2 = false;
    this.showCard('con1');
    this.hideCard('con2');
    this.resetPasswordForm = this._formBuilder.group({
      email: ["", Validators.required],
      otp: ["", Validators.required],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required]
    });
  }

  async presentAlert(msg, name) {
    const alert = await this._alertController.create({
      header: `Dear ${name}`,
      message: `${msg}`,
    });

    await alert.present();

    setTimeout(()=>{
      alert.dismiss();
    }, 3000)
  }

  showCard(id) {
    document.getElementById(id).style.display = '';
  }

  hideCard(id) {
    document.getElementById(id).style.display = 'none';
  }

  eye() {
    this.hide = !this.hide;
  }

  back() {
    this.showCard('con1');
    this.hideCard('con2');
  }

  submitEmail() {
    this.loading1 = true;
    let email = this.resetPasswordForm.get('email').value.toLowerCase();
    this._authService.requestOtp(email).subscribe(
      data=> {
        this.loading1 = false;
        this.presentAlert(data['msg'], data['name']);
        this.hideCard('con1');
        this.showCard('con2');
      }
    )
    setTimeout(()=> {
      this.loading1 = false;
    }, 7000)
  }

  resetPassword() {
    this.loading2 = true;
    let email = this.resetPasswordForm.get('email').value.toLowerCase();
    let otp = this.resetPasswordForm.get('otp').value;
    let password = this.resetPasswordForm.get('password').value;
    let confirmPassword = this.resetPasswordForm.get('confirmPassword').value;
    if(password !== confirmPassword) {
      this.loading2 = false;
      this._alertService.presentToast("Password does not match", 'danger');
      return;
    }

    this._authService.resetPassword(email, otp, password).subscribe(
      data => {
        this.loading2 = false;
        this._alertService.presentToast(data['msg'], 'success');
        this._router.navigate(['login'])
      }
    )

    setTimeout(()=> {
      this.loading2 = false;
    }, 5000)
  }
}