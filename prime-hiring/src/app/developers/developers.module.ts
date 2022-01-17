import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopersComponent } from './developers.component';
import { AddDeveloperComponent } from './add-developer/add-developer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { DeveloperCardComponent } from './developer-card/developer-card.component';
import { DeveloperListComponent } from './developer-list/developer-list.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    DevelopersComponent,
    AddDeveloperComponent,
    DeveloperCardComponent,
    DeveloperListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
  ],
})
export class DevelopersModule {}
