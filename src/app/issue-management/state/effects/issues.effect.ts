import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { IssueManagementService } from '../../issue-management.service';
import * as fromIssuesManagement from '../../state/reducers';
import * as fromActions from '../actions/issues.actions';

@Injectable()
export class IssuesEffects {
    constructor(
        private actions$: Actions,
        private service: IssueManagementService,
        private store$: Store<fromIssuesManagement.IssueManagementState>
    ) { }

    getIssues$ = createEffect(() => this.actions$.pipe(
        ofType(fromActions.getIssues),
        mergeMap(() => this.service.getIssues()
            .pipe(
                map((issuesList) => fromActions.getIssuesSuccess({ issuesList })),
                catchError((error) => of(fromActions.getIssuesError({ error })))
            ))
    ))
}