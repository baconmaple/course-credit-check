import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CreditService } from './../services/credit.service';
import { CreditInfo } from './../models/credit.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  filter = new FormControl();
  filterOptions: {
    displayText: string;
    value: { year: number; semester: number };
  }[] = [
      { displayText: 'ปี 4 เทอม 2', value: { year: 4, semester: 2 } },
      { displayText: 'ปี 4 เทอม 1', value: { year: 4, semester: 1 } },
      { displayText: 'ปี 3 เทอม 2', value: { year: 3, semester: 2 } },
      { displayText: 'ปี 3 เทอม 1', value: { year: 3, semester: 1 } },
      { displayText: 'ปี 2 เทอม 2', value: { year: 2, semester: 2 } },
      { displayText: 'ปี 2 เทอม 1', value: { year: 2, semester: 1 } },
      { displayText: 'ปี 1 เทอม 2', value: { year: 1, semester: 2 } },
      { displayText: 'ปี 1 เทอม 1', value: { year: 1, semester: 1 } },
    ];

  creditInfo: CreditInfo = null;
  remainCreditList = [];
  registerCourse;
  unregisterCourse;
  dataSourceRegister: any[] = [];
  dataSourceUnregister: any[] = [];

  registerDisplayedColumns: string[] = ['course_id', 'course_title', 'grade'];
  unregisterDisplayedColumns: string[] = [
    'course_id',
    'course_title',
    'credit',
  ];

  constructor(private creditService: CreditService) { }

  ngOnInit(): void {
    this.getCredit();
    this.initCourse();
  }

  handlefilter(): void {
    this.dataSourceRegister = [];
    this.dataSourceUnregister = [];
    const filterValue = this.filter.value;
    if (filterValue) {
      if (JSON.stringify(filterValue) == JSON.stringify({ year: 4, semester: 2 })) {
        this.dataSourceUnregister = this.unregisterCourse;
      }
      else {
        for (let index = 0; index < this.registerCourse.length; index++) {
          const element = this.registerCourse[index];
          if (
            filterValue.year == element.year &&
            filterValue.semester == element.semester
          ) {
            this.dataSourceRegister = element.courses;
            break;
          }
        }
      }
    }
  }

  getCredit() {
    this.creditService.creditChecking('60010105').subscribe({
      next: (response) => {
        this.creditInfo = response;
        this.remainCredit(response);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  remainCredit(credit: CreditInfo) {
    for (const key in credit) {
      if (this.creditInfo.hasOwnProperty(key)) {
        if (key == 'structure') {
          for (const catagory_key in credit['structure']['specific']) {
            this.remainCreditList.push({
              key: catagory_key,
              credit: credit['structure']['specific'][catagory_key],
            });
          }
        }
      }
    }
  }

  initCourse(): void {
    this.creditService.getRegisteredCourse('60010105').subscribe({
      next: (response) => {
        this.registerCourse = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.creditService.getUnregisteredCourse('60010105').subscribe({
      next: (response) => {
        console.log(response);
        this.unregisterCourse = response;
        this.filter.setValue(this.filterOptions[0].value);
        this.handlefilter();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
