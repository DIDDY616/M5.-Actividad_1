import { useState } from "react";

function PrimaryButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      onClick={() => setClicked(!clicked)}
      className={`
        flex items-center justify-center gap-2 
        px-6 py-3 w-full max-w-xs
        rounded-lg font-semibold text-sm tracking-wide
        transition-all duration-200 ease-in-out
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500
        ${
          clicked
            ? "bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/25"
            : "bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
        }
        active:scale-95 cursor-pointer
      `}
    >
      {clicked ? "¡Suscrito!" : "Suscribirse"}
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className={`w-4 h-4 transition-transform duration-200 ${clicked ? "rotate-90" : ""}`}
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  );
}

export default PrimaryButton;