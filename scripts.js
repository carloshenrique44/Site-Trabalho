function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.getElementById("toggleIcon");

    if (passwordInput && toggleIcon) {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            toggleIcon.classList.remove("bi-eye-fill");
            toggleIcon.classList.add("bi-eye-slash-fill");
        } else {
            passwordInput.type = "password";
            toggleIcon.classList.remove("bi-eye-slash-fill");
            toggleIcon.classList.add("bi-eye-fill");
        }
    } else {
        console.error("Elementos não encontrados.");
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const formData = {
            username: username,
            email: email,
            password: password,
        };

        if (username && email && password) {
            console.log('Dados enviados com sucesso:', formData);
            // Limpa os campos após o envio dos dados
            document.getElementById("username").value = '';
            document.getElementById("email").value = '';
            document.getElementById("password").value = '';
        } else {
            console.log('Por favor, preencha todos os campos.');
        }
    });


    const entrarButton = document.getElementById("entrarButton");
    if (entrarButton) {
        entrarButton.addEventListener("click", function () {
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (username && email && password) {
                console.log('Dados enviados com Sucesso.');
                console.log('Nome:', username);
                console.log('Email:', email);
                console.log('Senha:', password);
                window.location.href = "https://frangoespacial.com.br/wp-content/uploads/2024/04/Catalogo-Espacial-26_04_2024.pdf";
            } else {
                console.log('Por favor, preencha todos os campos.');
            }
        });
    }
});
