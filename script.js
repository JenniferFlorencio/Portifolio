function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a img

  if (html.classList.contains("light")) {
    //se tiver light mode, adiicionar imagem light
    img.setAttribute("src", "/assets/assets/Foto-perfil-light.png")
  } else {
    //set tiver sem light mode, manter imagem normal
    img.setAttribute("src", "/assets/assets/Foto-perfil-dark.png")
  }
}
