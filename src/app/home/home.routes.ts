import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'websites',
        pathMatch: 'full'
      },
      {
        path: 'websites',
        loadComponent: () => import('../websites/websites.component').then(c => c.WebsitesComponent),
      },
      {
        path: 'illustrations',
        loadComponent: () => import('../illustrations/illustrations.component').then(c => c.IllustrationsComponent),
      },
      {
        path: 'video-editing',
        loadComponent: () => import('../video-editing/video-editing.component').then(c => c.VideoEditingComponent),
      },
      {
        path: 'posts',
        loadComponent: () => import('../posts/posts.component').then(c => c.PostsComponent),
      },
    ]
  },
];

