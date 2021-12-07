import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.page.html',
  styleUrls: ['./developers.page.scss'],
})
export class DevelopersPage implements OnInit {

  profiles : any;
  loading;

  constructor(
    private _router : Router,
    private _userService : UserService,
  ) { }

  ngOnInit() {
    this.loading = false;
    this.getAllProfiles();
  }
  
  getAllProfiles() {
    this.loading = true;
    this._userService.getAllProfile().subscribe(
      data => {
        this.profiles = data
        this.loading = false;
      }
    )
  }

  openProfile(val) {
    this._router.navigate([`/profile/${val}`])
  }
}
