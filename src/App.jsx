import React, { useState } from "react";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import Meals from "./components/Meals";
import Calculator from "./components/Calculator";
import ToggleBackgroundColor from "./components/ToggleBackgroundColor";
import HiddenSearchBar from "./components/HiddenSearchBar";
import Testiomonals from "./components/Testiomonals";
import { accordionData } from "./utils/content";
import Accordain from "./components/Accordain";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {/* <Counter/> */}
      {/* <Todo/> */}
      {/* <Meals/> */}
      {/* <Calculator/> */}
      {/* <ToggleBackgroundColor/> */}
      {/* <HiddenSearchBar/> */}
      {/* <Testiomonals/> */}

      <div className="accordion">
        {accordionData.map(({ title, content }, index) => (
          <Accordain
            key={index}
            title={title}
            content={content}
            isActive={activeIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
