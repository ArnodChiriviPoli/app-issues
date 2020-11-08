import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationIssueComponent } from './creation-issue.component';

describe('CreationIssueComponent', () => {
  let component: CreationIssueComponent;
  let fixture: ComponentFixture<CreationIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
