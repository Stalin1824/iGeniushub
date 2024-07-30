var toLeft = document.querySelector(".head-wrapper>div:nth-child(2)")
var menuBar = document.querySelector(".head-wrapper>div:nth-child(3)")
var section = document.querySelectorAll(".head-wrapper>div:nth-child(2) >a")

const mediaQuery = window.matchMedia('(max-width: 1000px)');


// JS to Change MediaQuery  

function handleMediaQuery(e) {

  if (e.matches === true) {
    menuBar.addEventListener("click", () => {

      toLeft.style.left = "0%"
      toLeft.style.transition = "1s"


    })
    section.forEach((el) => {
      el.addEventListener("click", () => {
        toLeft.style.left = "-60%"
        toLeft.style.transition = "1s"
      })
    })
  }

}

// Initial check
handleMediaQuery(mediaQuery);

// Add a listener for changes
mediaQuery.addEventListener('change', handleMediaQuery)


