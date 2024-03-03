import { Routes } from '@angular/router';
import { PerkListComponent } from './perk-list/perk-list.component';
import { EventsComponent } from './events/events.component';
export const routes: Routes = [
  { path:'AllPerks', component:PerkListComponent},
  { path:'Events', component:EventsComponent}
];
