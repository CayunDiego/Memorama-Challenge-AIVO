import { Component, OnInit } from '@angular/core';
import { CardInterface } from './shared/models/card.interface';
import { ImgSuperHeroes } from './service/imgSuperHeroes.service';
import { HelpersService } from './helpers/helpers.service';
import { PlayerInterface } from './shared/models/player.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Memorama';
  imagesFrontCard: string[] = [];

  cards: CardInterface[] = [];
  frontCards: CardInterface[] = [];

  players: PlayerInterface[] = [];
  isPlayer: number[] = [0,1];

  constructor( private imgService: ImgSuperHeroes,
               private helpers: HelpersService){}

  ngOnInit(): void {
    this.initCard();
    this.players = [{
      id: 1,
      userName: "Tiago",
      img: "1",
      status: true,
      points: 0
    },
    {
      id: 2,
      userName: "Tiara",
      img: "2",
      status: false,
      points: 0
    }];
  }

  async initCard(){
    await this.imgService.getImages().then( images => {
      this.imagesFrontCard = images;
    });
    this.setCards();
  }

  setCards() {
    this.cards = [];
    this.imagesFrontCard.map( (img, index) => {
      const card: CardInterface = {
        idCard: index,
        img: img,
        status: 1
      }
      this.cards.push({...card});
      this.cards.push({...card});
    });
    //hay que mesclar las cartas
    this.cards = this.helpers.shuffle(this.cards);
  }

  propagateClick(id:number){
    const currentCard = this.cards[id];
    if(currentCard.status === 1 && this.frontCards.length <= 1 ){
      currentCard.status = 2;
      this.frontCards.push(currentCard);
      this.frontCards.length === 2 && this.verifyMatch(this.frontCards);
    }
  }

  //Match function
  verifyMatch(pairOfCards: CardInterface[]){
    if(pairOfCards[0].idCard === pairOfCards[1].idCard){
      //Match
      const idCard = pairOfCards[0].idCard;
      this.cards.map( card => {
        if(card.idCard  === idCard){
          card.status = 3;
        }
      });
      this.setPlayer();
    } else {
      setTimeout(() => {
        this.cards.map( card => {
          if(card.idCard  === pairOfCards[0].idCard){
            card.status = 1;
          }
          if(card.idCard  === pairOfCards[1].idCard){
            card.status = 1;
          }
        });
        this.togglePlayer();
      }, 1000);
    }
    setTimeout(() => {
      this.frontCards = [];
    }, 1000);
  }

  setPlayer(){
    this.players[this.isPlayer[0]] = {
      ...this.players[this.isPlayer[0]],
      points: this.players[this.isPlayer[0]].points + 10
    }
  }

  //isPlayer [], position 0: playing, position 1: waiting
  togglePlayer(){
    if(this.isPlayer[0] === 0){
      this.isPlayer = [1,0];
    } else {
      this.isPlayer = [0,1];
    }
    this.players[this.isPlayer[1]] = {
      ...this.players[this.isPlayer[1]],
      status: false
    }
    this.players[this.isPlayer[0]] = {
      ...this.players[this.isPlayer[0]],
      status: true
    }
  }

}
