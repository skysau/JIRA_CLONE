import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlbumComponent } from './details/album/album.component';
import { BlogsComponent } from './details/blogs/blogs.component';
import { DetailsComponent } from './details/details.component';
import { LogInComponent } from './log-in/log-in.component';
import { AuthGardGuard } from './shared/auth-gard.guard';

const routes: Routes = [
   {path:"",redirectTo:'log-in',pathMatch:'full'},
   {path:'log-in',component:LogInComponent},
  
  {path:'dashboard',component:DashboardComponent, canActivate:[AuthGardGuard]},
  {path:'details',component:DetailsComponent, canActivate:[AuthGardGuard]},
  {
    path:'details/:id',component:DetailsComponent,
    children:[
      //{path:'Album/:id',component:AlbumComponent},
      //{path:'Blog/:id',component:BlogsComponent}
    ], canActivate:[AuthGardGuard]
  },
  {path:'Album/:pass',component:AlbumComponent, canActivate:[AuthGardGuard]},
  {path:'Blogs/:pass',component:BlogsComponent, canActivate:[AuthGardGuard]},
  {path:'**',component:LogInComponent},
  //{ path: 'profiles', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
