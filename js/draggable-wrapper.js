let chaptersWrapper = document.querySelector(".draggable-wrapper");


function chapters() {
    chaptersWrapper.innerHTML = chapterArr.map(({ videoSrc: vid, imgSrc: img, span, p }) => {
        return `
            <div class="chapter-wrapper p-1" >
                <div class="img-video-wrapper position-relative">
                    <div class="video-container position-absolute">
                        <video src="${vid}" controls autoplay muted>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div class="img-container position-absolute">
                        <img src="${img}" alt="" inert>
                    </div>
                    <div class="start-icon position-absolute" style ="cursor : pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 12V4L14 8L21 12L14 16L7 20V12Z" fill="white"></path>
                        </svg>
                    </div>
                </div>
                <div class="chapter-info" inert>
                    <span class="text-uppercase fw-bold d-block">${span}</span>
                    <p class="p">${p}</p>
                </div>
            </div>
        `;
    }).join("");
}
chapters();


function enableDragScroll() {
    let isDragging = false, startX, scrollStart;
    const wrapper = document.querySelector('.chapters-wrapper');

    const getPageX = e => e.pageX || e.touches[0].pageX;

    const startDrag = e => {
        isDragging = true;
        startX = getPageX(e) - wrapper.offsetLeft;
        scrollStart = wrapper.scrollLeft;
        wrapper.classList.add('active');
    };

    const stopDrag = () => {
        isDragging = false;
        wrapper.classList.remove('active');
    };

    const dragMove = e => {
        if (!isDragging) return;
        e.preventDefault();
        wrapper.scrollLeft = scrollStart - (getPageX(e) - wrapper.offsetLeft - startX) * 1.5;
    };

    ['mousedown', 'touchstart'].forEach(event => wrapper.addEventListener(event, startDrag));
    ['mouseup', 'touchend', 'mouseleave'].forEach(event => wrapper.addEventListener(event, stopDrag));
    ['mousemove', 'touchmove'].forEach(event => wrapper.addEventListener(event, dragMove));
}
enableDragScroll();


function videoStarter() {
    [...document.querySelectorAll(".start-icon")].forEach(i => i.addEventListener("click", _ => {
        const chapter = i.closest(".chapter-wrapper"); // Use 'i' instead of 'icon'
        const video = chapter.querySelector(".video-container video");
        const imgContainer = chapter.querySelector(".img-container");

        chapter.querySelector(".video-container").classList.toggle("active");
        imgContainer.classList.toggle("active");

        video.paused ? video.play() : video.pause();
        
        video.onended = () => {
            chapter.querySelector(".video-container").classList.replace("active", "inactive");
            imgContainer.classList.remove("active");
            setTimeout(() => chapter.querySelector(".video-container").classList.remove("inactive"), 300);
        };
    }));
}
videoStarter();