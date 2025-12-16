async function getImageStory() {
  try {
    //Get values from HTML form
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
      }
    );
    console.log("Response:", response.data);

    document.getElementById("story-text").innerHTML = JSON.stringify(
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

getImageStory();
