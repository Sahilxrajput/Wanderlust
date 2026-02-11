const taxSwitch = document.getElementById("flexSwitchCheckDefault");

taxSwitch.addEventListener("click", () => {
  const prices = document.getElementsByClassName("listing-price");
  const taxInfo = document.getElementsByClassName("tax-info");

  for (let price of prices) {
    const base = parseFloat(price.dataset.base);

    if (taxSwitch.checked) {
      const total = base * 1.18;
      price.textContent = total.toFixed(2); // show with 2 decimals
    } else {
      price.textContent = base.toFixed(2); // revert to original base price
    }
  }

  for (let info of taxInfo) {
    info.style.display = taxSwitch.checked ? "inline" : "none";
  }
});
