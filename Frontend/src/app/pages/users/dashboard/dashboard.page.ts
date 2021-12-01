import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AlertController } from '@ionic/angular';
import { TokenstorageService } from 'src/app/services/tokenstorage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit{

  educationCredentials = []
  experienceCredentials = []
  profileValue = 0;
  username;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _alertController: AlertController,
    private _tokenService: TokenstorageService
  ) { }
  
  ngOnInit() {
    this.username = this._tokenService.getName();
  }

  ionViewWillEnter(){
    this.getProfile();
  }
  
  calculateProfile(profile) {
    this.profileValue = 0;
    if (profile['status']) {
      this.profileValue += 0.1
    }
    if (profile['bio']) {
      this.profileValue += 0.1
    }
    if (profile['education'].length > 0) {
      this.profileValue += 0.2
    }
    if (profile['experience'].length > 0) {
      this.profileValue += 0.2
    }
    if (profile['skills'].length > 0) {
      this.profileValue += 0.2
    }
    if (profile['githubusername']) {
      this.profileValue += 0.1
    }
    if (profile['location']) {
      this.profileValue += 0.1
    }

    if (this.profileValue === 1) {
      document.getElementById('profile-message').style.display = 'none'
    } else {
      document.getElementById('profile-message').style.display = '';
    }
  }

  async getProfile() {
    await this._userService.getLoggedInProfile().subscribe(
      async data => {
        this.calculateProfile(data)
        this.educationCredentials = data['education'];
        this.experienceCredentials = data['experience'];
        this.calculateYear();
      }
    )
  }

  async deleteEducation(id) {
    await this._userService.deleteEducation(id).subscribe();
    await this.getProfile();
  }

  async deleteExperience(id) {
    await this._userService.deleteExperience(id).subscribe();
    await this.getProfile();
  }

  async presentAlert(msg, name) {
    const alert = await this._alertController.create({
      header: `Dear ${name},`,
      message: `${msg}`,
    });
    await alert.present();

    setTimeout(() => {
      alert.dismiss();
      this._router.navigate(['/login']);
    }, 3000)
  }

  async deleteAccount() {
    const alert = await this._alertController.create({
      header: 'Delete account',
      message: 'Are you sure you want to delete your account? This will permanently erase your account.',
      buttons: [
        {
          text: 'Cancel',
        }, {
          text: 'Okay',
          handler: () => {
            this._userService.deleteAccount().subscribe(
              data => {
                this.presentAlert(data['msg'], data['name']);
                this._tokenService.logout();
              } 
            );
          }
        }
      ]
    });
    await alert.present();
  }

  logout() {
    this._tokenService.logout();
  }

  reverseString(str) {
    return str
      .split('-')
      .reverse()
      .join('-');
  }

  calculateYear() {
    this.educationCredentials.forEach(element => {
      let fromDate = element.from.split('T')[0];
      fromDate = this.reverseString(fromDate)
      if (element.current == false) {
        let toDate = element.to.split('T')[0];
        toDate = this.reverseString(toDate)
        element['year'] = fromDate + ' - ' + toDate;
      } else {
        element['year'] = fromDate + ' - Current';
      }
    })

    this.experienceCredentials.forEach(element => {
      let fromDate = element.from.split('T')[0];
      fromDate = this.reverseString(fromDate)
      if (element.current == false) {
        let toDate = element.to.split('T')[0];
        toDate = this.reverseString(toDate)
        element['year'] = fromDate + ' - ' + toDate;
      } else {
        element['year'] = fromDate + ' - Current';
      }
    })
  }
}