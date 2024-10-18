import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useRef, useState } from "react";
import Data from "../Assets/Data.json";
import HTMLData from "../Assets/HTML.json";
import CSS from "../Assets/CSS.json";
import Tailwind from "../Assets/Tailwind.json";
import JavaScript from "../Assets/JavaScript";
import BootStrap from "../Assets/BootStrap";
import "../Quizz/Quizz.css";

const allDataFiles = {
  HTML: HTMLData,
  CSS: CSS,
  BootStrap: BootStrap,
  Tailwind: Tailwind,
  JavaScript: JavaScript,
  React: Data,
};

const Challenges = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [lock, setLock] = useState(false);
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedSubject, setSelectedSubject] = useState("");

  const options1 = useRef(null);
  const options2 = useRef(null);
  const options3 = useRef(null);
  const options4 = useRef(null);
  const optionArray = [options1, options2, options3, options4];

  const loadQuestions = (subject) => {
    const data = allDataFiles[subject];
    setQuestions(data.data || []);
    setQuestion(data.data ? data.data[0] : null);
    setIndex(0);
  };

  const checkAnswer = (el, ans) => {
    if (!lock) {
      if (question.ans === ans) {
        el.target.classList.add("correct");
        setScore(score + 1);
      } else {
        el.target.classList.add("Wrong");
      }
      setLock(true);
    }
  };

  const next = () => {
    if (lock) {
      if (index === questions.length - 1) {
        setResult(true);
      } else {
        setIndex(index + 1);
        setQuestion(questions[index + 1]);
        setLock(false);
        optionArray.forEach((option) => {
          option.current.classList.remove("Wrong");
          option.current.classList.remove("correct");
        });
      }
    }
  };

  const reset = () => {
    setScore(0);
    setLock(false);
    setResult(false);
    optionArray.forEach((option) => {
      option.current.classList.remove("Wrong");
      option.current.classList.remove("correct");
    });
  };

  const handleSubjectChange = (subject) => {
    setSelectedSubject(subject);
  };

  useEffect(() => {
    if (selectedSubject) {
      loadQuestions(selectedSubject);
      reset();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSubject]);

  const renderResultMessage = () => {
    if (score >= 15) {
      return (
        <>
        <div className="WinBackground">
          <div>

          
        <p>Congratulations! You're winning with
          <br/> a score of <span>{score}</span> !</p>
          </div>
        </div>
        </>
      )
    } else {
      return(
        <>
        <div className="LooserBackground">
          <div >
            <p>Try again, better luck next time! <br/>
              Your score is <span>{score}</span>.
              </p>
          </div>
        </div>
          
        </>
        
      )
    }

  };

  return (
    <>
      <div className="heading">
        <h1>CHALLENGE YOURSELF WITH OUR QUIZZES!</h1>
        <p>Test Your Knowledge and Learn New Things!</p>
      </div>
      <div className="Main-img-sub">
        <div className="Images">
          <p>Join Us, Subscribe To Our BRAINYQUIZ</p>
          <img src="./images/brainyquizz.jpg" alt="Challenges laptop" />
          <div className="list">
            <h4>Related Quiz</h4>
            <ul>
              {Object.keys(allDataFiles).map((subject) => (
                <li className="listOption" key={subject} onClick={() => handleSubjectChange(subject)}>
                  {subject}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="Subscribe">
          <h1>BRAINYQUIZ - THE SMARTER WAY TO PLAY!</h1>
          <div className="container">
            <div className="border">
              <div className="gap">
                <h1>Quiz Questions</h1>
                <hr />
                {result ? (
                  <>
                    {/* Render result message based on score */}
                    {renderResultMessage()}
                    <button className="btn btn-info p-2" onClick={reset}>
                      Reset
                    </button>
                  </>
                ) : (
                  <>
                    <h3>{index + 1}. {question?.question}</h3>
                    <div>
                      <ul>
                        <li ref={options1} onClick={(el) => checkAnswer(el, 1)}>
                          {question?.options1}
                        </li>
                        <li ref={options2} onClick={(el) => checkAnswer(el, 2)}>
                          {question?.options2}
                        </li>
                        <li ref={options3} onClick={(el) => checkAnswer(el, 3)}>
                          {question?.options3}
                        </li>
                        <li ref={options4} onClick={(el) => checkAnswer(el, 4)}>
                          {question?.options4}
                        </li>
                      </ul>
                      <div className="center">
                        <button className="btn btn-danger text-center" onClick={next}>
                          Next
                        </button>
                        <div className="index">
                          {index + 1} of {questions.length} questions
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Challenges;
