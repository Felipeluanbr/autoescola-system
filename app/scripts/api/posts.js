export async function getPost() {
  const response = await fetch("../../scripts/data/posts.json");
  return await response.json()
}
