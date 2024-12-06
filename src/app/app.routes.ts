import { Routes, CanActivateFn } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { ClientComponent } from './components/client/client.component';
import { ClientProjectsComponent } from './components/client-projects/client-projects.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children:[
      {
        path: 'master',
        component: MasterComponent
      },
      {
        path: 'client',
        component: ClientComponent,
      },
      {
        path: 'client-project',
        component: ClientProjectsComponent
      }
    ]
  }

];
