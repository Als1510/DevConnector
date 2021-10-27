import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenstorageService } from 'src/app/services/tokenstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  
  loginForm: FormGroup;
  loading = false;
  hide = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _authService: AuthService,
    private _tokenService: TokenstorageService
  ) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ["",  Validators.required],
      password: ["", Validators.required]
    });
  }

  eye() {
    this.hide = !this.hide;
  }

  onSubmit() {
    let email = this.loginForm.get('email').value.toLowerCase();
    let password = this.loginForm.get('password').value;
    this.loading = true;
    this._authService.login(email, password).subscribe(
      async data => {
        await this._tokenService.saveUserNameAndId(data['name'], data['id'])
        await this._tokenService.setToken(data['token']);
        setTimeout(()=>{
          this._router.navigate(['dashboard']);
        }, 1500)
        this.loading = false;
      }
    )
    this.loginForm.reset();
    setTimeout(()=> {
      this.loading = false;
    }, 7000)
  }
}