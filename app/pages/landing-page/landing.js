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
    console.log(`Botão ${idx}:`, {
      classes: button.className,
      classesList: Array.from(button.classList),
    });

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
        
      } else {
       
      }
    });
  });
});