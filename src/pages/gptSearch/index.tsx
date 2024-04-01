import React, { useEffect, useState } from "react";
import { GradientImage, Header, Toast } from "../../components";
import GptSearchBar from "./components/GptSearchBar";
import GptMovieSuggestions from "./components/GptMovieSuggestions";

export const GptSearch: React.FC = () => {
  const [showToast, toggleToast] = useState<boolean>(false);

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        toggleToast(false);
      }, 5000);
    }
  }, [showToast]);

  return (
    <>
      <Header />
      <GradientImage />
      <div className="absolute z-10 top-40 w-full">
        <GptSearchBar onError={() => toggleToast(true)} />
        <GptMovieSuggestions />
      </div>
      <Toast
        show={showToast}
        errorText="GPT API key might've expired"
        onClose={() => toggleToast(false)}
      />
    </>
  );
};
