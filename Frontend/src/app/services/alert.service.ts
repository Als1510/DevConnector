import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private _toast: ToastController
  ) { }

  async presentToast(message: any, color: any) {
    const toast = await this._toast.create({
      message: message,
      duration: 1500,
      position: 'top',
      color: color
    });
    toast.present();
  }
}
