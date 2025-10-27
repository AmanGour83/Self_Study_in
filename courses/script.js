
const modules = [
    {
        name: "Python Basic",
        videos: [
            'https://www.youtube.com/embed/XWrkY_VYONU?list=PLJq8CsJeoUaedZKuoP1Km7gacz4ZmKxRw',
            'https://www.youtube.com/embed/tt_P5V38vhc?list=PLJq8CsJeoUaedZKuoP1Km7gacz4ZmKxRw',
            'https://www.youtube.com/embed/pGHdr78lapw?list=PLJq8CsJeoUaedZKuoP1Km7gacz4ZmKxRw',
            'https://www.youtube.com/embed/IeevvILb-fw?list=PLJq8CsJeoUaedZKuoP1Km7gacz4ZmKxRw'
        ]
    },
    {
        name: "Module 2",
        videos: [
            'https://www.youtube.com/embed/He_eSL_7Uoc',
            'You tube vedio url',
            'You tube vedio url',
            'You tube vedio url',
            'You tube vedio url'
        ]
    }
];

let currentModuleIndex = 0;
let currentVideoIndex = 0;
const dropdowns = document.querySelectorAll('.dropdown');
const warningElement = document.getElementById('custom-warning');

function showWarning(message) {
    warningElement.textContent = message;
    warningElement.classList.add('show');
    setTimeout(() => {
        warningElement.classList.remove('show');
    }, 2000); // Hide after 2 seconds
}

function updateActiveDropdown() {
    dropdowns.forEach((dropdown, index) => {
        if (index === currentModuleIndex) {
            dropdown.classList.add('active-dropdown');
        } else {
            dropdown.classList.remove('active-dropdown');
        }
    });
}

function changeVideo(videoId) {
    document.getElementById("youtube-video").src = videoId;
    for (let i = 0; i < modules.length; i++) {
        const videoIndex = modules[i].videos.indexOf(videoId);
        if (videoIndex !== -1) {
            currentModuleIndex = i;
            currentVideoIndex = videoIndex;
            break;
        }
    }
    updateActiveDropdown();
}

function nextVideo() {
    if (currentModuleIndex === modules.length - 1 && currentVideoIndex === modules[currentModuleIndex].videos.length - 1) {
        showWarning("You are on the last lecture of the series.");
        return;
    }

    currentVideoIndex++;
    if (currentVideoIndex >= modules[currentModuleIndex].videos.length) {
        currentVideoIndex = 0;
        currentModuleIndex++;
    }
    const nextVideoUrl = modules[currentModuleIndex].videos[currentVideoIndex];
    document.getElementById("youtube-video").src = nextVideoUrl;
    updateActiveDropdown();
}

function prevVideo() {
    if (currentModuleIndex === 0 && currentVideoIndex === 0) {
        showWarning("You are on the starting lecture.");
        return;
    }

    currentVideoIndex--;
    if (currentVideoIndex < 0) {
        currentModuleIndex--;
        currentVideoIndex = modules[currentModuleIndex].videos.length - 1;
    }
    const prevVideoUrl = modules[currentModuleIndex].videos[currentVideoIndex];
    document.getElementById("youtube-video").src = prevVideoUrl;
    updateActiveDropdown();
}

document.getElementById('next-btn').addEventListener('click', nextVideo);
document.getElementById('prev-btn').addEventListener('click', prevVideo);

// Set the initial video and active dropdown
if (modules.length > 0 && modules[0].videos.length > 0) {
    document.getElementById("youtube-video").src = modules[0].videos[0];
    updateActiveDropdown();
}
