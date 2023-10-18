//tour
let tickets = {
  "Las Vegas": 100,
  "Tokyo":100,
  "Brisbane":1,
  "Inglewood":0,
  "Auckland":100,
  "Dunedin":2
}

function checkIfSoldOut(){
  for (place in tickets) {
    if(!tickets[place]){
      disableSouldOutButtons(place) //si no hay boletos disponibles en un lugar, dehabilita el boton y muestra "Sold Out"
    }
  }
} //es para verificar si los lugares estan agotados y deshabilitar los botnoes correspondientes

function disableSouldOutButtons(place){
  document.getElementById(place).setAttribute("disabled", true)
  document.getElementById(place).textContent = "Soul Out"
  document.getElementById(place).style.backgroundColor = "brown"
} //para deshabilitar los botonoes de lugares agotados

function getTickets(place){
  let noTickets = tickets[place] <= 0

  if(!noTickets){
    tickets[place] = tickets[place] - 1 //resta un boleto si estan disponibles
    swal("Sold!", `Haz comprado la entrada a ${place}`, "success")
  } else{
    swal("Ouch!", `Nos hemos quedado sin entradas para ${place}`, "info")
  
  }

  checkIfSoldOut() //verifica si el lugar esta agotado despues de obtener los boletos
} //es para obtener boletos para un lugar


checkIfSoldOut() // verifa si hay lugares aogtrados incialmente