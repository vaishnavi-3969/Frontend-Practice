const btn = document.getElementsByTagName("button");
const url = "https://dog.ceo/api/breeds/image/random";

const showImg = document.getElementById("show-image");

async function getRandomDogImage(){
    const promise = await fetch(url);
    const data = await promise.json();
    const img = document.createElement("img");
    img.src = data.message;
    showImg.appendChild(img);
}

btn[0].addEventListener("click", getRandomDogImage);