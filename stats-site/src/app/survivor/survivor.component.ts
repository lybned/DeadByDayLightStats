import { Component, OnInit } from '@angular/core';
import { Survivor } from '../models/Survivor'; // Assuming Perk class is defined in a separate file
import { SurvivorService } from '../services/character.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-survivor',
  standalone: true,
  imports: [NgFor],
  templateUrl: './survivor.component.html',
  styleUrl: './survivor.component.css'
})
export class SurvivorComponent implements OnInit {
  survivors: Survivor[] = [];

  constructor(private survivorService: SurvivorService) { }

  ngOnInit(): void {
    this.loadSurvivors()
  }

  loadSurvivors(){
    this.survivorService.getCharacter().subscribe((character: any) => {
      for (const key in character) {
        const current = character[key]     
        if (current.role === "survivor"){
          this.survivors.push(current)
        }
      }
    })
  }

  getImageURL(url : string){
    return "assets/" + url
  }

}
