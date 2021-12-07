import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenstorageService } from 'src/app/services/tokenstorage.service';
import { AppComponent } from 'src/app/app.component';
import { Platform } from '@ionic/angular';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  loginForm: FormGroup;
  loading;
  hide = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _authService: AuthService,
    private _tokenService: TokenstorageService,
    private _platform: Platform,
    private _appComponent: AppComponent,
    private _loaderService: LoaderService,
  ) {
    this._loaderService.loading.subscribe((val)=>{
      this.loading = val;
    })
  }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  eye() {
    this.hide = !this.hide;
  }

  async onSubmit() {
    if((await this._appComponent.checkConnection()) && (this._platform.is('android'))) {
      this._appComponent.openAlert()
    } else {
      let email = this.loginForm.get('email').value.toLowerCase();
      let password = this.loginForm.get('password').value;
      this._authService.login(email, password).subscribe(
        async data => {
          await this._tokenService.saveUserNameAndId(data['name'], data['id'])
          await this._tokenService.setToken(data['token']);
          setTimeout(() => {
            this._router.navigate(['dashboard']);
          }, 1500)
        }
      )
      setTimeout(() => {
        this.loginForm.reset();
      }, 7000);
    }
  }
}