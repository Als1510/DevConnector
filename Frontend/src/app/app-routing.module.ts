import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/users/dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'posts',
    loadChildren: () => import('./pages/users/posts/posts.module').then( m => m.PostsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'developers',
    loadChildren: () => import('./pages/users/developers/developers.module').then( m => m.DevelopersPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'experience',
    loadChildren: () => import('./pages/users/experience/experience.module').then( m => m.ExperiencePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'education',
    loadChildren: () => import('./pages/users/education/education.module').then( m => m.EducationPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile/:user_id',
    loadChildren: () => import('./pages/users/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'create-profile',
    loadChildren: () => import('./pages/users/create-profile/create-profile.module').then( m => m.CreateProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'post/:post_id',
    loadChildren: () => import('./pages/users/post/post.module').then( m => m.PostPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'forgetpassword',
    loadChildren: () => import('./pages/users/forgetpassword/forgetpassword.module').then( m => m.ForgetpasswordPageModule)
  },
  {
    path: 'servererror',
    loadChildren: () => import('./pages/error/servererror/servererror.module').then( m => m.ServererrorPageModule)
  },
  {
    path: 'pagenotfound',
    loadChildren: () => import('./pages/error/pagenotfound/pagenotfound.module').then( m => m.PagenotfoundPageModule)
  },
  {
    path: '**',
    redirectTo: 'pagenotfound'
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
