import React, { useState } from "react";
import "./App.css";

const quotes = [ /* your updated quotes array here */ 
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Don't let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    text: "It's not whether you get knocked down, it's whether you get up.",
    author: "Vince Lombardi",
  },
  {
    text: "If you are working on something exciting, it will keep you motivated.",
    author: "Steve Jobs",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    text: "The harder you work for something, the greater you'll feel when you achieve it.",
    author: "Unknown",
  },
  {
    text: "Dream bigger. Do bigger.",
    author: "Unknown",
  },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown",
  },
  {
    text: "Sometimes later becomes never. Do it now.",
    author: "Unknown",
  },
  {
    text: "Great things never come from comfort zones.",
    author: "Unknown",
  },
  {
    text: "Success doesn’t just find you. You have to go out and get it.",
    author: "Unknown",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
  }
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div
  className="flex items-center justify-center w-screen h-screen"
  style={{
    backgroundImage: "url('city.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
>

      <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-6 max-w-md text-center">
        <h2 className="text-xl font-semibold mb-4">Quote of the Moment</h2>
        <p className="text-lg italic">"{quote.text}"</p>
        <p className="mt-2 text-sm font-semibold">- {quote.author}</p>
        <button
          onClick={generateQuote}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Generate Quote
        </button>
      </div>
    </div>
  );
}

export default App;
