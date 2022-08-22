const ol = document.getElementById("ol");
const li = document.createElement("li");

// Function For selecting player
function selectPlayer(player, playerBtn) {
  ol.appendChild(li);
  li.innerText = document.getElementById(player).innerText;
  document.getElementById(playerBtn).setAttribute("disabled", true);
}

document.getElementById("messi-btn").addEventListener("click", function () {
  selectPlayer("messi", "messi-btn");
});
// document.getElementById("messi-btn").addEventListener("click", function () {
//   li.innerText = "Lionel Messi";
//   ol.appendChild(li);
//   document.getElementById("messi-btn").setAttribute("disabled", true);
// });

// const olNode = document.querySelectorAll("li");
// console.log(olNode);
