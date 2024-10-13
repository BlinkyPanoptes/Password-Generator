function passGen() {
    const  chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=";
    function generatePass(length) {
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        return password;
    }
    const password = generatePass(12);
    document.getElementById("password").value = password;
}

document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("button");
    button.addEventListener("click", passGen);

    const copyButton = document.querySelector("#copy");
    copyButton.addEventListener("click", function() {
        const passwordInput = document.getElementById("password");
        passwordInput.select();
        document.execCommand("copy");
    });
});