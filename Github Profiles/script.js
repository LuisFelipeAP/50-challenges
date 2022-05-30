const APIURL = "https://api.github.com/users/";

const main = document.querySelector("#main");
const form = document.querySelector("#form");
const search = document.querySelector("#search");

async function getUser(username) {
  try {
    const { data } = await axios.get(APIURL + username);

    createUserCard(data);
    getRepos(username);
  } catch (error) {
    if (error.response.status === 404) {
      createErrorCard("No profile with this username");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios.get(APIURL + username + "/repos?sort=created");

    addReposToCard(data);
  } catch {
    createErrorCard("Problem fetching repos");
  }
}

function createUserCard(user) {
  const cardHTML = `
    <div class="card">
        <div>
            <img src="${user.avatar_url}" alt="${user.name}" class="avatar"/>
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio ? user.bio : ""}</p>
            <ul>
                <li>${user.followers}<strong>Followers</strong></li>
                <li>${user.following}<strong>Following</strong></li>
                <li>${user.public_repos}<strong>Repos</strong></li>
            </ul>
            <div id="repos"></div>
        </div>
    </div>`;

  main.innerHTML = cardHTML;
}

function createErrorCard(message) {
  const cardHTML = `
        <div class="card">
            <h1>${message}</h1>
        </div>
    `;

  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposElement = document.querySelector("#repos");

  for (const repo of repos.slice(0, 10)) {
    const repoElement = document.createElement("a");
    repoElement.classList.add("repo");
    repoElement.href = repo.html_url;
    repoElement.target = "_blank";
    repoElement.innerText = repo.name;

    reposElement.append(repoElement);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);
    search.value = "";
  }
});
