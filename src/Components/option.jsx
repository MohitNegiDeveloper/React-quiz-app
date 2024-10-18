// ParentComponent.jsx
import React, { useState } from 'react';
import Header from './header';
import Main from './Main';
import Quizzpopup from './Quizzpopup';

const ParentComponent = () => {
  const [showQuizPopup, setShowQuizPopup] = useState(false);

  const toggleQuizPopup = () => {
    setShowQuizPopup(!showQuizPopup);
  };

  return (
    <>
      <Header onToggleQuizPopup={toggleQuizPopup} />
      {showQuizPopup ? <Quizzpopup /> : <Main />}
    </>
  );
};

export default ParentComponent;
