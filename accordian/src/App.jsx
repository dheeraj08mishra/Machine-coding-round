import { useState } from "react";
import "./App.css";
const responsetoUse = [
  {
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
  },
  {
    question: "What is a component?",
    answer:
      "A component is a reusable piece of code that represents a part of a user interface. Components can be functional or class-based.",
  },
  {
    question: "What is state in React?",
    answer:
      "State is a built-in object that allows components to create and manage their own data. State changes can trigger re-renders of the component.",
  },
  {
    question: "What are props in React?",
    answer:
      "Props (short for properties) are read-only attributes that are passed from a parent component to a child component. They allow data to be shared between components.",
  },
  {
    question: "What is JSX?",
    answer:
      "JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It is used in React to describe the UI structure.",
  },
];

function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <h1>Accordian</h1>
      <div className="card">
        {responsetoUse.map((item, index) => (
          <div key={index}>
            <p>
              {item.question}
              <button onClick={() => handleClick(index)}>
                {openIndex === index ? "-" : "+"}
              </button>
            </p>
            {openIndex === index && <p>{item.answer}</p>}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
