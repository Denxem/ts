function spin() {
  const symbols = ["🍒", "🍋", "🔔", "🍇", "💎", "7️⃣"];
  const bet = parseInt(document.getElementById("bet").value);
  const slots = Array.from({ length: 3 }, () => symbols[Math.floor(Math.random() * symbols.length)]);
  document.getElementById("slots").textContent = slots.join(" ");
  
  let result = "";
  if (new Set(slots).size === 1) {
    result = `Джекпот! Выигрыш: ${bet * 5}`;
  } else if (new Set(slots).size === 2) {
    result = `Неплохо! Выигрыш: ${bet * 2}`;
  } else {
    result = `Проигрыш: -${bet}`;
  }
  document.getElementById("result").textContent = result;
}
