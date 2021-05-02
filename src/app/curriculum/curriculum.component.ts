import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../services/curriculum.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {
  curriculumInfo;
  constructor(private curriculumService: CurriculumService) { }

  ngOnInit(): void {
    this.fetchCurriculum();
  }

  fetchCurriculum() {
    this.curriculumService.fetchCurriculum().subscribe(
      (res) => {
        this.curriculumInfo = res;
        console.log(this.curriculumInfo);
      }, (err) => {
        throw err;
      }
    )
  }
}
