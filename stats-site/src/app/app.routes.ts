import { Routes } from '@angular/router';
import { PerkListComponent } from './perk-list/perk-list.component';
import { EventsComponent } from './events/events.component';
import { HomePageComponentComponent } from './home-page-component/home-page-component.component';
import { SurvivorComponent } from './survivor/survivor.component';
import { KillerComponent } from './killer/killer.component';

export const routes: Routes = [
  { path:'AllPerks', component:PerkListComponent},
  { path:'Events', component:EventsComponent},
  { path:'', component:HomePageComponentComponent},
  { path:'Survivors', component:SurvivorComponent},
  { path:'Killers', component:KillerComponent},
];
