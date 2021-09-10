window.addEventListener('DOMContentLoaded', event => {
    const elem = document.createElement('div');

    elem.className = "text-muted politique"
    elem.innerHTML = "En cliquant sur Envoyer, vous acceptez notre <a href='https://tag.aymeric.tech/conditions/use'>politique d'utilisation</a> ainsi que notre <a href='https://tag.aymeric.tech/confidentialite'>politique de confidentialité</a>";

    const target = document.querySelector('.btn');
    target.parentNode.insertBefore(elem, target);
});
