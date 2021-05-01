import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfile: Profile;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fetchProfile();
  }

  fetchProfile() {
    this.userService.fetchUserProfile().subscribe(
      (res) => {
        this.userProfile = {... res};
      },
      (err) => {
        throw err;
      }
    )
  }
}
