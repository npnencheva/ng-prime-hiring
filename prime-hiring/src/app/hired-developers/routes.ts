import { Routes } from '@angular/router';
import { AddHiredDevelopersComponent } from './add-hired-developers/add-hired-developers.component';
import { HiredDevelopersComponent } from './hired-developers.component';

export const routes: Routes = [
  {
    path: '',
    component: HiredDevelopersComponent,
    children: [
      {
        path: 'add',
        component: AddHiredDevelopersComponent,
      },
      {
        path: 'add/:developerIds',
        component: AddHiredDevelopersComponent,
      },
    ],
  },
];
