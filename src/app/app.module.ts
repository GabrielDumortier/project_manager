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
    PageLogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
