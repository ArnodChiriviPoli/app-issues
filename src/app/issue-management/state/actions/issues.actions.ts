import { createAction, props } from '@ngrx/store';

const base = '[issues]';

export const getIssues =
    createAction(`${base} Get Issues`);

export const getIssuesSuccess =
    createAction(`${base} Get Issues Success`, props<{ issuesList: any }>());

export const getIssuesError =
    createAction(`${base} Get Issues Error`, props<{ error: string }>());