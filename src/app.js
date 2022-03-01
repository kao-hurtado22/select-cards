window.onload = () => {
  let suits = ["diams", "hearts", "clubs", "spades"];
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  let oderCards = [];

  let buttonDraw = document.querySelector(".draw-button");
  buttonDraw.addEventListener("click", myFunctionCards);

  function myFunctionCards() {
    oderCards = [];
    let myCard = document.querySelector(".container");
    if (myCard.childNodes.length !== 0) {
      myCard.innerHTML = "";
    }
    let inputValueCards = parseInt(
      document.getElementById("numbercards").value
    ); //estoy llamando al valor del input que coloca el usuario
    if (inputValueCards === 0) {
      alert("Coloca un numero mayor a 0");
    } else if (inputValueCards !== 0) {
      for (let i = 0; i < inputValueCards; i++) {
        let objElementsCard = {
          suits: suits[Math.floor(Math.random() * suits.length)],
          numbers: numbers[Math.floor(Math.random() * numbers.length)]
        };
        oderCards.push(objElementsCard);
      }
      if (myCard.childNodes.length === 0) {
        for (let element of oderCards) {
          if (element.numbers === 1) {
            element.numbers = "A";
          }
          if (element.numbers === 11) {
            element.numbers = "J";
          }
          if (element.numbers === 12) {
            element.numbers = "Q";
          }
          if (element.numbers === 13) {
            element.numbers = "K";
          }
          let myDiv = document.createElement("div");
          let contentDiv = document.createTextNode(`${element.numbers}`);
          myDiv.className = `card ${element.suits}`;
          myDiv.appendChild(contentDiv);
          myCard.appendChild(myDiv);
        }
      }
    }
  }
  const selectSort = () => {
    let myContainerDiv = document.querySelector(".list");
    if (myContainerDiv.childNodes.length !== 0) {
      myContainerDiv.innerHTML = "";
    }
    let min = 0;
    while (min < oderCards.length - 1) {
      if (oderCards[min].numbers === "A") {
        oderCards[min].numbers = 1;
      }
      if (oderCards[min].numbers === "J") {
        oderCards[min].numbers = 11;
      }
      if (oderCards[min].numbers === "Q") {
        oderCards[min].numbers = 12;
      }
      if (oderCards[min].numbers === "K") {
        oderCards[min].numbers = 13;
      }
      for (let i = min + 1; i < oderCards.length; i++) {
        if (oderCards[i].numbers === "A") {
          oderCards[i].numbers = 1;
        }
        if (oderCards[i].numbers === "J") {
          oderCards[i].numbers = 11;
        }
        if (oderCards[i].numbers === "Q") {
          oderCards[i].numbers = 12;
        }
        if (oderCards[i].numbers === "K") {
          oderCards[i].numbers = 13;
        }
        if (oderCards[min].numbers > oderCards[i].numbers) {
          let aux = oderCards[min].numbers;
          oderCards[min].numbers = oderCards[i].numbers;
          oderCards[i].numbers = aux;
        }
      }
      min++;

      let myUl = document.createElement("ul");
      let liNumber = document.createElement("li");
      liNumber.innerHTML = `${min - 1}:`;
      myUl.appendChild(liNumber);
      myUl.className = "lista-containers-cards-sort";
      myContainerDiv.appendChild(myUl);
      // Este for itera cada elemento del objeto para imprimir la carta en el html
      for (let element of oderCards) {
        if (element.numbers === 1) {
          element.numbers = "A";
        }
        if (element.numbers === 11) {
          element.numbers = "J";
        }
        if (element.numbers === 12) {
          element.numbers = "Q";
        }
        if (element.numbers === 13) {
          element.numbers = "K";
        }
        let myLi = document.createElement("li");
        let contentLi = document.createTextNode(`${element.numbers}`);
        myLi.className = `card ${element.suits}`;
        myLi.appendChild(contentLi);
        myUl.appendChild(myLi);
      }
    }
    return oderCards;
  };

  let sortButton = document.querySelector(".sort-button");
  sortButton.addEventListener("click", selectSort);
};
