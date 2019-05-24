import { ICard } from '../interface/cardInterface';

export class CardService {
    listCard: ICard[] = [
        {
            id: 1,
            title: 'Placeholder 1',
            description: 'Thumbnail 1',
            length: '9 mins',
            // tslint:disable-next-line:max-line-length
            content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        },
        {
            id: 2,
            title: 'Placeholder 2',
            description: 'Thumbnail 2',
            length: '15 mins',
            // tslint:disable-next-line:max-line-length
            content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        },
        {
            id: 3,
            title: 'Placeholder 3',
            description: 'Thumbnail 3',
            length: '30 mins',
            // tslint:disable-next-line:max-line-length
            content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        }
    ];
    constructor() {

    }

    addOneCard(card: ICard) {
        this.listCard.push(card);
    }

    removeCard(id: number) {
        this.listCard = this.listCard.filter((card) => {
            return card.id !== id;
        });
    }

    updateCard(card: ICard) {
        // TODO
    }

}
