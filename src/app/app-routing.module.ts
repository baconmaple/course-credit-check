import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { TranscriptComponent } from './transcript/transcript.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'course-search', component: CourseSearchComponent },
  { path: 'curriculum', component: CurriculumComponent },
  { path: 'transcript', component: TranscriptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
