let selectedPlayer = 1;
// Function For selecting player
function selectPlayer(player, playerBtn) {
  if (selectedPlayer <= 5) {
    const ol = document.getElementById("ol");
    const li = document.createElement("li");

    li.innerText = document.getElementById(player).innerText;
    ol.appendChild(li);
    document.getElementById(playerBtn).setAttribute("disabled", true);
    selectedPlayer++;
  } else {
    alert("Maximum 5 player can be add.");
  }
}

// if (loop <= 5) {
document.getElementById("messi-btn").addEventListener("click", function () {
  selectPlayer("messi", "messi-btn");
});

document.getElementById("neymar-btn").addEventListener("click", function () {
  selectPlayer("neymar", "neymar-btn");
});

document.getElementById("sebastian-btn").addEventListener("click", function () {
  selectPlayer("sebastian", "sebastian-btn");
});

document.getElementById("salah-btn").addEventListener("click", function () {
  selectPlayer("salah", "salah-btn");
});

document.getElementById("robert-btn").addEventListener("click", function () {
  selectPlayer("robert", "robert-btn");
});

document.getElementById("benzema-btn").addEventListener("click", function () {
  selectPlayer("benzema", "benzema-btn");
});

document.getElementById("luis-btn").addEventListener("click", function () {
  selectPlayer("luis", "luis-btn");
});

document.getElementById("thomas-btn").addEventListener("click", function () {
  selectPlayer("thomas", "thomas-btn");
});

document.getElementById("leroy-btn").addEventListener("click", function () {
  selectPlayer("leroy", "leroy-btn");
});

document.getElementById("bernardo-btn").addEventListener("click", function () {
  selectPlayer("bernardo", "bernardo-btn");
});

document.getElementById("modric-btn").addEventListener("click", function () {
  selectPlayer("modric", "modric-btn");
});

document.getElementById("kevin-btn").addEventListener("click", function () {
  selectPlayer("kevin", "kevin-btn");
});

// } else {
//   alert("Max 5 Player can be add");
// }

// document.getElementById("messi-btn").addEventListener("click", function () {
//   li.innerText = "Lionel Messi";
//   ol.appendChild(li);
//   document.getElementById("messi-btn").setAttribute("disabled", true);
// });
