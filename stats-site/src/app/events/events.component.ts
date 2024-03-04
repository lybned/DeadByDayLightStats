import { NgFor } from '@angular/common';
import { Component, EnvironmentInjector, OnInit } from '@angular/core';
import { Event } from '../models/Event'; // Assuming Perk class is defined in a separate file
import { EventService } from '../services/events.service';
import { CommonModule } from '@angular/common';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  events: Event[] = []
  pastEvents: Event[] = []
  futureEvents: Event[] = []

  constructor(private service: EventService) { }


  ngOnInit(): void {

    this.loadEvents();
    initFlowbite();    
  }

  loadEvents(){
    this.service.getEvents().subscribe(events => {
      const current = Math.floor(Date.now() / 1000);
      for (let i =0; i < events.length; i++){
        if (events[i].end < current){
          this.pastEvents.push(events[i])
        } else if (events[i].start < current){
          this.events.push(events[i])
        } else {
          this.futureEvents.push(events[i])
        }
      }
    })
  }

  getDate(time:number){
    console.log()
    const date = new Date(time * 1000);

    // Get the year, month, and day
    const year = date.getFullYear();
    // Month is zero-based, so add 1 to get the correct month
    const month = date.getMonth() + 1;
    const day = date.getDate();

    // Format the year, month, and day
    const formattedDate = year + '/' + (month < 10 ? '0' : '') + month + '/' + (day < 10 ? '0' : '') + day;

    return formattedDate;
  }
}
