// JavaScript for the clock
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
  }
  
  // Update the time every second
  setInterval(updateTime, 1000);
  
  // JavaScript for the slideshow
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
  

const imageUrls = [
    "images/banner1.png",
    "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    // Add more image URLs as needed
];

const scrollContainer = document.getElementById('scroll-container');

// Dynamically create and append image elements to the scroll container
imageUrls.forEach(url => {
    const imgElement = document.createElement('div');
    imgElement.classList.add('scroll_itm');
    imgElement.innerHTML = `<img src="${url}" alt="">`;
    scrollContainer.appendChild(imgElement);
});