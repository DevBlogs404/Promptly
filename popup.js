async function popUpFunction() {
  let showResult = document.querySelector(".showResult");
  let searchInput = document.querySelector("#searchInput");
  let result = searchInput.addEventListener("change", (e) => {
    e.preventDefault();
    return e.target.value;
  });

  showResult.textContent = result;
}

popUpFunction();
