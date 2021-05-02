import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) { }
  fetchAllCourse() {
    return this.http.get<Course[]>(`${environment.baseUrl2}/api/Course`);
  }
}
