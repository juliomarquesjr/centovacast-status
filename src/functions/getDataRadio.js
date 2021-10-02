export async function getDataRadio(url) {
  if (url) {
    console.log("Consulta em:" + url);
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData.data[0];
  }
  return null;
}