async function loadPinned() {
    // get elements
    const loading = document.getElementById("gh-pinned-loading");
    const pinned = document.getElementById("gh-pinned");
    
    // show loading
    // loading.classList.add("show");
    // pinned.classList.add("hide");
    
    // get pinned repositories
    const result = await fetch("https://pinned.berrysauce.dev/get/berrysauce");
    const json = await result.json();
    
    // loop through pinned repositories
    for (let repo of json) {
        var newElement = document.createElement("span");
        newElement.className = "tag";
        newElement.innerHTML = `
            <a href="https://github.com/${repo.author}/${repo.name}" target="_blank" class="tag-link">
                <svg class="tag-dot" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="${repo.languageColor}" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z" stroke-width="0" fill="${repo.languageColor}"></path>
                </svg>
                ${repo.name}
            </a>
        `;
        pinned.appendChild(newElement);
    };

    var allRepos = document.createElement("a");
    allRepos.className = "tag-more-link";
    allRepos.href = "https://github.com/berrysauce?tab=repositories";
    allRepos.target = "_blank";
    allRepos.innerHTML = "All Repositories";
    pinned.appendChild(allRepos);
    
    // show pinned repositories
    loading.classList.add("hide");
    pinned.classList.add("show");
};

const palette = ['#cf52f2', '#6BCB77', '#4D96FF', '#A66CFF', '#E23E57', '#ff3e00'];
const rects = document.querySelectorAll('.animated-rect');

function getRandomColor(exclude) {
    let color;
    do {
        color = palette[Math.floor(Math.random() * palette.length)];
    } while (color === exclude);
    return color;
}

function updateRandomRectColor() {
    if (rects.length === 0) return;

    const randomIndex = Math.floor(Math.random() * rects.length);
    const rect = rects[randomIndex];

    const currentColor = rect.getAttribute('fill');
    const newColor = getRandomColor(currentColor);

    rect.setAttribute('fill', newColor);
}

// Initial fill for all rects
rects.forEach(rect => {
    rect.setAttribute('fill', palette[Math.floor(Math.random() * palette.length)]);
});

// Change one random rect every 500ms
setInterval(updateRandomRectColor, 500);

const d = new Date();
const span = document.getElementById("copyright-year")
let year = d.getFullYear();
span.innerHTML = year;

document.addEventListener("DOMContentLoaded", function() {
    loadPinned();
});