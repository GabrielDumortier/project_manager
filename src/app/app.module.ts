import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormLoginComponent } from './pages/forms/form-login/form-login.component';
import { FormEditProjectComponent } from './pages/forms/form-edit-project/form-edit-project.component';
import { FormCreateProjectComponent } from './pages/forms/form-create-project/form-create-project.component';
import { FormEditTaskComponent } from './pages/forms/form-edit-task/form-edit-task.component';
import { FormCreateTaskComponent } from './pages/forms/form-create-task/form-create-task.component';
import { CommonNavbarComponent } from './pages/commons/common-navbar/common-navbar.component';
import { PageLandingComponent } from './pages/page-landing/page-landing.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageProjectComponent } from './pages/page-project/page-project.component';
import { PageLogsComponent } from './pages/page-logs/page-logs.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageUserComponent } from './pages/page-user/page-user.component';
import { PageProjectsComponent } from './pages/page-projects/page-projects.component';
import { PageTasksListComponent } from './pages/page-tasks-list/page-tasks-list.component';
import { PageProjectManagementComponent } from './pages/page-project-management/page-project-management.component';
import { FormSignUpComponent } from './forms/form-sign-up/form-sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    FormEditProjectComponent,
    FormCreateProjectComponent,
    FormEditTaskComponent,
    FormCreateTaskComponent,
    CommonNavbarComponent,
    PageLandingComponent,
    PageHomeComponent,
    PageProjectComponent,
    PageLogsComponent,
    PageNotFoundComponent,
    PageUserComponent,
    PageProjectsComponent,
    PageTasksListComponent,
    PageProjectManagementComponent,
    FormSignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
