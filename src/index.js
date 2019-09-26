import './style.css';
import Image from './image.jpg';

function component() {
    const element = document.createElement('div');

    element.innerHTML = 'Hello webpack'
    element.classList.add('hello');

    // Add an image to the existing div
    const myImage = new Image();
    myImage.src = Image;

    element.appendChild(myImage);

    return element;
}

document.body.appendChild(component());