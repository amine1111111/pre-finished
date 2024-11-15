function headingText() {
  let heading = document.querySelector(".home-section-container h1");

     window.addEventListener("scroll", () => {

      window.scrollY < window.innerHeight / 4 ?
      heading.style.scale = `${1 + window.scrollY / 700}` :   0;
    });
  
}
headingText();

function intro() {
  let counter = document.querySelector(".counter h1");
  let start = 0;

  let x = setInterval(() => {
      let finalValue = parseInt(counter.dataset.final);
      start === 100 ?  clearInterval(x) : start+=1 ;
      counter.innerHTML = start;
  }, 30);

  setTimeout(() => document.querySelector(".home-intro").remove(), 8000);
}
function checkForIntro() {
    sessionStorage.getItem('introShown') ?
    document.querySelector(".home-intro").remove() :
    (intro(), sessionStorage.setItem('introShown', 'true'));
}
checkForIntro();


function animateIntro(){
  const tl = gsap.timeline();
  
  tl.from(".move-left", {
    duration: 4,
    width: 0,
    ease: "power1.out"
  });
  
  tl.to([".counter", ".load"], { 
    opacity: 0, 
    duration: 1 
  }, ">");
  
  tl.to(".home-intro", { 
    opacity: 0, 
    duration: 1 
  }, "+=2"); 

}
animateIntro()




