document.addEventListener("DOMContentLoaded", function () {
    // Lazy Loading
    const lazyImages = document.querySelectorAll("img.lazy");
  
    const lazyLoad = (img) => {
      img.src = img.dataset.src;
      img.classList.remove("lazy");
    };
  
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          lazyLoad(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });
  
    lazyImages.forEach(image => {
      imageObserver.observe(image);
    });
  
  //   // Last Visit Message
  //   const lastVisit = localStorage.getItem("lastVisit");
  //   const welcomeMessage = document.getElementById("welcomeMessage");
  
  //   const now = Date.now();
  //   localStorage.setItem("lastVisit", now);
  
  //   if (!lastVisit) {
  //     welcomeMessage.textContent = "Welcome! Let us know if you have any questions.";
  //   } else {
  //     const lastVisitDate = new Date(parseInt(lastVisit));
  //     const timeDiff = now - lastVisitDate;
  //     const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  
  //     if (daysDiff < 1) {
  //       welcomeMessage.textContent = "Back so soon! Awesome!";
  //     } else if (daysDiff === 1) {
  //       welcomeMessage.textContent = `You last visited 1 day ago.`;
  //     } else {
  //       welcomeMessage.textContent = `You last visited ${daysDiff} days ago.`;
  //     }
  //   }
  // });
  
  document.addEventListener("DOMContentLoaded", function () {
    const currentDate = new Date();
    const lastVisit = localStorage.getItem("lastVisit");
    const welcomeMessage = document.getElementById("welcomeMessage");
  
    if (welcomeMessage) { // Ensure the element exists
      if (lastVisit) {
        const lastVisitDate = new Date(parseInt(lastVisit)); // Convert to Date object
        const timeDifference = currentDate - lastVisitDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days
  
        if (timeDifference < 1000 * 60 * 60 * 24) {
          welcomeMessage.textContent = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
          welcomeMessage.textContent = `You last visited 1 day ago.`;
        } else {
          welcomeMessage.textContent = `You last visited ${daysDifference} days ago.`;
        }
      } else {
        welcomeMessage.textContent = "Welcome! Let us know if you have any questions.";
      }
  
      // Store the current visit time
      localStorage.setItem("lastVisit", Date.now());
    }
  });
  