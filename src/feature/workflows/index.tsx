import React from 'react';
import Card from './components/Card/Card';
import Img1 from '../../assets/images/ironMan.jpg';

interface CardItem {
    imageSrc: string;
    title: string;
    description: string;
    buttonText: string;
    onClick: () => void;
}

const cardData: CardItem[] = [
    {
        imageSrc: Img1,
        title: 'Card 1',
        description: 'This is the description for card 1',
        buttonText: 'Learn More',
        onClick: () => alert('Card 1 clicked'),
    },
    {
        imageSrc: Img1,
        title: 'Card 2',
        description: 'This is the description for card 2',
        buttonText: 'Learn More',
        onClick: () => alert('Card 2 clicked'),
    },
    {
        imageSrc: Img1,
        title: 'Card 3',
        description: 'This is the description for card 3',
        buttonText: 'Learn More',
        onClick: () => alert('Card 3 clicked'),
    },
];

const CardList: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
            <div className="min-h-screen bg-gray-100">
                <h1 className="text-center text-3xl font-bold py-6">Card List</h1>
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        imageSrc={card.imageSrc}
                        title={card.title}
                        description={card.description}
                        buttonText={card.buttonText}
                        onClick={card.onClick}
                    />
                ))}
            </div>
        </div>
    );
};


export default CardList;
