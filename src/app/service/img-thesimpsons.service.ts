import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelpersService } from '../helpers/helpers.service';


@Injectable({
  providedIn: 'root'
})
export class ImgThesimpsonsService {
  private BASE_URL: string;

  constructor(private http:HttpClient,
              private helpers: HelpersService) {
    this.BASE_URL = 'https://akabab.github.io/superhero-api/api';
   }

  async getImages(){
    let images: string[] = [];
    let characters = [];
    const res = await this.http.get(`${this.BASE_URL}/all.json`).toPromise();
    characters = Object.values(res).filter( character => {
      return character.biography.publisher === "DC Comics";
    });
    Object.values(characters).map( character => {
      images.push(character?.['images'].md);
    });
    return this.helpers.shuffle(images).slice(0,10);
  }




}
