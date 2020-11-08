import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { MainSidebarContainerComponent } from './shared/components/main-sidebar-container/main-sidebar-container.component';
import { CreationIssueComponent } from './components/creation-issue/creation-issue.component';
import { IssuesComponent } from './components/issues/issues.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainSidebarContainerComponent,
    CreationIssueComponent,
    IssuesComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
