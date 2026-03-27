export async function getPost(id) {
  const url = "/app/website/scripts/data/posts.json";
  
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro ao carregar o arquivo: ${response.statusText}`);
    }

    const posts = await response.json();
    
    // Se um ID for fornecido, retorna o post específico
    if (id) {
      return posts.find(p => p.id === parseInt(id));
    }

    // Caso contrário, retorna todos os posts
    return posts;
  } catch (error) {
    console.error("Erro na requisição:", error);
    return null;
  }
}