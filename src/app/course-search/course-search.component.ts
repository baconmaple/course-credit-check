import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'; 
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';
import { CourseDetailComponent } from '../course-detail/course-detail.component';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent implements OnInit{
  displayedColumns: string[] = ['id', 'title', 'credit'];
  dataSource: MatTableDataSource<Course>;
  courses: Course[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private courseService: CourseService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.courseService.fetchAllCourse().subscribe(
      (res) => {
        this.courses = res;
        this.dataSource = new MatTableDataSource(this.courses);
        this.dataSource.filterPredicate = (data: Course, filter: string) => {
          return data.title_en.toLowerCase().includes(filter) || String(data.id).includes(filter);
        }
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, (err) => {
        throw err;
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(course) {
    let dialogRef = this.dialog.open(CourseDetailComponent, {width: '50vw' ,data: course})
  }
}
