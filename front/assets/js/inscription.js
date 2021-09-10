window.addEventListener('DOMContentLoaded', event => {
    addRgpdDiv();
    transformPlaceholder();

});


let transformPlaceholder = () => {
    let allDiv = document.getElementsByClassName('form-group');

    /** Traduction nom" **/
    allDiv[0].children.item(1).placeholder = "Votre nom";

    /** Traduction email **/
    allDiv[1].children.item(1).placeholder = "Votre email";

    /** Traduction message **/
    allDiv[2].children.item(1).placeholder = "Votre message";

}

let addRgpdDiv = () => {
    const elem = document.createElement('div');

    elem.className = "text-muted politique"
    elem.innerHTML =
        "<p>Une fois la demande envoyée un compte sera créé et un membre de l'équipe vous contactera.</p>" +
        "<p>En cliquant sur Envoyer, vous acceptez notre <a href='https://tag.aymeric.tech/conditions/use'>politique d'utilisation</a> ainsi que notre <a href='https://tag.aymeric.tech/confidentialite'>politique de confidentialité</a>.</p>";

    const target = document.querySelector('.btn');
    target.parentNode.insertBefore(elem, target);
}