import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenstorageService } from 'src/app/services/tokenstorage.service';
import { AlertController, Platform } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  loading = false;
  hide = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _authService: AuthService,
    private _tokenService: TokenstorageService,
    private _alertController: AlertController,
    private _platform: Platform,
    private _appComponent: AppComponent,
    private _loaderService: LoaderService
  ) {
    this._loaderService.loading.subscribe((val)=>{
      this.loading = val;
    })
  }

  ngOnInit() {
    this.registerForm = this._formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
    })
  }

  eye() {
    this.hide = !this.hide;
  }

  async presentAlert(msg, name) {
    const alert = await this._alertController.create({
      header: `Dear ${name},`,
      message: `${msg}`,
    });
    await alert.present();

    setTimeout(() => {
      alert.dismiss();
    }, 3000)
  }


  async onSubmit() {
    if((await this._appComponent.checkConnection()) && (this._platform.is('android'))) {
      this._appComponent.openAlert()
    } else {
      let name = this.registerForm.get('name').value;
      let email = this.registerForm.get('email').value.toLowerCase();
      let password = this.registerForm.get('password').value;
      this._authService.register(name, email, password).subscribe(
        async data => {
          this.presentAlert(data['msg'], data['name'])
          await this._tokenService.setToken(data['token']);
          await this._router.navigate(['login']);
        }
      )
      setTimeout(()=>{
        this.registerForm.reset();
      }, 7000);
    }
  }
}