import { Action, createReducer, on } from '@ngrx/store';

import * as fromActions from '../actions/issues.actions';

export const KEY_STATE = 'issues';

export interface IssuesState {
    issuesList: any;
}

export const initialState: IssuesState = {
    issuesList: null
}

const issuesReducer = createReducer(
    initialState,
    on(
        fromActions.getIssuesSuccess, (state, { issuesList }) => ({
            ...state,
            issuesList: issuesList
        })
    )
);

export function reducer(state: IssuesState | undefined, action: Action): IssuesState {
    return issuesReducer(state, action)
}