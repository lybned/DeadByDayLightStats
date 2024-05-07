import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KillerService {

  private apiUrl = 'https://dbd.tricky.lol/api/characters'; // replace with your API URL

  constructor(private http: HttpClient) { }

  getKillers(): Observable<{}> {
    //console.log(this.http.get<Perk[]>(this.apiUrl))
    return this.http.get<{}>(this.apiUrl);
  }
}