import { Routes } from '@angular/router';
import { AddDeveloperComponent } from './add-developer/add-developer.component';
import { DeveloperListComponent } from './developer-list/developer-list.component';
import { DevelopersComponent } from './developers.component';

export const routes: Routes = [
  {
    path: '',
    component: DevelopersComponent,
    children: [
      {
        path: 'add',
        component: AddDeveloperComponent,
      },
      {
        path: 'add/:id',
        component: AddDeveloperComponent,
      },
      {
        path: '',
        component: DeveloperListComponent,
      },
    ],
  },
];
