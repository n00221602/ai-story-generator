function searchUrl1() {
  const url = document.getElementById('imageUrl1').value;
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
function searchUrl4() {
  const url = document.getElementById('imageUrl4').value;
  window.open(url);
}
function searchUrl5() {
  const url = document.getElementById('imageUrl5').value;
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
        option: "short-story"
      }
    );
    console.log("Response:", response.data);
    document.getElementById("response-text").textContent = "";
    document.getElementById("loadingSpinner").style.display = "none";

    document.getElementById("response-text").innerHTML = response.data.output.replace(/\n/g, "<br>");

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
    const imageUrl1 = document.getElementById("imageUrl1").value;
    const imageUrl2 = document.getElementById("imageUrl2").value;
    const genre = document.getElementById("genre").value;

    const response = await axios.post(
      "http://localhost:5678/webhook-test/image-story",
      {
        images: [
          { url1: imageUrl1 }, 
          { url2: imageUrl2 },
        ],
        genre: genre,
        option: "story-concept"
      }
    );
    console.log("Response:", response.data);
    document.getElementById("response-text").textContent = "";
    document.getElementById("loadingSpinner").style.display = "none";

    document.getElementById("response-text").innerHTML = response.data.output.replace(/\n/g, "<br>");

    return response.data;
  } catch (error) {
    console.error("Error fetching story concept:", error.message);
    document.getElementById("loadingSpinner").style.display = "none";
  }
}

async function getCharacter() {
  // Show loading message
  document.getElementById("response-text").textContent = "Generating character...";
  document.getElementById("loadingSpinner").style.display = "block";
  
  try {
    const imageUrl1 = document.getElementById("imageUrl1").value;
    const imageUrl2 = document.getElementById("imageUrl2").value;
    const imageUrl3 = document.getElementById("imageUrl3").value;
    const role = document.getElementById("role").value;
    const name = document.getElementById("name").value;

    const response = await axios.post(
      "http://localhost:5678/webhook-test/image-story",
      {
        name: name,
        images: [
          { url1: imageUrl1 }, 
          { url2: imageUrl2 }, 
          { url3: imageUrl3 },
        ],
        role: role,
        option: "character-creator"
      }
    );
    console.log("Response:", response.data);
    document.getElementById("response-text").textContent = "";
    document.getElementById("loadingSpinner").style.display = "none";

    document.getElementById("response-text").innerHTML = response.data.output.replace(/\n/g, "<br>");

    return response.data;
  } catch (error) {
    console.error("Error fetching image story:", error.message);
    // if (error.response) {
    //   console.error('Status:', error.response.status);
    //   console.error('Data:', error.response.data);
    // }
  }
}