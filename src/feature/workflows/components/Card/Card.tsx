import React from 'react';
import "./card.css";

interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
    buttonText: string;
    onClick: () => void;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description, buttonText, onClick }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-72 lg:w-80">
            <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-4">{description}</p>
                <button
                    onClick={onClick}
                    className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default Card;
