import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useRef, useState } from 'react';
import Data from '../Assets/Data.json';
import HTMLData from '../Assets/HTML.json';
import '../Quizz/Quizz.css';

const allDataFiles = {
    Dashboard: Data,
    HTML: HTMLData,
    // Add other subjects and their respective data files here
};

const Challenges = () => {
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [lock, setLock] = useState(false);
    const [result, setResult] = useState(false);
    const [score, setScore] = useState(0);
    const [selectedSubject, setSelectedSubject] = useState('');
    
    const options1 = useRef(null);
    const options2 = useRef(null);
    const options3 = useRef(null);
    const options4 = useRef(null);
    const optionArray = [options1, options2, options3, options4];

    const loadQuestions = (subject) => {
        const data = allDataFiles[subject];
        setQuestions(data?.data || []);
        setQuestion(data?.data ? data.data[0] : null);
    };

    const checkAnswer = (el, ans) => {
        if (lock === false) {
            if (question.ans === ans) {
                el?.target?.classList?.add("correct");
                setScore(score + 1);
            } else {
                el?.target?.classList?.add("Wrong");
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
        setIndex(0);
        setQuestion(questions[0]);
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
        loadQuestions(subject);
        reset();
    };

    useEffect(() => {
        if (selectedSubject) {
            loadQuestions(selectedSubject);
        }
    }, [selectedSubject]);

    return (
        <>
            <div className="heading">
                <h1>CHALLENGE YOURSELF WITH OUR QUIZZES!</h1>
                <p>Test Your Knowledge and Learn New Things!</p>
            </div>
            <div className="Main-img-sub"> 
                <div className="Images">
                    <h3>BRAINYQUIZ - THE SMARTER WAY TO PLAY!</h3>
                    <img src="./images/brainyquizz.jpg" alt="Challenges laptop" />
                    <div className="list">
                        <h4>Related Quiz</h4><br/>
                        <h5>Go through</h5>
                        <ul>
                            {Object.keys(allDataFiles).map((subject) => (
                                <li key={subject} onClick={() => handleSubjectChange(subject)}>{subject}</li>
                            ))}
                        </ul>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend"></div>
                            <select className="custom-select p-2 m-1  border" style={{ backgroundColor: "yellow" }} id="inputGroupSelect01">
                                <option selected>Level of Quiz</option>
                                <option value="1">Easy</option>
                                <option value="2">Medium</option>
                                <option value="3">Hard</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="Subscribe">
                    <h1>Join Us, Subscribe to Our BRAINYQUIZ</h1>
                    <div className='container'>
                        <div className='border'>
                            <div className='gap'>
                                <h1>Quiz UI</h1>
                                <hr/>
                                {result ? <></> : <>
                                    <h3>{index + 1}. {question?.question}</h3>
                                    <div>
                                        <ul>
                                            <li ref={options1} onClick={(el) => checkAnswer(el, 1)}>{question?.options1}</li>
                                            <li ref={options2} onClick={(el) => checkAnswer(el, 2)}>{question?.options2}</li>
                                            <li ref={options3} onClick={(el) => checkAnswer(el, 3)}>{question?.options3}</li>
                                            <li ref={options4} onClick={(el) => checkAnswer(el, 4)}>{question?.options4}</li>
                                        </ul>
                                        <div className="center">
                                            <button className='btn btn-danger text-center ml-4 justify-center items-center' onClick={next}>Next</button>
                                            <div className='index'>{index + 1} of {questions.length} questions</div>
                                        </div>
                                    </div>
                                </>}
                                {result ? <>
                                    <div className="center text-bold" style={{ color: "black" }}>
                                        <p>Your Scored {score} out of {questions.length}</p>
                                        <button className="btn btn-info p-2" onClick={reset}>Reset</button>
                                    </div>
                                </> : <></>}
                            </div>
                        </div>
                    </div>
                    <footer>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, velit tempore! Nobis maiores consequuntur cumque corporis. Debitis fugit ipsum assumenda nemo ducimus reiciendis. Accusantium nulla doloremque ducimus quas ratione quasi.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed alias neque id corporis, officiis nesciunt quidem doloremque dolor recusandae ullam fuga dolores ab possimus sunt repudiandae vero sequi asperiores suscipit!
                    </footer>
                </div>
            </div>
        </>
    );
};

export default Challenges;
