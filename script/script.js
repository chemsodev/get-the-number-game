(() => {
    "use strict";
  
  
    const htmlElements = {
      resetButton: document.querySelector("#reset"),
      increaseButton: document.querySelector("#increase"),
      decreaseButton: document.querySelector("#decrease"),
      countLabel: document.querySelector("#count"),
      replayButton: document.querySelector("#replay")
    };
  
    const initialize = () => {
      
  
      const resetCountdown = () => {
        htmlElements.countLabel.textContent = "0";
        updateCountdown();
      };
  
      const replayCountdown = () => {
        resetCountdown();
  
        htmlElements.replayButton.addEventListener("click", replayCountdown);
      };
  
      const increaseScore = () => {
        const newValue = parseInt(htmlElements.countLabel.textContent)+ 1;
        htmlElements.countLabel.textContent = newValue.toString();
      };
  
      const decreaseScore = () => {
        if (parseInt(htmlElements.countLabel.textContent) > 0) {
          htmlElements.countLabel.textContent = (parseInt(htmlElements.countLabel.textContent) - 1).toString();
        }
      };
  
  
      const registerEventListeners = () => {
        htmlElements.resetButton.addEventListener("mousedown", resetCountdown);
        htmlElements.resetButton.addEventListener("mouseup", resetDimensions.bind(null, resetButton));
  
        htmlElements.increaseButton.addEventListener("mousedown", increaseScore);
        htmlElements.increaseButton.addEventListener("mouseup", resetDimensions.bind(null, increaseButton));
  
        htmlElements.decreaseButton.addEventListener("mousedown", decreaseScore);
        htmlElements.decreaseButton.addEventListener("mouseup", resetDimensions.bind(null, decreaseButton));
  
        htmlElements.replayButton.addEventListener("click", replayCountdown);
      };
  
      registerEventListeners();
    };
  
    initialize();
  
  })();
  