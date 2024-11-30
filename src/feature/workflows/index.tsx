import React, { useState } from 'react';
import Card from './components/Card/Card';
import Img1 from '../../assets/images/ironMan.jpg';
import LeftArrow from '../../assets/icons/leftArrow.svg';

interface CardItem {
    imageSrc: string;
    title: string;
    description: string;
    onClick: () => void;
}

const cardData: CardItem[] = [
    {
        imageSrc: Img1,
        title: 'AI Product Photo Enhancer1',
        description: 'Transform product photos instantly with AI filters. Create professional-grade product images, remove backgrounds, and generate multiple angles from a single photo.1',
        onClick: () => alert('AI Product Photo Enhancer1 clicked'),
    },
    {
        imageSrc: Img1,
        title: 'AI Product Photo Enhancer2',
        description: 'Transform product photos instantly with AI filters. Create professional-grade product images, remove backgrounds, and generate multiple angles from a single photo.2',
        onClick: () => alert('AI Product Photo Enhancer2 clicked'),
    },
    {
        imageSrc: Img1,
        title: 'AI Product Photo Enhancer3',
        description: 'Transform product photos instantly with AI filters. Create professional-grade product images, remove backgrounds, and generate multiple angles from a single photo.3',
        onClick: () => alert('AI Product Photo Enhancer3 clicked'),
    },
    {
        imageSrc: Img1,
        title: 'AI Product Photo Enhancer3',
        description: 'Transform product photos instantly with AI filters. Create professional-grade product images, remove backgrounds, and generate multiple angles from a single photo.3',
        onClick: () => alert('AI Product Photo Enhancer3 clicked'),
    },
    {
        imageSrc: Img1,
        title: 'AI Product Photo Enhancer3',
        description: 'Transform product photos instantly with AI filters. Create professional-grade product images, remove backgrounds, and generate multiple angles from a single photo.3',
        onClick: () => alert('AI Product Photo Enhancer3 clicked'),
    },
    {
        imageSrc: Img1,
        title: 'AI Product Photo Enhancer3',
        description: 'Transform product photos instantly with AI filters. Create professional-grade product images, remove backgrounds, and generate multiple angles from a single photo.3',
        onClick: () => alert('AI Product Photo Enhancer3 clicked'),
    },
    {
        imageSrc: Img1,
        title: 'AI Product Photo Enhancer3',
        description: 'Transform product photos instantly with AI filters. Create professional-grade product images, remove backgrounds, and generate multiple angles from a single photo.3',
        onClick: () => alert('AI Product Photo Enhancer3 clicked'),
    },
    {
        imageSrc: Img1,
        title: 'AI Product Photo Enhancer3',
        description: 'Transform product photos instantly with AI filters. Create professional-grade product images, remove backgrounds, and generate multiple angles from a single photo.3',
        onClick: () => alert('AI Product Photo Enhancer3 clicked'),
    },
    {
        imageSrc: Img1,
        title: 'AI Product Photo Enhancer3',
        description: 'Transform product photos instantly with AI filters. Create professional-grade product images, remove backgrounds, and generate multiple angles from a single photo.3',
        onClick: () => alert('AI Product Photo Enhancer3 clicked'),
    },
];

const categories = [
    'All',
    'Comfy UI',
    'Swarm AI',
    'Crew AI',
    'Langchain',
    'Magnetic - One',
]

const CardList: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState(0)

    return (
        <div className="flex flex-col gap-3 p-6">
            <div className="flex gap-5 items-center">
                <img src={LeftArrow} className="w-6 h-6" alt="Left Arrow" />
                <h2 className="text-3xl font-semibold">Workflows</h2>
            </div>

            <div className="flex flex-wrap items-center gap-3 pb-2">
                {categories.map((category, index) => (
                    <span
                        key={index}
                        className={`${selectedCategory === index ? "bg-[#0F172A] text-white" : "border-[#E5E5E5] border"} 
                            cursor-pointer rounded-full px-6 py-2 min-w-max`}
                        onClick={() => setSelectedCategory(index)}
                    >
                        {category}
                    </span>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        imageSrc={card.imageSrc}
                        title={card.title}
                        description={card.description}
                        onClick={card.onClick}
                    />
                ))}
            </div>
        </div>

    );
};

export default CardList;
