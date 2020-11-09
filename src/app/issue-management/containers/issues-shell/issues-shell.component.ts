import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromActions from '../../state/actions/issues.actions';
import { IssueManagementState } from '../../state/reducers/index';
import { getIssuesList } from '../../state/selectors/issues.selector';



@Component({
  selector: 'app-issues-shell',
  templateUrl: './issues-shell.component.html',
  styleUrls: ['./issues-shell.component.css']
})
export class IssuesShellComponent implements OnInit {
  issuesList$ : Observable<any>;

  constructor(private store$: Store<IssueManagementState>) { }

  ngOnInit(): void {
    this.store$.dispatch(fromActions.getIssues());
    this.issuesList$ = this.store$.pipe(select(getIssuesList));
  }

}
