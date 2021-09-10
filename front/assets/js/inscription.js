import axios from "axios"

window.addEventListener('DOMContentLoaded', event => {
    let name    = document.getElementById("name");
    let email   = document.getElementById("email");
    let phone   = document.getElementById("phone");
    let message = document.getElementById("message");

    document.getElementById("contactForm").addEventListener("submit", (e) => {
        e.preventDefault();

        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        let config = {
            headers: {
                "Authorization": "Bearer zDba6iIX_jzlWrixgECqWj4M1IlN9Dt73HmowxMXfH9KVWGWP1XFyoByzT1scX1R",
            }
        }

        axios.post("https://support.aymeric.tech/api/v1/users", {
            firstname: name.value,
            email: email.value,
            phone: phone.value,
            groups: "Users",
            invite: true,
            roles: "Mairie"
        })
            .then(data => {
                console.log(data)
            })

    })
});