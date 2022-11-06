function createGame(player1, hour, player2) {
  return `
    <li>
      <div class="name">
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
      <p>${player1}</p>
      </div>
      <strong>${hour}</strong>
       <div class="name">
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
      <p>${player2}</p>
      </div>
    </li>
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
     <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>

        <ul>
          ${games}
        </ul>

      </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "quinta", createGame("brasil", "16:00", "sérvia")) +
  createCard("28/11", "segunda", createGame("brasil", "13:00", "suíça")) +
  createCard("02/12", "sexta", createGame("brasil", "16:00", "camarões"))
