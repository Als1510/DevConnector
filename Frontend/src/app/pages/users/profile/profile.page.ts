import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user_id;
  dataLoaded = false;
  education;
  experience;
  profile;
  githubRepo;

  constructor(
     private _activatedRoute : ActivatedRoute,
     private _userService : UserService,
     private _alertService : AlertService
  ) { }

  ngOnInit() {
    this.user_id = this._activatedRoute.snapshot.params['user_id']
    this.getUserProfile()
  }
  
  getUserProfile() {
    this._userService.getProfileById(this.user_id).subscribe(
      async data=> {
        this.profile = await data;
        this.dataLoaded = true
        this.calculate()
        this.getGithubProfile()
      }
    )
  }

  getGithubProfile() {
    let githubusername = this.profile.githubusername;
    this._userService.getGithubProfile(githubusername).subscribe(
      data => {
        if(data !== null) {
          this.githubRepo = data;
        }
      }
    )
  }

  calculateMonth(month) {
    let months = {
      '01': 'Jan',
      '02': 'Feb',
      '03': 'Mar',
      '04': 'Apr',
      '05': 'May',
      '06': 'Jun',
      '07': 'Jul',
      '08': 'Aug',
      '09': 'Sep',
      '10': 'Oct',
      '11': 'Nov',
      '12': 'Dec',
    }
    return months[month];
  }

  calculate() {
    this.profile.education.forEach(element => {
      let from = this.calculateMonth(element.from.toString().split('-')[1]) + ' ' + element.from.toString().split('-')[0];
      if(element.current == false) {
        let to = this.calculateMonth(element.to.toString().split('-')[1]) + ' ' + element.to.toString().split('-')[0];
        element['year'] = from +' - '+to;
      } else {
        element['year'] = from +' Current';
      }
    })

    this.profile.experience.forEach(element => {
      let from = this.calculateMonth(element.from.toString().split('-')[1]) + ' ' + element.from.toString().split('-')[0];
      if(element.current == false) {
        let to = this.calculateMonth(element.to.toString().split('-')[1]) + ' ' + element.to.toString().split('-')[0];
        element['year'] = from +' - '+to;
      } else {
        element['year'] = from +' Current';
      }
    })
  }
}
