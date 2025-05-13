import React, { useState } from 'react';

const Accordion = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    // if(show){
    //   setShow(false);
    // }else{
    //   setShow(true);
    // }
    setShow(!show);
  }

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleToggle}>
        <h2>Accordion Heading ▼</h2>
      </div>

      {/* Conditional Rendering */}
      {show && (
        <div className="accordion-body">
          <span>This handy tool helps you create dummy text for all your layout needs.
           We are gradually adding new functionality and we welcome your suggestions and feedback.
          Please feel free to send us any additional dummy texts.</span>
        </div>
      )}
    </div>
  );
};

export default Accordion;
