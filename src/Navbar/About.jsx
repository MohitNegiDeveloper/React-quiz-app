const About = () =>{

    const myStyle ={
        div : {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItem: "center",
            backgroundColor:"",
            margin:"15px ",
            justifyContent:"center",
        },
        img : {
            width:"200px",
            height: "180px",
            border: "5px solid green",
            
        },
        p:{
            margin:"5px",
            padding:"10px",
            textAlign:"center",
        },
        h5:{
            color:"green",
            fontStyle:"rubin",
            fontSize:"24px",
            fontWeight:"700",
            textAlign:"center",
        }

    }
    return(
        <>
        <div style={myStyle.div}>
        <h1>ABOUT US</h1>
        
        </div>
            <div style={myStyle.div} >
                <img src="./images/LogoQuiz.png " alt="logo"  style={myStyle.img}/>
                <p  style={myStyle.p} >We believe in pushing the boundaries of what's possible. We are a team of experts committed to delivering outstanding results.</p>
            </div>
            <h5 style={myStyle.h5}>OUR VISION</h5>
            <div style={myStyle.div}>
                
                <p style={myStyle.p} >
                We believe in the power of collaboration and hard work. Together, we strive to make a positive impact in the world. By fostering innovation and embracing diversity, we aim to drive meaningful change. Our commitment to excellence ensures we consistently deliver value to our community. We are dedicated to creating a sustainable future where everyone can thrive.
                </p>
                <img src="./images/LogoQuiz.png " alt="logo"  style={myStyle.img}/>
            </div>
        </>
    )
}

export default About;