document.addEventListener("DOMContentLoaded", () => {

  // Select the elements
  var sideNav = document.querySelector(".head-wrapper > div:nth-child(2)");
  var menu = document.querySelector(".head-wrapper > div:nth-child(3) > i");



  // Define a media query  matchMedia to set 
  const mediaQuery = window.matchMedia('(max-width: 880px)');

  // Function to handle the media query
  function handleMediaQuery(e) {
    // return bool 0 or 1

    if (e.matches) {
      // If the viewport is 880px or less

      // Add click event listener to the menu icon
      menu.addEventListener("click", () => {
        sideNav.style.position = "absolute";
        sideNav.style.left = '-1%';
        sideNav.style.transition = "2s"   
        sideNav.style.display = 'flex';

        // Add click event listener to the sideNav to hide it
        sideNav.addEventListener("click", () => {
        sideNav.style.position = "absolute";
        sideNav.style.left = '-60%';
          sideNav.style.transition = "1s"   

        });
      });
    } else {

      // reset styles

      sideNav.style.position = "";
      sideNav.style.left = '';
      sideNav.style.display = '';

    }


  }

  handleMediaQuery(mediaQuery);

  // Add a listener for changes
  mediaQuery.addEventListener('change', handleMediaQuery);
})



