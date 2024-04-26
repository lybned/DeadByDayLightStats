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
  perksAll: Perk[] = [];

  constructor(private perkService: PerkService) { }

  ngOnInit(): void {
    this.loadPerks();
  }

  loadPerks() {
    this.perkService.getPerks().subscribe( (perks) => {
      for (const key in perks) {
        this.perks.push(perks[key])
        this.perksAll.push(perks[key])
      }
      console.log(perks)
    });
  }

  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  survivorPerks(){
    this.perks = this.perksAll.filter(x => x.role === "survivor")
  }

  killerPerks(){
    this.perks = this.perksAll.filter(x => x.role === "killer")
  }

  getImageURL(perk: string): string {
    // Modify perk.img here as needed
    // Example: You can append a suffix to the image filename
    let temp = perk.split("_")
    if (temp.length == 2){
      temp[1] = this.capitalizeFirstLetter(temp[1])
    }
    return "assets/" + this.capitalizeFirstLetter(temp.join("_"))
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

  firstLetterLower(str : string): string {
    // Convert first letter to lowercase and concatenate with the rest of the string
    return str.charAt(0).toLowerCase() + str.slice(1);
  }


  modifyStrings(arr: string[]): string[] {
    if (!arr || arr.length === 0) {
        return arr; // Return empty array if input is empty
    }

    const modifiedArr = arr.map((str, index) => {
        if (index === 0) {
            // Convert first string's first letter to lowercase
            return str.charAt(0).toLowerCase() + str.slice(1) ;
        } else {
            // Convert rest of the strings' first letter to uppercase
            return str.charAt(0).toUpperCase() + str.slice(1) ;
        }
    });

    return modifiedArr;
  }

  removeSpecialCharacters(inputString: string): string {
    if (!inputString) {
        return inputString; // Return the string as is if it's empty or null
    }
    const result = inputString.replace(/[^a-zA-Z0-9- ]/g, "")

    return result;
  }

}
