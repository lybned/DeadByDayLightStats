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
    });
  }
}
