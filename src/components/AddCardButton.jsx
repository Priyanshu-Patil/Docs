import React, { useState, useEffect, useRef } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaRegFileLines } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { motion } from "motion/react";
import { nanoid } from "nanoid";

const AddCardButton = () => {
  // Initialize cards state from localStorage
  const [cards, setCards] = useState(() => {
    const savedCards = localStorage.getItem("cards");
    return savedCards ? JSON.parse(savedCards) : [];
  });

  const WORD_LIMIT = 100;
  const foregroundRef = useRef(null);

  // Save cards to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const handleChange = (id, newContent) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id
          ? {
              ...card,
              content: newContent,
              wordCount: newContent.trim().split(/\s+/).filter(Boolean).length,
              isSaved: false,
            }
          : card
      )
    );
  };

  const handleSave = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, savedContent: card.content, isSaved: true } : card
      )
    );
  };

  const handleDelete = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  const addNewCard = () => {
    if (cards.length >= 7) {
      alert("You can only create up to 7 cards.");
      return;
    }

    const cardWidth = 200;
    const cardHeight = 150;
    const gap = 80;

    let newPosition = { top: 50, left: 50 };

    if (cards.length > 0) {
      const lastCard = cards[cards.length - 1];
      newPosition = {
        top: lastCard.position.top,
        left: lastCard.position.left + cardWidth + gap,
      };

      if (newPosition.left + cardWidth > window.innerWidth) {
        newPosition.left = 50;
        newPosition.top = lastCard.position.top + cardHeight + gap;
      }

      if (newPosition.top + cardHeight > window.innerHeight) {
        alert("No more space to add new cards.");
        return;
      }
    }

    const newCard = {
      id: nanoid(),
      content: "",
      savedContent: "",
      isSaved: true,
      wordCount: 0,
      position: newPosition,
    };

    setCards((prevCards) => [...prevCards, newCard]);
  };

  return (
    <div ref={foregroundRef} className="relative w-full h-screen">
      <div className="relative">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            drag
            dragConstraints={foregroundRef}
            dragElastic={0.2}
            whileDrag={{ scale: 1.05 }}
            dragTransition={{ bounceDamping: 20 }}
            className="absolute bg-zinc-900/90 opacity-70 w-60 h-72 rounded-[20px] text-white p-4 overflow-hidden"
            style={{
              top: card.position.top,
              left: card.position.left,
            }}
          >
            <div className="flex justify-between items-center">
              <FaRegFileLines size={20} />
              <MdDelete
                size={20}
                className="cursor-pointer"
                onClick={() => handleDelete(card.id)}
              />
            </div>

            <textarea
              placeholder="Start documenting..."
              className="tracking-wide mt-2 flex-grow text-white resize-none outline-none bg-transparent font-semibold min-h-[210px] w-full"
              value={card.content}
              onChange={(e) => {
                const newContent = e.target.value;
                if (
                  newContent.trim().split(/\s+/).filter(Boolean).length <= WORD_LIMIT ||
                  newContent.length < card.content.length
                ) {
                  handleChange(card.id, newContent);
                }
              }}
            ></textarea>

            <div
              className={`footer absolute bottom-0 w-full h-9 left-0 flex justify-center items-center font-semibold cursor-pointer transition-all duration-300 ${
                card.isSaved ? "bg-green-500" : "bg-blue-500"
              } hover:opacity-90`}
              onClick={() => handleSave(card.id)}
            >
              {card.isSaved ? "Saved" : "Save"}
            </div>

            <div className="absolute bottom-10 right-4 text-sm text-gray-400">
              {card.wordCount}/{WORD_LIMIT} words
            </div>
          </motion.div>
        ))}
      </div>
      <button
        onClick={addNewCard}
        className="fixed bottom-8 left-8 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group"
        aria-label="Add new card"
      >
        <AiOutlinePlusCircle size={24} />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out font-semibold">
          Add Card
        </span>
      </button>
    </div>
  );
};

export default AddCardButton;
