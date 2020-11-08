import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './components/main-page/main-page.component';
import { IssuesComponent } from './components/issues/issues.component';
import { CreationIssueComponent } from './components/creation-issue/creation-issue.component';

const routes: Routes = [
  { path: '', redirectTo: 'mainPage', pathMatch: 'full' },
  { path: 'mainPage', component: MainPageComponent },
  { path: 'creationIssue', component: CreationIssueComponent },
  { path: 'issues', component: IssuesComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
