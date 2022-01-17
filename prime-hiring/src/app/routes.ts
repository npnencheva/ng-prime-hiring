import { Routes } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { DevelopersModule } from './developers/developers.module';
import { HiredDevelopersModule } from './hired-developers/hired-developers.module';

export const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
    children: [
      {
        path: 'developers',
        loadChildren: () => DevelopersModule,
      },
      {
        path: 'hireddevelopers',
        loadChildren: () => HiredDevelopersModule,
      },
    ],
  },
];
