import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenstorageService } from './services/tokenstorage.service';
import { SplashScreen } from '@capacitor/splash-screen';
import { Network, NetworkStatus } from '@capacitor/network';
import { AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {
  status: NetworkStatus;
  constructor(
    private _tokenService: TokenstorageService,
    private _router: Router,
    private _alertController: AlertController,
    private _platform: Platform
  ) { }

  async ngOnInit() {
    await SplashScreen.hide();
    this.status = await Network.getStatus();
    if(this._platform.is('android')){
      if(!this.status.connected) {
        this.openAlert()
      }
    }
  }

  async openAlert() {
    const alert = await this._alertController.create({
      header: 'Check Network Connection',
      message: 'You do not have Internet Connection.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            navigator['app'].exitApp();
          }
        }
      ]
    })
    await alert.present();
  }

  logout() {
    this._tokenService.logout();
  }
}
