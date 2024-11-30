import React, { useState } from "react";
// import Card from "./components/Card/Card";
import LeftArrow from "../../assets/icons/leftArrow.svg";

interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    title: "Background Remover",
    description: "Remove backgrounds in seconds.",
    imageUrl: "/agents1.png", // Placeholder image
  },
  {
    id: 2,
    title: "Background Changer",
    description: "Changes background of the image in seconds.",
    imageUrl: "/agents1.png", // Placeholder image
  },
  {
    id: 3,
    title: "Video Generator",
    description: "Transform images into captivating videos in seconds.",
    imageUrl: "/agents1.png", // Placeholder image
  },
  {
    id: 4,
    title: "Description Generator",
    description: "Remove backgrounds in seconds.",
    imageUrl: "/agents1.png", // Placeholder image
  },
  {
    id: 5,
    title: "Smart Crop",
    description: "Automatically crop videos for differentaspect ratios.",
    imageUrl: "/agents1.png", // Placeholder image
  },
  {
    id: 6,
    title: "Avatars",
    description: "Choose or create your own avatars to promote products",
    imageUrl: "/agents1.png", // Placeholder image
  },
  {
    id: 7,
    title: "Video Editor",
    description: "Transform images into captivating videos in seconds.",
    imageUrl: "/agents1.png", // Placeholder image
  },
  {
    id: 8,
    title: "AI Shadows",
    description: "Remove backgrounds in seconds.",
    imageUrl: "/agents1.png", // Placeholder image
  },
  {
    id: 9,
    title: "Background Remover",
    description: "Remove backgrounds in seconds.",
    imageUrl: "/agents1.png", // Placeholder image
  },
  {
    id: 10,
    title: "Background Changer",
    description: "Changes background of the image in seconds.",
    imageUrl: "/agents1.png", // Placeholder image
  },
  {
    id: 11,
    title: "Video Generator",
    description: "Transform images into captivating videos in seconds.",
    imageUrl: "/agents1.png", // Placeholder image
  },
  {
    id: 12,
    title: "Description Generator",
    description: "Remove backgrounds in seconds.",
    imageUrl: "/agents1.png", // Placeholder image
  },
  //   {
  //     id: 13,
  //     title: "Smart Crop",
  //     description: "Automatically crop videos for differentaspect ratios.",
  //     imageUrl: "/agents1.png", // Placeholder image
  //   },
  //   {
  //     id: 14,
  //     title: "Avatars",
  //     description: "Choose or create your own avatars to promote products",
  //     imageUrl: "/agents1.png", // Placeholder image
  //   },
  //   {
  //     id: 15,
  //     title: "Video Editor",
  //     description: "Transform images into captivating videos in seconds.",
  //     imageUrl: "/agents1.png", // Placeholder image
  //   },
  //   {
  //     id: 16,
  //     title: "AI Shadows",
  //     description: "Remove backgrounds in seconds.",
  //     imageUrl: "/agents1.png", // Placeholder image
  //   },
  // Add more cards as needed
];

const categories = ["Image", "Video", "Starred"];

const Card: React.FC<CardData> = ({ title, description, imageUrl }) => (
  <div className="flex flex-col px-6 py-4 rounded-lg shadow-lg bg-white mt-3">
    <img className="h-8 w-8" src={imageUrl} alt={title} />
    <div className=" py-4">
      <h2 className="font-semibold text-lg text-gray-800">{title}</h2>
      <p className="font-inter text-[14px] text-[#C7C6C4]">{description}</p>
    </div>
  </div>
);

const Templates: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div className="flex flex-col gap-3 p-6">
      <div className="flex gap-5">
        <img
          src={LeftArrow}
          onClick={() => {
            history.back();
          }}
        />
        <h2 className="text-3xl font-semibold">Templates</h2>
      </div>
      <div className="flex items-center gap-3 pb-2">
        {categories.map((category, index) => (
          <span
            className={`${
              selectedCategory === index
                ? "bg-[#0F172A] text-white"
                : "border-[#E5E5E5] border"
            } cursor-pointer rounded-full px-[20px] py-[5px]`}
            onClick={() => setSelectedCategory(index)}
          >
            {category}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
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

export default Templates;
