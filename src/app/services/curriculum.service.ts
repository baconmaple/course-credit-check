import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {
  curriculumId = 25520161105552;
  constructor(private http: HttpClient) { }

  fetchCurriculum() {
    return this.http.get(`${environment.baseUrl2}/api/Curriculum/info/${this.curriculumId}`);
  }
}
