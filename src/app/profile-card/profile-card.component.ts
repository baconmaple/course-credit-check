import { Component, OnInit } from '@angular/core';

import { UserService } from './../services/user.service';
import { Profile } from './../models/profile.model';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  profile: Profile

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.initProfile()
  }

  initProfile() {
    this.userService.fetchUserProfile().subscribe({
      next: response => {
        this.profile = response
      },
      error: err => {
        console.log(err)
      }
    })
  }

}
