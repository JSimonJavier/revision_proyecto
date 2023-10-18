function addToFavorites(e){

  const star = e.target //obteneter el elemento (icono estrella) que desencadeno el clic

  star.classList.toggle('favorite')


} // va a llamar cuando se hace click en un icono de estrella

function addFavorites(favorites){
  const imgs = document.querySelectorAll(".img-album")

  imgs.forEach(img=>{
    const icon = document.createElement("i")
    icon.classList.add("fa-solid", "fa-star", "cursor-pointer", "position-favorite") //agregando clases css al icono para estilo y comportamiento
    const div = img.parentElement //obtien el elemento padre del elemnto img
    div.removeChild(img)
    div.append(icon, img) //agrega el icono de la estrella delante de la imagen del album
    icon.addEventListener("click", (e)=>addToFavorites(e)) // agregar un evento de click al icono para llamar a addFavorites cuando se haga clic
  })


} //va a agregar iconos de estrella a los albumes y configura los eventos click

addFavorites()