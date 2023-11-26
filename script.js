

 let modeBtn = document.querySelector("#mode");
 let body = document.querySelector("body");
 let currMode = "light";  //dark

// writing condition
modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
      currMode = "dark";
      body.classList.add("dark");
      body.classList.remove("light");
   } else {
      currMode = "light";
      body.classList.add("light");
      body.classList.remove("dark");
   }
   
   console.log(currMode);
});


console.log("........................................... Happy ❤❤ Coding............................")
