const images = [];
for(let i = 1; i < 31; i++){
    images.push(`${i}.jpg`);
}
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgimage = document.createElement("img");

bgimage.src = `img/${chosenImage}`;

document.body.appendChild(bgimage);