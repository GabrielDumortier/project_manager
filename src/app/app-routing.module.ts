import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageLandingComponent } from './pages/page-landing/page-landing.component';
import { PageLogsComponent } from './pages/page-logs/page-logs.component';
import { PageProjectComponent } from './pages/page-project/page-project.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageUserComponent } from './pages/page-user/page-user.component';
import { PageProjectsComponent } from './pages/page-projects/page-projects.component';
import { PageTasksListComponent } from './pages/page-tasks-list/page-tasks-list.component';
import { PageProjectManagementComponent } from './pages/page-project-management/page-project-management.component';


const routes: Routes = [
  {
    path : "home",
    component : PageHomeComponent
  },  
  {
    path : "",
    component : PageLandingComponent
  },
  {
    path : "logs",
    component : PageLogsComponent
  },
  {
    path : "project/:id",
    component : PageProjectComponent
  },
  {
    path : "projects/:id",
    component : PageProjectsComponent
  },
  {
    path : "user/:id",
    component : PageUserComponent
  },
  {
    path : "tasks-list/:id",
    component : PageTasksListComponent
  }, 
  {
    path : "project-management/:id",
    component : PageProjectManagementComponent
  }, 
  {
    path : "**",
    component : PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }