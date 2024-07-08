const handleSubmit = async (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);
  const messageDiv = document.getElementById("submissionMessage");

  try {
    const response = await fetch("/", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    messageDiv.style.display = "block";
    messageDiv.innerHTML = "File Uploaded 🥳";
    messageDiv.style.color = "green";
    myForm.reset();
  } catch (error) {
    messageDiv.textContent = `Submission failed: ${error}`;
    messageDiv.style.color = "red";
  }
};

document.getElementById("uploadForm").addEventListener("submit", handleSubmit);

/*=========for loader============*/

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var loadingDiv = document.getElementById("loader-container");
    if (loadingDiv) {
      loadingDiv.style.display = "none";
    }

    var content = document.getElementById("main-content");
    if (content) {
      content.classList.add("visible");
    }
  }, 2000);
});
