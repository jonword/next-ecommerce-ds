export async function getCatalog() {
  const res = await fetch("http://localhost:3000/api/catalog");
  const data = await res.json();
  return data;
}
