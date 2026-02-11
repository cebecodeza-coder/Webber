
  const dateElement = document.getElementById("current-date");

  const options = { day: "numeric", month: "long", year: "numeric" };
  const today = new Date();

  dateElement.textContent = today.toLocaleDateString("en-GB", options);
