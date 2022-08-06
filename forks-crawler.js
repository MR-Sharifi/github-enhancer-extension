function getInformation(repositoryUrl) {
    console.log('information fetched from ' + repositoryUrl);
}

let allRepositories = document.getElementsByClassName("repo");
for (let index = 0; index < allRepositories.length; index++) {
    if (index === 0) {
        continue;
    }

    let repoElement = allRepositories[index];

    let repositoryUrl = repoElement.querySelector("a:last-child").href;

    let button = document.createElement("button");
    button.innerHTML = "Get Information";
    button.type = "button";
    button.hidden = true;
    button.className = "Label Label--success";
    button.onclick = function () {
        getInformation(repositoryUrl)
    };

    repoElement.appendChild(button);

    repoElement.onmouseover = function () {
        button.hidden = false;
    };

    repoElement.onmouseout = function () {
        button.hidden = true;
    };
}
