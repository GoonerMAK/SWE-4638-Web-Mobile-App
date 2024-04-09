import React from 'react';

const SubmitButton = ({ onSubmit }) => {
    console.log('To Check if the Button is Rendering or not')
  return (
    <button type="submit" onClick={onSubmit}>
      Submit
    </button>
  );
};

export default React.memo(SubmitButton);
