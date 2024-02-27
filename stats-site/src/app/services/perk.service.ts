import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Perk } from '../models/Perk'; // Assuming Perk class is defined in a separate file

@Injectable({
  providedIn: 'root'
})
export class PerkService {

  private apiUrl = 'https://dbd.tricky.lol/api/perks'; // replace with your API URL

  constructor(private http: HttpClient) { }

  getPerks(): Observable<Perk[]> {
    //console.log(this.http.get<Perk[]>(this.apiUrl))
    return this.http.get<Perk[]>(this.apiUrl);
  }
}