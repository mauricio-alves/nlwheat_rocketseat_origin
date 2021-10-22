const linksSocialMedia = {
  github: "mauricio-alves",
  linkedin: "in/mauricio-oliveira-alves",
  facebook: "mauricioalvesnutri",
  instagram: "justmauricioalves",
  twitter: "maualves_",
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
  }
}

changeSocialMediaLinks();

function getGitHubInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      userImage.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
}

getGitHubInfos();
