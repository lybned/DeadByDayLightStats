import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/Event'; // Assuming Perk class is defined in a separate file

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl = 'https://dbd.tricky.lol/api/events'; // replace with your API URL

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    //console.log(this.http.get<Perk[]>(this.apiUrl))
    return this.http.get<Event[]>(this.apiUrl);
  }
}