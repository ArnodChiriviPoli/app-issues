import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IssueCreationComponent } from '../../components/issue-creation/issue-creation.component';

import { IssueCreationShellComponent } from './issue-creation-shell.component';

describe('IssueCreationShellComponent', () => {
  let component: IssueCreationShellComponent;
  let fixture: ComponentFixture<IssueCreationShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueCreationShellComponent,
        IssueCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueCreationShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
