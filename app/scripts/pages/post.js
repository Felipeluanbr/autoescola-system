import { loadComponents } from "../utils/loadComponent.js";
import { getPost } from "../api/posts.js";

// Carrega os componentes globais (Header, Footer, CTA)
loadComponents("header", "../../components/header.html");
loadComponents("footer", "../../components/footer.html");
loadComponents("cta", "../../components/cta-card.html");

async function initPost() {
  // 1. Pega o ID da URL (ex: post.html?id=2)
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  if (!id) {
    console.error("ID não encontrado na URL.");
    return;
  }

  // 2. Busca os dados na sua API
  const post = await getPost(id);

  if (!post) {
    document.getElementById("content__post").innerHTML =
      "<h1>Post não encontrado.</h1>";
    return;
  }

  // 3. Seleciona os elementos do seu HTML
  const bannerPost = document.getElementById("banner__post");
  const contentPost = document.getElementById("content__post");

  // 4. Injeta o conteúdo no Banner
  // Dica: Use o background-image para a foto e o título por cima
//   
  bannerPost.innerHTML = `
        <div class="banner-container">
         <img src="${post.image}" alt="">
            <h1>${post.title}</h1>
            <span>Publicado em: ${post.date}</span>
        </div>
    `;

  // 5. Injeta o conteúdo do artigo
  contentPost.innerHTML = `
        <article class="post-article">
       
            <p class="post-lead">${post.description}</p>
            <div class="post-body">
                ${post.content}
            </div>
        </article>
    `;
}

// Inicializa a página
initPost();
