import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../common/service/cardService';
import { ICard } from '../../../common/interface/cardInterface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public listCard: ICard[];
  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.listCard = this.cardService.listCard;
    console.log(this.listCard);
  }

}
