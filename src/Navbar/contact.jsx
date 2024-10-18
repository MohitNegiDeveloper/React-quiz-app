// const Contact = () => {
//     const myStyleForm = {
//         input : {
//             margin:"15px",
//             padding:"10px",
//             border:"none",
//             width:"25vw"
//         },
//         div:{
//             backgroundColor: "black",
//             width:"60%",
//             height:"250px",
//             display:"flex",
//             flexDirection:"row",
//             flexWrap:"wrap",
//             margin:"25px",
//         },
//         h2:{
//             textAlign:"center",
//             color:"white"
//         }
//     }
//     return(
//         <>
//             <div style={myStyleForm.div}>
//             <h2 style={myStyleForm.h2}>CONTACT US</h2>
//                 <form>
//                     <input style={myStyleForm.input}
//                     type="text"
//                     onChange={InputEvent}
//                     placeholder="Enter Your Contact"
//                     value={Number}
//                     name="email"
//                     />
//                     <input style={myStyleForm.input}
//                     type="text"
//                     onChange={InputEvent}
//                     placeholder="Email"
//                     value={Number}
//                     name="email"
//                     />
//                     <input style={myStyleForm.input}
//                     type="textArea"
//                     onChange={InputEvent}
//                     placeholder="message"
//                     value=""
//                     name="message"
//                     />
//                 </form>
//             </div>
//         </>
//     )
// }

// export default Contact;

import React from "react";
// import "./loginForm.css"; // Ensure you have basic styling for the form

const LoginForm = () => {
  return (
    <form className="login-form">
      <h2>contact</h2>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" required />
      </div>
      <div className="form-group">
      <label>Phone Number</label>
      <input type="Number" className="form-control" required />
        <label>Message</label>
        <input type="Message" className="form-control" required />
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;