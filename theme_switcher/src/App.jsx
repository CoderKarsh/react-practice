import { useState } from "react";
import "./App.css";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <>
      <div>
        <h1>Theme Switcher</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          impedit quae recusandae dolor eaque temporibus ad explicabo id eum
          cumque aperiam aut quos magnam, quaerat atque architecto nihil eos
          possimus a facere nemo sapiente mollitia! Reiciendis assumenda doloribus
          itaque inventore consectetur. Velit beatae voluptatem eaque, aliquam ea
          voluptate numquam ipsum!
        </p>
        <ThemeSwitcher />
      </div>
     
    </>
  );
}

export default App;
