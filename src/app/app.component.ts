import { Component } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Starwarservice, category, people, planet, film, species, starships, vehicles } from './starwars.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
})
export class AppComponent {
  title = 'starwars-angular';
  items = ["species","people","planets","films","starships","vehicles"];
  datas: category[] = [];
  people: people = null;
  planet: planet = null;
  film: film = null;
  species: species = null;
  starships: starships = null;
  vehicles: vehicles = null;


  constructor(private http: HttpClient, private starwarssvc: Starwarservice, private location: Location) {}

  getstarwarsdata(name: string){
  	this.starwarssvc.getdata(name)
  	.then((result: category[]) => {
  	 this.datas = result;
  	 console.log(result);
	})
	.catch(err => {
	console.log(err);
	})
  }

  getpeopledata(category: string, url: string){
 this.starwarssvc.getpeople(category,url)
  .then((result: any) => {
  	if (category == "people")
    this.people = result;
    else if(category == 'planets')
    this.planet = result;
    else if(category == 'films')
    this.film = result;
    else if(category == 'species')
    this.species = result;
    else if(category == 'starships')
    this.starships = result;
    else
    this.vehicles = result;
})
  .catch(err => {
   console.log(err);
  })
  }

  gotopreviousscreen(): void{
  	window.location.reload();
}

}
