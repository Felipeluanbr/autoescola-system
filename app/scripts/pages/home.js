import { loadComponents } from '../utilts/loadComponent.js'
loadComponents("header", "../../components/header.html");
loadComponents("footer", "../../components/footer.html");


// Aguardar que o DOM esteja totalmente carregado
document.addEventListener("DOMContentLoaded", () => {
  // pegar todos os botões
  const buttons = document.querySelectorAll(".category-btn");

  // pegar todos os cards
  const categories = document.querySelectorAll(".category");

  // Definir o primeiro botão como ativo por padrão
  if (buttons.length > 0) {
    buttons[0].classList.add("active");
  }

  buttons.forEach((button, idx) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      // Remover classe active de todos os botões
      buttons.forEach((btn) => {
        btn.classList.remove("active");
      });

      // Adicionar classe active ao botão clicado
      button.classList.add("active");

      // remover active de todos os cards
      categories.forEach((category) => {
        category.classList.remove("category-active");
      });

      // descobrir a categoria do botão
      const categoryName = button.classList[1];

      // encontrar o card correspondente
      const target = document.getElementById(categoryName);

      // ativar o card
      if (target) {
        target.classList.add("category-active");
      }
    });
  });
});

// Selecionar todos os botões que disparam o accordion
const accordionTriggers = document.querySelectorAll(".doubts__trigger");

// Adicionar um ouvinte de evento para cada botão encontrado
accordionTriggers.forEach((button) => {
  // Adicionar o evento de clique ao botão atual do loop
  button.addEventListener("click", () => {
    // Identificar o elemento de conteúdo imediatamente após o botão clicado
    const content = button.nextElementSibling;

    // Verificar se o botão clicado já possui a classe 'active' (está aberto)
    const isActive = button.classList.contains("active");

    // Iterar sobre todos os botões novamente para fechar os outros
    accordionTriggers.forEach((otherButton) => {
      // Remover a classe 'active' de todos os botões para resetar o estado visual
      otherButton.classList.remove("active");
      // Definir a altura máxima do conteúdo de todos os itens como null (fechar)
      otherButton.nextElementSibling.style.maxHeight = null;
    });

    // Se o item clicado NÃO estava ativo anteriormente, vamos abri-lo
    if (!isActive) {
      // Adicionar a classe 'active' ao botão clicado para girar a seta
      button.classList.add("active");
      // Definir a altura máxima do conteúdo igual à sua altura total de rolagem (scrollHeight)
      // Isso permite a animação CSS de transição funcionar corretamente
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      // Se já estava ativo, removemos a classe 'active' (fechamos)
      button.classList.remove("active");
      // Zeramos a altura máxima para colapsar o conteúdo
      content.style.maxHeight = null;
    }
  });
});
