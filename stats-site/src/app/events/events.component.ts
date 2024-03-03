import { NgFor } from '@angular/common';
import { Component, EnvironmentInjector, OnInit } from '@angular/core';
import { Event } from '../models/Event'; // Assuming Perk class is defined in a separate file
import { EventService } from '../services/events.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [NgFor],
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
      this.events = events
    })
  }

  getDate(time:number){
    console.log()
    return new Date(time * 1000).toString()
  }
}
