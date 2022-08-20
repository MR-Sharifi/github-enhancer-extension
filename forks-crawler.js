class GithubRepository {
    constructor(repositoryDOM) {
        this.star = repositoryDOM.getElementById("repo-stars-counter-star").textContent;
    }

    getInformation() {
        let information = document.createElement("span");
        information.className = "flash mx-1";
        information.style.padding = "2px 10px"

        information.appendChild(this.prepareStarInformation());

        return information;
    }

    prepareStarInformation() {
        let starInformation = document.createElement("span");
        starInformation.textContent = "Star: " + this.star;

        return starInformation;
    }
}

function insertRepositoryInformation(repositoryUrl, repositoryElement) {
    fetch(repositoryUrl)
        .then(function (response) {
            return response.text();
        })
        .then(function (html) {
            let parser = new DOMParser();
            let DOM = parser.parseFromString(html, "text/html");

            let fetchedRepository = new GithubRepository(DOM);

            repositoryElement.appendChild(fetchedRepository.getInformation());
            repositoryElement.querySelector("button").remove();
        });
}

let allRepositories = document.getElementsByClassName("repo");
for (let index = 0; index < allRepositories.length; index++) {
    if (index === 0) {
        continue;
    }

    let repositoryElement = allRepositories[index];

    let repositoryUrl = repositoryElement.querySelector("a:last-child").href;

    let button = document.createElement("button");
    button.innerHTML = "Get Information";
    button.type = "button";
    button.hidden = true;
    button.className = "Label Label--success";
    button.onclick = function () {
        insertRepositoryInformation(repositoryUrl, repositoryElement);
    };

    repositoryElement.appendChild(button);

    repositoryElement.onmouseover = function () {
        button.hidden = false;
    };

    repositoryElement.onmouseout = function () {
        button.hidden = true;
    };
}
