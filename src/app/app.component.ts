import { Component, OnInit } from '@angular/core';
import { CardInterface } from './shared/models/card.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Memorama';
  imagesFrontCard = [
    'https://assets.pokemon.com/assets/cms2-es-es/img/cards/web/NRG/NRG_ES_28.png',
    'https://assets.pokemon.com/assets/cms2-es-es/img/cards/web/NRG/NRG_ES_31.png',
    'http://vignette4.wikia.nocookie.net/es.pokemon/images/5/55/Energ%C3%ADa_planta_%28Diamante_%26_Perla_TCG%29.jpg/revision/latest?cb=20111231153753',
    'https://static.wikia.nocookie.net/espokemon/images/2/2d/Energ%C3%ADa_rel%C3%A1mpago_%28Diamante_%26_Perla_TCG%29.jpg/revision/latest?cb=20101229214129',
    'https://static.wikia.nocookie.net/espokemon/images/7/76/Energ%C3%ADa_incolora_%28Ex_Legend_Maker_TCG%29.png/revision/latest?cb=20111016231509'
  ];

  cards: CardInterface[] = [];
  frontCards: CardInterface[] = [];

  ngOnInit(): void {
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
    //hay que mesclarlas

  }


  propagateClick(id){
    const currentCard = this.cards[id];
    console.log("card", currentCard)

    if(currentCard.status === 1 && this.frontCards.length <= 1 ){
      currentCard.status = 2;
      this.frontCards.push(currentCard);
    }
    this.frontCards.length === 2 && this.verifyMatch(this.frontCards);

  }

  verifyMatch(pairOfCards){
    if(pairOfCards[0].idCard === pairOfCards[1].idCard){
      const idCard = pairOfCards[0].idCard;
      this.cards.map( card => {
        if(card.idCard  === idCard){
          card.status = 3;
        }
      });
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
        }, 1000);
    }
    this.frontCards = [];
  }


}
