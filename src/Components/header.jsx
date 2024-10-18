import React, { useState } from "react";

import Quizz from '../Quizz/main';


const header = () => {

// eslint-disable-next-line react-hooks/rules-of-hooks
const [isQuizzStarted , setIsQuizzStarted] = useState(true);

    const handleStartQuiz =()=>{
        setIsQuizzStarted(false)
    }


    return(
        <>
        {isQuizzStarted ? (
        <div id="header" >
            
            <img src="./images/QuizLogoRemove.png" alt="logo"  />
            <div className="Quiz-left  col-lg-6 col-md-6 col-sm-6">
                <h1>DynamicTechQuizzes</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est amet debitis, ad labore minima alias laudantium tempora quos necessitatibus possimus deleniti voluptatibus cupiditate laboriosam, cumque ab incidunt rem assumenda error!</p>
                <button className="btn"  id="bttn" onClick={handleStartQuiz}>Start Quiz</button>
            </div>
        </div>
        ): (<Quizz/>
    )}
        </>
    )
}
export default header;