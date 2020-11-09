import { createSelector } from '@ngrx/store';
import { getIssuesManagementeFeatureSelector } from '../reducers/index';


export const selectFeature = createSelector(
    getIssuesManagementeFeatureSelector,
    state => state.issues
);

export const getIssuesList = createSelector(
    selectFeature,
    state => state.issuesList
);
