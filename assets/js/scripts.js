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
        var newElement = document.createElement("div");
        newElement.className = "col col-md";
        newElement.innerHTML = `
        <a class="gh-link" href="https://github.com/${repo.author}/${repo.name}" target="_blank">
            <div class="gh-repo-card">
                <p class="gh-repo-card-title">
                    ${repo["name"]}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="gh-repo-card-icon"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <line x1="17" y1="7" x2="7" y2="17"></line>
                        <polyline points="8 7 17 7 17 16"></polyline>
                    </svg>
                </p>
                <p>${repo.description}</p>
            </div>
        </a>
        `;
        pinned.appendChild(newElement);
    };
    
    // show pinned repositories
    loading.classList.add("hide");
    pinned.classList.add("show");
};

const d = new Date();
const span = document.getElementById("copyright-year")
let year = d.getFullYear();
span.innerHTML = year;

document.addEventListener("DOMContentLoaded", function() {
    loadPinned();
});