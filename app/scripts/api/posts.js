export async function getPost() {
  const url = "/app/scripts/data/posts.json";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Erro ao carregar o arquivo de ${url}: ${response.statusText}`);
  }
  return response.json();
}
