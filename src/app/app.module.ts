import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RacesComponent } from './races.component';
import { RaceService } from "./races.service";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent , RacesComponent ],
  providers: [ RaceService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}