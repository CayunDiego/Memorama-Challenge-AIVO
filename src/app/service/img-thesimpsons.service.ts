import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImgThesimpsonsService {
  private BASE_URL: string;

  constructor(private http:HttpClient) {
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
    return this.shuffle(images).slice(0,10);
  }

  shuffle(array: any[]):any[] {
    return array.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

}
