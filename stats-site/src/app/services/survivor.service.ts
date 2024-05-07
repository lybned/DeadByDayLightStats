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

  getSurvivors(): any[] {
    //console.log(this.http.get<Perk[]>(this.apiUrl))
    const items$ :Observable<{}>= this.http.get<{}>(this.apiUrl);
    let survivors: any[]= [];
    // Subscribe to the observable
    items$.subscribe((item: any) => {
      // Access properties of the item here
      // Loop through all items in the dictionary
      for (let key in item) {
        if (item.hasOwnProperty(key)) {
          let value = item[key];
          //console.log(`Key: ${key}, Value:`, value);
          //console.log(value)
          if (value.role !== "killer"){
            survivors.push(value)
            //console.log(survivors)
          }
        }
      }
      console.log(survivors)
    });
    console.log(survivors)
    return survivors
  }
}