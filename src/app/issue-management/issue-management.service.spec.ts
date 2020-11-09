import { TestBed } from '@angular/core/testing';

import { IssueManagementService } from './issue-management.service';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('IssueManagementService', () => {
  let service: IssueManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers:[
        IssueManagementService
      ],
      schemas:[NO_ERRORS_SCHEMA]
    });
    service = TestBed.inject(IssueManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
