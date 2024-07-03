import { Routes } from '@angular/router';
import { DiscoverComponent } from './discover/discover.component';
import { TrendsComponent } from './trends/trends.component';

export const routes: Routes = [
  {
    path: '',
    component: DiscoverComponent,
  },
  {
    path: 'trends',
    component: TrendsComponent,
  },
];
