import { Routes } from '@angular/router';
import { PerkListComponent } from './perk-list/perk-list.component';
import { EventsComponent } from './events/events.component';
import { HomePageComponentComponent } from './home-page-component/home-page-component.component';
export const routes: Routes = [
  { path:'AllPerks', component:PerkListComponent},
  { path:'Events', component:EventsComponent},
  { path:'', component:HomePageComponentComponent}
];
