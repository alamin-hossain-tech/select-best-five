const ol = document.getElementById("ol");
const li = document.createElement("li");
const playerList = document.querySelectorAll("li");
// Function For selecting player
function selectPlayer(player, playerBtn) {
  ol.appendChild(li);
  li.innerText = document.getElementById(player).innerText;
  document.getElementById(playerBtn).setAttribute("disabled", true);
}
if (playerList.length <= 5) {
  document.getElementById("messi-btn").addEventListener("click", function () {
    selectPlayer("messi", "messi-btn");
  });
}

// document.getElementById("messi-btn").addEventListener("click", function () {
//   li.innerText = "Lionel Messi";
//   ol.appendChild(li);
//   document.getElementById("messi-btn").setAttribute("disabled", true);
// });
