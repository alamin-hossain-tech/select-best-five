let selectedPlayer = 0;
// Function For selecting player
function selectPlayer(player, playerBtn) {
  if (selectedPlayer <= 4) {
    const ol = document.getElementById("ol");
    const li = document.createElement("li");

    li.innerText = document.getElementById(player).innerText;
    ol.appendChild(li);
    document.getElementById(playerBtn).setAttribute("disabled", true);
    selectedPlayer++;
  } else {
    alert("Maximum 5 players can be add.");
  }
}
// Function for total player expenses
function playerExpenses() {
  const perPlayerValue = parseFloat(
    document.getElementById("per-player-input").value
  );
  const totalPlayerExpenses = selectedPlayer * perPlayerValue;
  if (perPlayerValue > 0) {
    console.log(totalPlayerExpenses);
    const totalDisplay = document.getElementById("total-expenses-display");
    totalDisplay.innerText = totalPlayerExpenses;
  } else if (perPlayerValue === 0) {
    alert("value should be more than 0 😔");
  } else {
    alert("Value can not be less than one 😔");
  }
}

// Function for total cost
function totalCost() {
  const managerCost = parseFloat(document.getElementById("manager-cost").value);
  const coachCost = parseFloat(document.getElementById("coach-cost").value);
  if (managerCost > 0 && coachCost > 0) {
    const totalDisplay = parseFloat(
      document.getElementById("total-expenses-display").innerText
    );
    const totalCost = totalDisplay + managerCost + coachCost;
    const totalAmountDisplay = document.getElementById("total-amount-display");
    totalAmountDisplay.innerText = totalCost;
  } else if (managerCost === 0 || coachCost === 0) {
    alert("value should be more than 0 😔");
  } else {
    alert("Value can not be less than one 😔");
  }
}

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

document
  .getElementById("total-player-expenses")
  .addEventListener("click", playerExpenses);

document.getElementById("calculate-total").addEventListener("click", totalCost);
