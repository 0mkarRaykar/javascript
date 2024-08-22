const requestUrl = "https://api.github.com/users/0mkarraykar";
const imgUrl = "https://avatars.githubusercontent.com/u/90885826?v=4";

// Fetch user data from GitHub API
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(this.responseText);
    // console.log(data);
    // console.log("Followers: " + data.followers);

    // Set the user's name in the card
    // document.querySelector(".userName").textContent = data.name;
    document.querySelector(".userName").textContent = `${data.login}`
    document.querySelector(".cardText").textContent = `Followers: ${data.followers}`;
  }
};
xhr.send();

// Fetch and display the image inside the card
const imgXhr = new XMLHttpRequest();
imgXhr.open("GET", imgUrl);
imgXhr.responseType = "blob"; // 'blob' to handle binary data
imgXhr.onload = function () {
  if (imgXhr.status === 200) {
    const imgBlob = imgXhr.response;
    const imgURL = URL.createObjectURL(imgBlob);

    // Select the image element inside the card and set its source
    const imgElement = document.querySelector(".card img");
    imgElement.src = imgURL;
  }
};
imgXhr.send();
