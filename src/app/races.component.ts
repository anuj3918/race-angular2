import { Component } from '@angular/core';
import { Race } from './race';
import { RaceService } from './races.service';

@Component({
  selector: 'my-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})

export class RacesComponent {
  heading = "Asphalt 8"
  cash = 10000;
  races : Race[];

  constructor(private raceService: RaceService) {};

  ngOnInit() {
    this.raceService.getRaces()
    .subscribe(data => this.races = data);
  }

  castDate(dates) {
    return new Date(dates);
  }

  enterRace(race) {
    if(this.cashLeft() - race.entryFee > 0){
      race.isRacing = true;
    }
    else {
      alert("You don't have enough cash");
    }
  }

  cancelRace(race) {
      race.isRacing = false;
  }

  totalCost() {
    let sum = 0;
    if(Array.isArray(this.races)){
      for (let race of this.races) {
        if (race.isRacing) sum += race.entryFee;
      }
    }
    return sum;
  }

  cashLeft() {
    return this.cash - this.totalCost();
  }

} 