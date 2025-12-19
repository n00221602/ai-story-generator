//These functions are used to open image URLs in a new tab when the user clicks on the view button in the form.
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
  //Displays a temporary loading message and spinner
  document.getElementById("response-text").textContent = "Generating story...";
  document.getElementById("loadingSpinner").style.display = "block";
  
  try {
    //Assigns input values from the form
    const imageUrl1 = document.getElementById("imageUrl1").value;
    const imageUrl2 = document.getElementById("imageUrl2").value;
    const imageUrl3 = document.getElementById("imageUrl3").value;
    const genre = document.getElementById("genre").value;

    //Send POST request to n8n webhook with a JSON body
    const response = await axios.post(
      "http://localhost:5678/webhook/image-story",
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
    
    //Once the response is received, clear the loading message and spinner
    document.getElementById("response-text").textContent = "";
    document.getElementById("loadingSpinner").style.display = "none";

    //Display the generated story on the form page, converting newline characters to HTML line breaks
    document.getElementById("response-text").innerHTML = response.data.output.replace(/\n/g, "<br>");
    return response.data;
    
  } catch (error) {
    console.error("Error fetching image story:", error.message);
    document.getElementById("response-text").textContent = "Error has occured. Please try again.";
    document.getElementById("loadingSpinner").style.display = "none";
  }
}
async function getStoryConcept() {
  //Displays a temporary loading message and spinner
  document.getElementById("response-text").textContent = "Generating concept...";
  document.getElementById("loadingSpinner").style.display = "block";
  
  try {
    //Assigns input values from the form
    const imageUrl1 = document.getElementById("imageUrl1").value;
    const imageUrl2 = document.getElementById("imageUrl2").value;
    const genre = document.getElementById("genre").value;

    //Send POST request to n8n webhook with a JSON body
    const response = await axios.post(
      "http://localhost:5678/webhook/image-story",
      {
        images: [
          { url1: imageUrl1 }, 
          { url2: imageUrl2 },
        ],
        genre: genre,
        option: "story-concept"
      }
    );
    
    //Once the response is received, clear the loading message and spinner
    document.getElementById("response-text").textContent = "";
    document.getElementById("loadingSpinner").style.display = "none";

    //Display the generated story on the form page, converting newline characters to HTML line breaks
    document.getElementById("response-text").innerHTML = response.data.output.replace(/\n/g, "<br>");

    return response.data;

  } catch (error) {
    console.error("Error fetching story concept:", error.message);
    document.getElementById("response-text").textContent = "Error has occured. Please try again.";
    document.getElementById("loadingSpinner").style.display = "none";
  }
}
async function getCharacter() {
  //Displays a temporary loading message and spinner
  document.getElementById("response-text").textContent = "Generating character...";
  document.getElementById("loadingSpinner").style.display = "block";
  
  try {
    //Assigns input values from the form
    const imageUrl1 = document.getElementById("imageUrl1").value;
    const imageUrl2 = document.getElementById("imageUrl2").value;
    const imageUrl3 = document.getElementById("imageUrl3").value;
    const role = document.getElementById("role").value;
    const name = document.getElementById("name").value;

    //Send POST request to n8n webhook with a JSON body
    const response = await axios.post(
      "http://localhost:5678/webhook/image-story",
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
    
    //Once the response is received, clear the loading message and spinner
    document.getElementById("response-text").textContent = "";
    document.getElementById("loadingSpinner").style.display = "none";

    //Display the generated story on the form page, converting newline characters to HTML line breaks
    document.getElementById("response-text").innerHTML = response.data.output.replace(/\n/g, "<br>");

    return response.data;

  } catch (error) {
    console.error("Error fetching image story:", error.message);
    document.getElementById("response-text").textContent = "Error has occured. Please try again.";
    document.getElementById("loadingSpinner").style.display = "none";
  }
}