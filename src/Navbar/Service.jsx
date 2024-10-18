import React, {useState} from 'react';

const Service = () => {
    const [isHovered , setMouseHover] = useState(false);


    const style ={ 
        img:{
        backgroundColor: 'black', // background-color in CSS
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        textAlign: 'center',
        textDecoration:"none",
    },
    p: {
        color: "black",
        fontSize: "25px",
        fontWeight: "700",
        marginTop: "25px",
        padding: "12px",
        border: "2px solid black",
        transition: "",
        cursor:"pointer",
        ...(isHovered && {
            height: "258px",
        })
        },
    a:{
        textDecoration:"none",
        fontSize:"18px",
        fontSpacing:"0.5rem",
        fontWeight:"600"

    }
}
    
    return(
        <>
        <div className="div">
        OUR SERVICES
        <div className="container">
            <div className="" style={style.img}>
            <h3>4 ways to be more Productive </h3>
                <img src="./images/LogoQuiz.png" alt="Logo" style={{Width:"200px",height:"150px"}} />
                
                <p
            style={style.p}
            mouseHover={() => setMouseHover(true)}
            mouseHoverLeave={() => setMouseHover(false)}
            >
            {isHovered
        ? "Focus on high-priority tasks first, creating a to-do list and tackling the most important items early in the day."
        : "Hover over this text to see more information."}
    </p>
            </div>
            <div style={style}>
            <p
            style={style.p}
            mouseHover={() => setMouseHover(true)}
            mouseHoverLeave={() => setMouseHover(false)}
            >
            {isHovered
        ? "Focus on high-priority tasks first, creating a to-do list and tackling the most important items early in the day."
        : "Hover over this text to see more information."}
    </p>
                <p style={style.p}>Prioritize Tasks</p>
                    <a  style={style.a} href="#">Focus on high-priority tasks first, creating a to-do list and tackling the most important items early in the day.</a>
                
                <p style={style.p}>Take Strategic Breaks</p>
                    <a style={style.a} href="#">
                    Incorporate short, planned breaks between tasks to recharge your energy and maintain focus throughoutthe day.
                    </a>
                
                <p style= {style.p}>Try Time Blocking </p>
                    <a style={style.a} href="#">
                    Allocate specific time blocks for different tasks, reducing distractions and enhancing concentration on one task at a time.
                    </a>
                
                <p style={style.p}>Establish clear goals</p>
                    <a style={style.a} href="#">
                    Establish clear and achievable goals for each day, week, or project, providing a sense of direction to stay productive.
                    </a>
                
            </div>
        </div>
        </div>
        </>
    )
}

export default Service;