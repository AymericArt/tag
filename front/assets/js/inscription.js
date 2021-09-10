window.addEventListener('DOMContentLoaded', event => {
    addRgpdDiv();
    transformPlaceholder();

});


let transformPlaceholder = () => {
    let allDiv = document.getElementsByClassName('form-group');


    allDiv[0].children.item(1).placeholder = "Votre nom";
    allDiv[1].children.item(1).placeholder = "Votre email";
    allDiv[2].children.item(1).placeholder = "Votre message";
}

let addRgpdDiv = () => {
    const elem = document.createElement('div');

    elem.className = "text-muted politique"
    elem.innerHTML = "En cliquant sur Envoyer, vous acceptez notre <a href='https://tag.aymeric.tech/conditions/use'>politique d'utilisation</a> ainsi que notre <a href='https://tag.aymeric.tech/confidentialite'>politique de confidentialité</a>";

    const target = document.querySelector('.btn');
    target.parentNode.insertBefore(elem, target);
}