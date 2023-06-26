import React, { useState } from "react";

const ButtonOnclickExample = (): JSX.Element => {
  const [clickedButton, setClickedButton] = useState("");
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    setClickedButton(button.name);
  };
  return (
    <div className="container">
      <h3> Button on click event</h3>
      <form>
        <button onClick={buttonHandler} className="button" name="1st button">
          Button 1
        </button>
        <button onClick={buttonHandler} className="button" name="second button">
          Button 2
        </button>
        <button onClick={buttonHandler} className="button" name="third button">
          Button 3
        </button>
        <button onClick={buttonHandler} className="button" name="fourth button">
          Button 4
        </button>
      </form>
      <h2>
        {clickedButton !== ""
          ? `You have clicked "${clickedButton}`
          : "No button clicked yet"}
      </h2>
    </div>
  );
};

export default ButtonOnclickExample;
