import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  fetchUserProfile() {
    return this.http.get<Profile>(`${environment.baseUrl1}/student/60010105`);
  }
}
