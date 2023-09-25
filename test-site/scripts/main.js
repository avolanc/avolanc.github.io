const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/nick-corsair.jpg") {
    myImage.setAttribute("src", "images/chels.jpg");
  } else {
    myImage.setAttribute("src", "images/nick-corsair.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `You're a gigchad, ${myName}`;
    }
  }  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `You're a gigchad, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };
  