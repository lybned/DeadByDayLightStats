import { Component, OnInit } from '@angular/core';
import { Perk } from '../models/Perk'; // Assuming Perk class is defined in a separate file
import { PerkService } from '../services/perk.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-perk-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './perk-list.component.html',
  styleUrl: './perk-list.component.css'
})
export class PerkListComponent implements OnInit {
  perks: Perk[] = [];

  constructor(private perkService: PerkService) { }

  ngOnInit(): void {
    this.loadPerks();
  }

  loadPerks() {
    this.perkService.getPerks().subscribe( (perks) => {
      for (const key in perks) {
        this.perks.push(perks[key])
      }
      console.log(perks)
    });
  }

  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  getImageURL(perk: string): string {
    // Modify perk.img here as needed
    // Example: You can append a suffix to the image filename
    let temp = perk.split("_")[1]
    //console.log("temp",temp)
    return "assets/icons/iconPerks_" + this.capitalizeFirstLetter(temp)
  }

  colorLevelText(text: string, level:number) : string{
    if (level === 1){
      return `<span class="text-yellow-400 font-bold">${text}</span>`
    } else if (level === 2){
      return `<span class="text-green-500 font-bold">${text}</span>`
    } else if (level === 3){
      return `<span class="text-violet-500 font-bold">${text}</span>`
    } else {
      return `<span class="font-bold">${text}</span>`
    }
  }

  getFillInDescription(perk: Perk): string{

    let description = perk.description.split("<br><br><br>").join("<br><br>");
    let cont = true
    let counter = 0
    while (cont){
      const pattern = ('{' + counter + '}')
      if ( description.includes(pattern) ){
        if (perk.tunables[counter].length > 1){
          const param = perk.tunables[counter].map( (x,i) => this.colorLevelText(x.toString(),(i+1)) ).join();
          description = description.replace(pattern, param)          
        } else {
          const param = perk.tunables[counter].map( (x,i) => this.colorLevelText(x.toString(),0) ).join();
          description = description.replace(pattern, param)                  
        }
        counter += 1
      } else {
        cont =  false
      }
    }
    //console.log(description)
    return description
  }



}
