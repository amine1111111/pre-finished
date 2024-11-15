let workData = [
    {
        name :"football" ,
        bgImg : "images/work/work-1.jpg",
        videoBg : "videos/work/work-1.mp4",
        title : "football is never done" ,
        mark :"nike",
    },
    {
        name :"born" ,
        bgImg : "images/work/work-2.jpg",
        videoBg : "videos/work/work-2.mp4",
        title : "born man" ,
        mark :"born",
    },
    {
        name :"bewatt" ,
        bgImg : "images/work/work-4.jpg",
        videoBg : "videos/work/work-4.mp4",
        title : "unleash the ride" ,
        mark :"bewatt",
    },
    {
        name :"ride" ,
        bgImg : "images/work/work-5.jpg",
        videoBg : "videos/work/work-5.mp4",
        title : "on & off the court" ,
        mark :"slazenger",
    }
]

let workWrapper = document.querySelector("[work-wrapper]");

function work() {
    workWrapper.innerHTML = workData.map(({ bgImg: img, videoBg: vid, title, mark, name }) => `

        <a href="onework.html" class="box" data-project-name="${name}">
    
        <div class="bg-wrapper position-relative ">
                <div class="video-wrapper">
                    <video src="${vid}" autoplay loop></video>
                </div>
                <div class="img-wrapper z-n1">
                    <img src="${img}" alt="">
                </div>
            </div>
            <div class="text-uppercase fw-bold">
                <span class="text-secondary">${title}</span>
                <span class="text-white d-block">${mark}</span>
            </div>
        </a>
    `).join('');

    document.querySelector("[challenges]").textContent = `challenges (${workData.length})`;
}

work();




document.querySelectorAll('.box').forEach(box => {
    box.addEventListener("click", e => {
        e.preventDefault();
        localStorage.setItem('selectedBox', box.dataset.projectName);
        window.location.href = "onework.html";
    });
});
