// const allImages = document.getElementsByTagName('img');

// for (let image of allImages) {
//     console.log(image.src);
// }


// document.querySelectorAll() <-- better
// const squareImg = document.getElementsByClassName('square');

// for (let image of squareImg) {
//     image.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg`;
// }

const links = document.querySelectorAll('p a');
for (let link of links) {
    console.log(link.href);
}