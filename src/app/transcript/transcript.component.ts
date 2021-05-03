import { Component, OnInit } from '@angular/core';

import { CreditService } from './../services/credit.service';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.scss']
})
export class TranscriptComponent implements OnInit {

  registerCourseList = []
  registerDisplayedColumns: string[] = ['course_id', 'course_title', 'grade'];

  constructor(private creditService: CreditService) { }

  ngOnInit(): void {
    this.initRegisterCourse()
  }

  initRegisterCourse(): void {
    this.creditService.getRegisteredCourse('60010105').subscribe({
      next: (response) => {
        this.registerCourseList = response
        console.log(this.registerCourseList)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
