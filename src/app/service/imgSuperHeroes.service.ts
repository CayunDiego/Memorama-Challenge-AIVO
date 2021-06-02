import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelpersService } from '../helpers/helpers.service';
import { Heroes } from './models/Heroes.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ImgSuperHeroes {
  private BASE_URL: string;

  constructor(private http:HttpClient,
              private helpers: HelpersService) {
    this.BASE_URL = 'https://akabab.github.io/superhero-api/api';
  }

  getImages(){
    return this.http.get(`${this.BASE_URL}/all.json`)
      .pipe(
        map( (res:Heroes[]) => res.filter(heroes => heroes.biography.publisher == 'DC Comics')),
        map( (heroes:Heroes[]) => heroes.map(heroe => heroe.images.md)),
        map( (images:string[]) => this.helpers.shuffle(images)),
        map( (imagesSort:string[]) => imagesSort.slice(0,10))
      )
  }

}
