import React, { useState } from "react";
import assets from '../constants/assets';
import { Link } from 'react-router-dom';

const bookss = [
  { id: 1, name: "@ihatemyl1f3", imageSrc: "s.jpg" ,href: "/user" },
  { id: 2, name: "@idontknow", imageSrc: "s.jpg"},
  { id: 3, name: "@CandyPlantSun", imageSrc: "s.jpg" },
  { id: 3, name: "I am Malala", imageSrc: "s.jpg" },
];

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [matchingWords, setMatchingWords] = useState([]);

  const handleInputChange = (event) => {
    const input = event.target.value.toLowerCase();
    const matchingWords = bookss.filter((word) =>
      word.name.toLowerCase().includes(input)
    );
    setSearchTerm(input);
    setMatchingWords(matchingWords);
  };

  const handleSuggestionClick = (event, link = "/BookPage") => {
    event.preventDefault();
    console.log("Navigating to:", link);
    window.location.href = link;
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="rounded-full bg-white shadow-md pl-4 pr-8 py-2 w-full focus:outline-none focus:shadow-outline placeholder-gray-400 text-gray-900"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
        <svg
          className="h-5 w-5 text-gray-800"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M22 22l-6-6"></path>
          <path d="M16 11A5 5 0 1 0 6 11a5 5 0 0 0 5 5 5 5 0 0 0 5-5z"></path>
        </svg>
      </div>
      {searchTerm && (
        <ul className="search-suggestions absolute bg-white shadow-md w-full rounded-lg space-y-2">
          {matchingWords.map((word) => (
            <li key={word.id} className="relative left-2">
              <a href={word.href || "#"} onClick={(event) => handleSuggestionClick(event, word.href)}>
                {word.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;

         
