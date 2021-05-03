import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor(private http: HttpClient) { }

  creditChecking(studentID: string) {
    return this.http.get<any>(`${environment.baseUrl1}/student/check/${studentID}`, {
      headers: { 'content-type': 'application/json' },
      observe: 'body',
    })
  }

  getRegisteredCourse(studentID: string) {
    return this.http.get<any>(`${environment.baseUrl1}/student/registered/${studentID}`, {
      headers: { 'content-type': 'application/json' },
      observe: 'body',
    })
  }

  getUnregisteredCourse(studentID: string) {
    return this.http.get<any>(`${environment.baseUrl1}/student/unregistered/${studentID}`, {
      headers: { 'content-type': 'application/json' },
      observe: 'body',
    })
  }
}
