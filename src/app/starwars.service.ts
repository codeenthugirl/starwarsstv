import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http';

export class category{
	name: string;
	id: number;
	category: string;
	url: string;
}

export class people {
	id: number;
	name: string;
	height: number;
	mass: number;
	haircolor: string;
	eyecolor: string;
	birthyear: string;
	gender: string;
}

export class planet {
	id: number;
	name: string;
	rotationperiod: number;
	diameter: number;
	climate: string;
	gravity: string;
}

export class film {
	id: number;
    title: string;
    episodeid: number;
    director: string;
    producer: string;
    releasedate: string;
}

export class species {
	id: number;
	name: string;
	classification: string;
	designation: string;
	average_height: number;
	skin_colors: string;
	eye_colors: string;
}

export class starships{
	id: number;
	name: string;
	model: string;
	manufacturer: string;
	costincredits: string;
	length: number;
	crew: number;
}
export class vehicles{
	id: number;
	name: string;
	model: string;
	manufacturer: string;
	costincredits: string;
	length: number;
	crew: number;
}

@Injectable()
export class Starwarservice {


constructor(private http:HttpClient){
}

getdata(name: string){
return(
		this.http.get('https://swapi.co/api/'+name+'/')
		.toPromise()
		.then((data)=>{
		const w: category[]= [];
		for(let i of data['results']){
		if(name=='films'){
		w.push({name: i['title'],id: parseInt(i['url'].split('/')[i['url'].split('/').length-2],10),category: name, url: i['url']});
		}
		else{
		w.push({name: i['name'],id: parseInt(i['url'].split('/')[i['url'].split('/').length-2],10),category: name, url: i['url']});
		}
		}
		return (w);
		})
)

}

getpeople(category:string, url: string){
return(
		this.http.get(url)
		.toPromise()
		.then((data)=>{
		var x: people = null;
		var y: planet = null;
		var z: film = null;
		var a: species = null;
		var b: starships = null;
		var c: vehicles = null;

		if (category == 'people'){
		x=({id: parseInt(data['url'].split('/')[data['url'].split('/').length-2],10), name: data['name'], height: data['height'], mass: data['mass'], haircolor: data['hair_color'], eyecolor: data['skin_color'], birthyear: data['birth_year'], gender: data['gender']});
		return (x);
		}

		else if (category == 'planets'){
		y=({id: parseInt(data['url'].split('/')[data['url'].split('/').length-2],10), name: data['name'], rotationperiod: data['rotation_period'], diameter: data['diameter'], climate: data['climate'], gravity: data['gravity']});
		return (y);
		}

		else if (category == 'films'){
		z=({id: parseInt(data['url'].split('/')[data['url'].split('/').length-2],10), title: data['title'], episodeid: data['episode_id'], director: data['director'], producer: data['producer'], releasedate: data['release_date']});
		return (z);
		}

		else if (category == 'species'){
		a=({id: parseInt(data['url'].split('/')[data['url'].split('/').length-2],10), name: data['name'], classification: data['classification'], designation: data['designation'], average_height: data['average_height'], skin_colors: data['skin_colors'], eye_colors: data['eye_colors']});
		return (a);
		}

		else if (category == 'starships'){
		b=({id: parseInt(data['url'].split('/')[data['url'].split('/').length-2],10), name: data['name'], model: data['model'], manufacturer: data['manufacturer'], costincredits: data['cost_in_credits'], length: data['length'], crew: data['crew']});
		return (b);
		}

		else {
		c= ({id: parseInt(data['url'].split('/')[data['url'].split('/').length-2],10), name: data['name'], model: data['model'], manufacturer: data['manufacturer'], costincredits: data['cost_in_credits'], length: data['length'], crew: data['crew']});
		return(c);
		}

		})
)

	
}
}
	