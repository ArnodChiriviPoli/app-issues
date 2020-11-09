import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { of } from 'rxjs';

import { IssuesShellComponent } from './issues-shell.component';
import { IssueManagementService } from '../../issue-management.service';
import * as fromFeature from '../../state/reducers';
import * as fromEffects from '../../state/effects';




describe('IssuesShellComponent', () => {
  let component: IssuesShellComponent;
  let fixture: ComponentFixture<IssuesShellComponent>;
  let issueManagementservice: jasmine.SpyObj<IssueManagementService>

  const issuesList = [
    {
      renderingEngine: 'Webkit'
    }
  ]

  beforeEach(async () => {
    issueManagementservice = jasmine.createSpyObj<IssueManagementService>('IssueManagementService', {
      getIssues: of(issuesList)
    })
    await TestBed.configureTestingModule({
      declarations: [IssuesShellComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(fromFeature.KEY_STATE, fromFeature.reducers),
        EffectsModule.forRoot([
          fromEffects.IssuesEffects
        ])
      ],
      providers: [
        {
          provide: IssueManagementService, 
          useValue: issueManagementservice
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
