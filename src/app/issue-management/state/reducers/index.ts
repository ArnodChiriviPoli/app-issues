import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromIssues from '../reducers/issues.reducer';

export const KEY_STATE = 'issueManagement';

export const getIssuesManagementeFeatureSelector = createFeatureSelector<IssueManagementState>(KEY_STATE)

export interface IssueManagementState {
    issues: fromIssues.IssuesState,
}

export interface State {
    issuesManagement: IssueManagementState
}

export const reducers: ActionReducerMap<IssueManagementState> = {
    issues: fromIssues.reducer
}