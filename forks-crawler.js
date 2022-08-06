function getInformation(repositotyUrl) {
    console.log('information fetched from ' + repositotyUrl);
}

for (repo of document.getElementsByClassName("repo")) {
    let repositotyUrl = repo.querySelector("a:last-child").href;

    let button = document.createElement("button");
    button.innerHTML = "Get Information";
    button.type = "button";
    button.className = "Label Label--success";
    button.onclick = function () {
        getInformation(repositotyUrl)
    };

    repo.appendChild(button);
}

console.log('finished');
