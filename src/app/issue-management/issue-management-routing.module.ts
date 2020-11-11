import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './components/main-page/main-page.component';
import { IssuesComponent } from './components/issues/issues.component';
import { IssueCreationComponent } from './components/issue-creation/issue-creation.component';
import { IssueCreationShellComponent } from './containers/issue-creation-shell/issue-creation-shell.component';
import { IssuesShellComponent } from './containers/issues-shell/issues-shell.component';

const routes: Routes = [
  { path: '', redirectTo: 'mainPage', pathMatch: 'full' },
  { path: 'mainPage', component: MainPageComponent },
  { path: 'creationIssue', component: IssueCreationShellComponent },
  { path: 'issues', component: IssuesShellComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssueManagementRoutingModule { }
