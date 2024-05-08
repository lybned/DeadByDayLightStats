import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Survivor} from '../models/Survivor'
@Injectable({
  providedIn: 'root'
})
export class SurvivorService {

  private apiUrl = 'https://dbd.tricky.lol/api/characters'; // replace with your API URL

  constructor(private http: HttpClient) { }

  getCharacter(): Observable<{}> {
    return this.http.get<{}>(this.apiUrl);
  }
}