import { componentsSystem } from "../global/services/loadComponetsSystem.js";

(async () => {
  console.log("Iniciando carregamento do header...");
  try {
    await componentsSystem("header", "../global/components/header/header.html");
    await componentsSystem("sidbar", "../global/components/sidbar/sidbarSystem.html");
    console.log("Header carregado com sucesso!");
  } catch (error) {
    console.error("Erro ao carregar header:", error);
  }
})();
