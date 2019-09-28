import './style.css';
import myImage from './image.jpg';

function component() {
    const element = document.createElement('div');

    element.innerHTML = 'Hello webpack'
    element.classList.add('hello');

    // Add an image to the existing div
    const img = new Image();
    img.src = myImage;

    element.appendChild(img);

    return element;
}

document.body.appendChild(component());