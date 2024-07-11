var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";

  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Find Prices";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }

  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n);
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Hide the current tab:
  x[currentTab].style.display = "none";

  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("searchForm").submit();

    // Add a relative URL redirect after submission
    // window.location.href = "/service-center.html";

    return false;
  }

  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  let x = document.getElementsByClassName("step");
  //... and adds the "active" class on the current step:
  x[n].className += " opacity-100 bg-[#F15757]";
  x[n].innerHTML = '<i class="fa-solid fa-check"></i>';
}

/***slider handle***/

const slider = document.querySelector('input[type="range"]');
const sliderValue = document.getElementById("sliderValue");
sliderValue.style.left = `${(slider.value / slider.max) * 100}%`;
slider.addEventListener("input", () => {
  sliderValue.textContent = `${slider.value}KM`;
  sliderValue.style.left = `${(slider.value / slider.max) * 100}%`;
});

/*file upload*/
function previewImages(event) {
  const files = event.target.files;
  const container = document.getElementById("preview-container");

  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const previewDiv = document.createElement("div");
      previewDiv.className =
        "preview relative bg-gray-200 flex items-center justify-center rounded-md";

      const img = document.createElement("img");
      img.src = e.target.result;
      img.className = "w-20 h-20 rounded-md";

      const deleteButton = document.createElement("div");
      deleteButton.className =
        "absolute flex justify-center items-center bottom-[-30px] hover:bg-red-500 hover:border-none border-2 rounded-full h-6 w-6 cursor-pointer";
      deleteButton.innerHTML = '<i class="text-xs fa-solid fa-minus"></i>';
      deleteButton.onclick = function () {
        previewDiv.remove(); // Remove the preview div from the DOM

        // Remove the corresponding file from the array of files
        const fileIndex = Array.from(container.children).indexOf(previewDiv);
        if (fileIndex !== -1) {
          files.splice(fileIndex, 1); // Remove the file from the files array
        }
      };

      previewDiv.appendChild(img);
      previewDiv.appendChild(deleteButton);
      container.appendChild(previewDiv);
    };
    reader.readAsDataURL(files[i]);
  }
}
