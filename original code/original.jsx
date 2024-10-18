import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useRef, useState } from 'react';
import Data from '../Assets/Data.json';
// import HTMLData from '../Assets/HTML.json';
import '../Quizz/Quizz.css';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
const Challenges = () => {

    

    let [index, setIndex] = useState(0);
        // let [question , setQuestion] = useState(data[index]);
        const [question, setQuestion] = useState(null);
        // eslint-disable-next-line no-unused-vars
        const [questions, setQuestions] = useState([]);
        let [lock , setLock] = useState(false);
        let [result, setResult] = useState(false);
        let [score, setScore] = useState(0);
        let options1 = useRef(null);
        let options2 = useRef(null);
        let options3 = useRef(null);
        let options4 = useRef(null);
        let [selectedSubject, setSelectedSubject] = useState('');
        let optionArray = [options1, options2, options3, options4];
        console.log(optionArray);

        
        
        const checkAnswer =(el,ans) => {
            if(lock === false){
            if(question.ans === ans){
                el?.target?.classList?.add("correct");
                setLock(true);
                optionArray =[question.ans-1]?.current?.classList?.add("correct")
                setScore(score + 1);
            }else{
                el?.target?.classList?.add("Wrong");
                setLock(true);
                optionArray =[question.ans-1]?.current?.classList?.add("Wrong")
            }
        }
        
    }

    // Check Answer for HTML quiz
    const checkAnswerHTML =(el,ans) => {
        if(lock === false){
        if(question.ans === ans){
            el?.target?.classList?.add("correct");
            setLock(true);
            optionArray =[question.ans-1]?.current?.classList?.add("correct")
            setScore(score + 1);
        }else{
            el?.target?.classList?.add("Wrong");
            setLock(true);
            optionArray =[question.ans-1]?.current?.classList?.add("Wrong")
        }
    }
    
};
// For Next button when HTML quiz is run 
// const nextHTML = () => {
        
//     if(lock === true){
//         if(index === HTMLData["data "].length -1){
//             setResult(true);
//             return 0;
//         }
//         setIndex (++index);
//         setQuestion(HTMLData["data "][index]);
//         setLock(false);
//         optionArray.map((options)=>{
//             options.current.classList.remove("Wrong");
//             options.current.classList.remove("correct");
//             return null;
//         })
//     }
// };
// console.log("data" , HTMLData["data "]);

// const resetHTML = () => {
//     setIndex(0);
//     setQuestion(HTMLData["data "][0]);
//     setScore(0);
//     setLock(false);
//     setResult(false);
// };


const next = () => {
        
    if(lock === true){
        if(index === Data.data.length -1){
            setResult(true);
            return 0;
        }
        setIndex (++index);
        setQuestion(Data.data[index]);
        setLock(false);
        optionArray.map((options)=>{
            options.current.classList.remove("Wrong");
            options.current.classList.remove("correct");
            return null;
        })
    }
};
console.log("data" , Data.data);

    const reset = () => {
        setIndex(0);
        setQuestion(Data.data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    };
    console.log(next);
    
    
    useEffect(() => {
        if (selectedSubject) {
        fetch(`/${selectedSubject}.json`)
    .then(response => response.json())
    
    .then(data => {
        setQuestions(data);
        setQuestion(data[0]);
        reset();
        console.log(data)
    })
    .catch(error => console.error('Error loading quiz data:', error));
}
}, [selectedSubject]);

    const handleSubjectChange = (subject) => {
        console.log(subject);
        setSelectedSubject(subject);
        reset(); // Reset quiz when the subject changes
    };
    console.log('QUE', question

    );

    return (
        <>
            <div className="heading">
                <h1>CHALLENGES YOURSELF WITH <br /> OUR QUIZZES!</h1>
                <p>Test Your Knowledges and Learn New Things!</p>
            </div>
            <div className="Main-img-sub"> 
            <div className="Images">
                <h3>BRAINYQUIZ - THE <br/>SMARTER WAY TO PLAY !</h3>
                <img src="./images/brainyquizz.jpg" alt="Challenges laptop" />
                <div className="list">
                    <h4>Related Quiz</h4><br/>
                    <h5>Go through</h5>
                    <ul>
                            <li onClick={() => handleSubjectChange('Dashboard')}>Dashboard</li>
                            <li onClick={() => handleSubjectChange('Subject')}>Subject</li>
                            <li onClick={() => handleSubjectChange('React JS')}>React JS</li>
                            <li onClick={() => handleSubjectChange('HTML')}>HTML</li>
                            <li onClick={() => handleSubjectChange('CSS')}>CSS</li>
                            <li onClick={() => handleSubjectChange('Javascript')}>Javascript</li>
                            <li onClick={() => handleSubjectChange('Tailwind')}>Tailwind</li>
                            <li onClick={() => handleSubjectChange('BootStrap')}>BootStrap</li>
                            <li onClick={() => handleSubjectChange('NodeJS')}>NodeJS</li>
                        </ul>
                    <div class="input-group mb-3">
  <div className="input-group-prepend">
  </div>
  <select className="custom-select p-2 m-1  border " style={{backgroundColor:"yellow"}} id="inputGroupSelect01">
    <option selected>Level of Quizz</option>
    <option value="1">Easy</option>
    <option value="2">Medium</option>
    <option value="3">Hard</option>
  </select>
    </div>
        </div>
            </div>
            
                <div className="Subscribe">
                <h1>Join Us, Subscribe to Our BRAINYQUIZ  </h1>
                <div className='container'>
        <div className='border'>
            <div className='gap'>
        <h1>Quizz UI</h1>
        <hr/>
        {result? <></>:<><h3>{index+1}. {question?.question}</h3>
        <div >
        <ul>
            <li ref={options1} onClick={(el)=>{checkAnswer(el,1); checkAnswerHTML(el,1); }}>{question?.options1}</li>
            <li ref={options2} onClick={(el)=>{checkAnswer(el,2); checkAnswerHTML(el,2);}}>{question?.options2}</li>
            <li ref={options3} onClick={(el)=>{checkAnswer(el,3); checkAnswerHTML(el,3);}}>{question?.options3}</li>
            <li ref={options4} onClick={(el)=>{checkAnswer(el,4); checkAnswerHTML(el,4);}}>{question?.options4}</li>
        </ul>
        <div className="center">
        <button className='btn btn-danger text-center  ml-4 justify-center items-center' onClick={() => {next(); }}>Next</button>
        <div className='index'>{index+1} of {Data.data.length} questions</div>
        </div>
        </div>
        </>}
        {result?<>
            <div className="center text-bold" style={{color:"black"}}>
                <p>Your Scored {score} out of {Data.data.length} </p>
        <button className="btn btn-info p-2" onClick={()=>{reset()}}>Reset</button>
        </div>
        </>:<></>}
        </div>
        </div>
        </div>
            <footer >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, velit tempore! Nobis maiores consequuntur cumque corporis. Debitis fugit ipsum assumenda nemo ducimus reiciendis. Accusantium nulla doloremque ducimus quas ratione quasi.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed alias neque id corporis, officiis nesciunt quidem doloremque dolor recusandae ullam fuga dolores ab possimus sunt repudiandae vero sequi asperiores suscipit!
            </footer>
        
            </div>
            
        </div>
            
        </>
    )
}

export default Challenges;