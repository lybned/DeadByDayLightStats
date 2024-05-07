import { Component, OnInit } from '@angular/core';
import { Survivor } from '../models/Survivor'; // Assuming Perk class is defined in a separate file
import { SurvivorService } from '../services/survivor.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-survivor',
  standalone: true,
  imports: [NgFor],
  templateUrl: './survivor.component.html',
  styleUrl: './survivor.component.css'
})
export class SurvivorComponent implements OnInit {
  survivor: Survivor[] = [];

  constructor(private survivorService: SurvivorService) { }

  ngOnInit(): void {
    this.loadSurvivors()
  }

  loadSurvivors(){
    this.survivor = this.survivorService.getSurvivors()
    console.log(this.survivor)
  }

}
