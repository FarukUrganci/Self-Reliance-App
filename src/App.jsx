import { useState } from "react";
import "./App.css";
import "./Components/questions";
import { questionss } from "./Components/questions";

function App() {
  const [finalResult, setFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questionss.length) {
      setCurrentQuestion(currentQuestion + 1);
    }    
    else {
      return(
      setFinalResult(true)
      )
    }
    
  };
const restartTest = () =>{
    setFinalResult(false);
    setScore(0);
    setCurrentQuestion(0);
}
  return (
    <div className="App">
      <div className="container">
        <h1>Self Reliance App</h1>
        <h2>Current Score : {score}</h2>

        {
        finalResult ?
        (
          <div className="result">
            <h1>Result</h1>
            <h2>
              {score} out of {questionss.length}
            </h2>
            <h2>{(score / questionss.length) * 100}% Self-Confident</h2>
            <button onClick={() => restartTest()}>Restart Test</button>
          </div>
        ) 
        : 
        (
          <div className="questionCard">
            <h2>
              Question {currentQuestion} out of {questionss.length} you are -{" "}
              {(score / questionss.length) * 100}% -self confident
            </h2>
            <h3>{questionss[currentQuestion].text}</h3>
            <ul>
              {
              questionss[currentQuestion].options.map( (option) => {
                return (
                  <li
                    onClick={() => optionClicked(option.isCorrect)}
                    key={option.id}
                  >

                    {option.text}

                  </li>
                );
              })
              }
            </ul>
          </div>
        )
        }
      </div>
    </div>
  );
}

export default App;
