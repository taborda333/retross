const players = {
  jordan: {
    name: "Michael Jordan",
    points: 30.1,
    rebounds: 6.2,
    assists: 5.3,
    image: "https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg" // Cambié a imagen NBA para ejemplo, poné la que quieras
  },
  lebron: {
    name: "LeBron James",
    points: 27.0,
    rebounds: 7.4,
    assists: 7.3,
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"
  },
  kobe: {
    name: "Kobe Bryant",
    points: 25.0,
    rebounds: 5.2,
    assists: 4.7,
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/977.png"
  },
  curry: {
    name: "Stephen Curry",
    points: 24.7,
    rebounds: 4.6,
    assists: 6.5,
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png"
  },
  giannis: {
    name: "Giannis Antetokounmpo",
    points: 23.0,
    rebounds: 9.8,
    assists: 4.6,
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png"
  }
};

const player1Select = document.getElementById("player1");
const player2Select = document.getElementById("player2");
const output = document.getElementById("comparison-output");

// Función para mostrar comparación
function comparePlayers() {
  const p1 = players[player1Select.value];
  const p2 = players[player2Select.value];

  if (!p1 || !p2 || player1Select.value === player2Select.value) {
    output.innerHTML = `<p>Selecciona dos jugadores diferentes para comparar.</p>`;
    return;
  }

  output.innerHTML = `
    <div class="player-images">
      <div>
        <img src="${p1.image}" alt="${p1.name}">
        <p>${p1.name}</p>
      </div>
      <div>
        <img src="${p2.image}" alt="${p2.name}">
        <p>${p2.name}</p>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>Estadística</th>
          <th>${p1.name}</th>
          <th>${p2.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Puntos por juego</td>
          <td class="${p1.points > p2.points ? 'highlight' : ''}">${p1.points}</td>
          <td class="${p2.points > p1.points ? 'highlight' : ''}">${p2.points}</td>
        </tr>
        <tr>
          <td>Rebotes</td>
          <td class="${p1.rebounds > p2.rebounds ? 'highlight' : ''}">${p1.rebounds}</td>
          <td class="${p2.rebounds > p1.rebounds ? 'highlight' : ''}">${p2.rebounds}</td>
        </tr>
        <tr>
          <td>Asistencias</td>
          <td class="${p1.assists > p2.assists ? 'highlight' : ''}">${p1.assists}</td>
          <td class="${p2.assists > p1.assists ? 'highlight' : ''}">${p2.assists}</td>
        </tr>
      </tbody>
    </table>
  `;
}

// Eventos para detectar cambio en los select
player1Select.addEventListener("change", comparePlayers);
player2Select.addEventListener("change", comparePlayers);

// Menu toggle para móviles
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
