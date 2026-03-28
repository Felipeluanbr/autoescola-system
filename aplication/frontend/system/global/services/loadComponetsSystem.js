export async function componentsSystem(id, path) {
  try {
    console.log(`Buscando: ${path}`);
    const response = await fetch(path);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const html = await response.text();
    const element = document.getElementById(id);
    
    if (!element) {
      throw new Error(`Elemento com ID '${id}' não encontrado`);
    }
    
    element.innerHTML = html;
    console.log(`Componente '${id}' injetado com sucesso`);
  } catch (error) {
    console.error(`Erro ao carregar componente '${id}':`, error);
    throw error;
  }
}
