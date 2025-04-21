import React from "react";

const toggleLightClass = () => {
  const root = document.documentElement;
  root.classList.toggle("light");
};

const ThemeSwitcher = () => {
  return <button onClick={toggleLightClass}>Switch Theme</button>;
};

export default ThemeSwitcher;
