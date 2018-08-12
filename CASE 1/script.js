let toggleNavStatus = true;

let toggle = function() {
  let getSide = document.querySelector(".nav-side");
  let getSideUl = document.querySelector(".nav-side ul");
  let getSideUlSpan = document.querySelector(".nav-side span");
  let getSideUlLiA = document.querySelectorAll(".nav-side a");
  let getSideInfoP = document.querySelector(".nav-side p");
  let getSideInfo = document.querySelector(".nav-side .info");

  if (toggleNavStatus === true) {
    getSideUl.style.visibility = "visible";
    getSide.style.width = "275px";
    getSideUlSpan.style.opacity = "1";
    getSideInfoP.style.opacity = "1";
    getSideInfo.style.visibility = "visible";

    let arrayLength = getSideUlLiA.length;
    for (let i = 0; i < arrayLength; i++) {
      getSideUlLiA[i].style.opacity = "1";
    }

    toggleNavStatus = false;
  }


  else if (toggleNavStatus === false) {
    getSideInfo.style.visibility = "hidden";
    getSide.style.width = "50px";
    getSideUlSpan.style.opacity = "0";
    getSideInfoP.style.opacity = "0";

    let arrayLength = getSideUlLiA.length;
    for (let i = 0; i < arrayLength; i++) {
      getSideUlLiA[i].style.opacity = "0";
    }

    getSideUl.style.visibility = "hidden";


    toggleNavStatus = true;
  }

}
