function searchUrl1() {
  const url = document.getElementById('imageUrl2').value;
  window.open(url);
}
function searchUrl2() {
  const url = document.getElementById('imageUrl2').value;
  window.open(url);
}
function searchUrl3() {
  const url = document.getElementById('imageUrl3').value;
  window.open(url);
}

async function getShortStory() {
  // Show loading message
  document.getElementById("response-text").textContent = "Generating story...";
  document.getElementById("loadingSpinner").style.display = "block";
  
  try {
    const imageUrl1 = document.getElementById("imageUrl1").value;
    const imageUrl2 = document.getElementById("imageUrl2").value;
    const imageUrl3 = document.getElementById("imageUrl3").value;
    const genre = document.getElementById("genre").value;

    const response = await axios.post(
      "http://localhost:5678/webhook-test/image-story",
      {
        images: [
          { url: imageUrl1 }, 
          { url: imageUrl2 }, 
          { url: imageUrl3 }
        ],
        genre: genre,
        option: "true"
      }
    );
    console.log("Response:", response.data);
    document.getElementById("response-text").textContent = "";
    document.getElementById("loadingSpinner").style.display = "none";

    document.getElementById("response-text").innerHTML = JSON.stringify(
      response.data
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching image story:", error.message);
    // if (error.response) {
    //   console.error('Status:', error.response.status);
    //   console.error('Data:', error.response.data);
    // }
  }
}

async function getStoryConcept() {
  // Show loading message
  document.getElementById("response-text").textContent = "Generating concept...";
  document.getElementById("loadingSpinner").style.display = "block";
  
  try {
    const settingUrl = document.getElementById("settingUrl").value;
    const themeUrl = document.getElementById("themeUrl").value;
    const moodUrl = document.getElementById("moodUrl").value;
    const genre = document.getElementById("genre").value;

    const response = await axios.post(
      "http://localhost:5678/webhook-test/image-story",
      {
        images: [
          { url: settingUrl }, 
          { url: themeUrl }, 
          { url: moodUrl }
        ],
        genre: genre,
        option: "false"
      }
    );
    console.log("Response:", response.data);
    document.getElementById("response-text").textContent = "";
    document.getElementById("loadingSpinner").style.display = "none";

    document.getElementById("response-text").innerHTML = JSON.stringify(
      response.data
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching story concept:", error.message);
    document.getElementById("loadingSpinner").style.display = "none";
  }
}

// Story Concept page functions
function searchSetting() {
  const url = document.getElementById('settingUrl').value;
  if (url.trim()) window.open(url, '_blank');
}

function searchTheme() {
  const url = document.getElementById('themeUrl').value;
  if (url.trim()) window.open(url, '_blank');
}

function searchMood() {
  const url = document.getElementById('moodUrl').value;
  if (url.trim()) window.open(url, '_blank');
}