import { loadComponents } from "../utils/loadComponent.js";
loadComponents("header", "../../components/header.html");
loadComponents("footer", "../../components/footer.html");

import { getPost } from "../api/posts.js";

export async function initBlog() {}

async function renderizarBlog() {
  const estoquePost = "";
  const posts = await getPost();
  const bannerContainer = document.getElementById("banner__container");
  const postContainer = document.getElementById("posts__container");
  const destaque = posts.find((post) => post.destaque == true) || posts[0];
  const comuns = posts.filter((post) => post.id !== destaque.id);
  console.log(destaque, comuns);
  renderBanner(destaque);
  document.getElementById("posts__container").innerHTML = "";
  document.getElementById("posts__container").innerHTML = comuns
    .map((post) => rendercard(post))
    .join("");

  async function renderBanner(post) {
    const container = document.getElementById("banner__container");
    container.innerHTML = `
  <div class="banner-content">
    <a href="#"> 
             <img src="${post.image}" alt="${post.title}"> 

            <div> 
            <h2>${post.title}</h2>
            <p>${post.description}</p>
            </div>
        </div>

    </a>
`;
  } //

  function rendercard(post) {
    return `
    <a id="card__blog" href="#"> 
    <div class="card-content">
             <img src="${post.image}" alt="${post.title}"> 
            <h3>${post.title}</h3>
            <p>${post.description}</p>
        </div>
    </a>
    `;
  }
}

renderizarBlog();
