document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded");
  document.getElementById("bouton-magique").addEventListener("click", () => {
    document.getElementById("boom").classList.toggle("hidden");
  });

  document.getElementById("form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = {
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      firstname: document.getElementById("message").value,
    };

    const response = await axios.post("http://localhost:3000/form", data);
    console.log(response);
  });
});
