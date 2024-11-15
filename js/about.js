const squadMembers = [
    {
        src: "squad-1.jpg",
        description: "Enjoy the process.",
        name: "Alice Johnson",
        position: "Team Leader"
    },
    {
        src: "squad-2.jpg",
        description: "Enjoy the process.",
        name: "Bob Smith",
        position: "Tech Specialist"
    },
    {
        src: "squad-3.jpg",
        description: "Enjoy the process.",
        name: "Catherine Davis",
        position: "Field Agent"
    },
    {
        src: "squad-4.jpg",
        description: "Enjoy the process.",
        name: "David Williams",
        position: "Logistics Manager"
    }
];

function renderSquad() {
    const squadContainer = document.querySelector(".squad-container");
    
    if (!squadContainer) {
        console.error("Squad container not found.");
        return;
    }

    squadContainer.innerHTML = squadMembers.map(({ src, description, name, position }) => `
        <div class="squad-member-wrapper">
            <div class="squad-member overflow-hidden">
                <img src="images/about/${src}" alt="${name}">
                <q class="text-center">${description}</q>
            </div>
            <span class="text-dark">${name}</span>
            <span class="text-secondary d-block">${position}</span>
        </div>
    `).join("");
}

document.addEventListener("DOMContentLoaded", renderSquad);



let chapterArr = [
    {
        videoSrc: "videos/about/1.mp4",
        imgSrc: "images/about/chapter-img-1.jpg",
        span: "Chapter one: One day at TWICE",
        p: "It's been years of hard work, as Twice didn't start as you see it here. We are proud to show you what our offices look like.",
    },
    {
        videoSrc: "videos/about/1.mp4",
        imgSrc: "images/about/chapter-img-2.jpg",
        span: "Chapter two: The journey begins",
        p: "Every journey starts with a single step, and we invite you to take this step with us.",
    },
    {
        videoSrc: "videos/about/1.mp4",
        imgSrc: "images/about/heading-bg.jpg",
        span: "Chapter three: Behind the scenes",
        p: "Discover the hard work and dedication that goes into creating our content.",
    },
];
