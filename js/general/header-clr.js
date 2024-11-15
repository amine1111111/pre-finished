function setHeaderClr(){
    
    const headerToUps = document.querySelectorAll('header .to-up');
    const whiteBgSections = document.querySelectorAll('.bg-white');
    
    const updateHeaderColors = (upperClr, lowerClr) => {
        headerToUps.forEach(e => {
            e.style.setProperty('--_link-clr', upperClr);
            e.style.setProperty('--_before-clr', lowerClr);
        });
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            entry.isIntersecting ? 
            updateHeaderColors('var(--bg-body)', 'var(--bg-body)'): 
            updateHeaderColors('var(--light-grey)', 'var(--dark-grey)');
      
        });
    }, {
        threshold: 0.6
    });
    
    whiteBgSections.forEach(section => observer.observe(section));
    
}
setHeaderClr()