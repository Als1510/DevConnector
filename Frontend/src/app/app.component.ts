import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenstorageService } from './services/tokenstorage.service';
import { SplashScreen } from '@capacitor/splash-screen';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {
  constructor(
    private _tokenService : TokenstorageService,
    private _router : Router
    ) {}
    
  async ngOnInit() {
    await SplashScreen.hide();
    // if(this._tokenService.getToken() != '') {
    //   this._router.navigate(['dashboard'])
    // } 
  }

  logout() {
    this._tokenService.logout();
  }
}
