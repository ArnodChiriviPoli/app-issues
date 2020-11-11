import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { IssueManagementRoutingModule } from './issue-management-routing.module';

import { IssuesComponent } from './components/issues/issues.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { IssueCreationComponent } from './components/issue-creation/issue-creation.component';
import { IssueCreationShellComponent } from './containers/issue-creation-shell/issue-creation-shell.component';
import { IssuesShellComponent } from './containers/issues-shell/issues-shell.component';
import { IssueManagementService } from './issue-management.service';

import * as fromRoot from '../issue-management/state/reducers';
import * as fromEffects from './state/effects';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [
    IssuesComponent,
    MainPageComponent,
    IssueCreationComponent,
    IssueCreationShellComponent,
    IssuesShellComponent
  ],
  imports: [
    CommonModule,
    IssueManagementRoutingModule,
    StoreModule.forFeature(fromRoot.KEY_STATE, fromRoot.reducers),
    EffectsModule.forFeature([fromEffects.IssuesEffects])
  ],
  providers: [
    IssueManagementService
  ]
})
export class IssueManagementModule { }
