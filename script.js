const username = "katya";
const email = "katyapalamarchuk@gmail.com";
const password = "161616";
const Password = "161616";
const inputusername = promt("Введіть ваше ім'я для реєстрації");
const inputemail = promt("Введіть ваш email для реєстрації");
const inputpassword = promt("Введіть ваш пароль для реєстрації");
const inputPassword = promt("Введіть пароль ще раз для підтвердження");

if (inputusername === "username"){
    if (inputemail === "email"){
        if (inputpassword === "password"){
            if (inputPassword === "Password"){
                alert("Вітаю! Ви пройшли реєстрацію!");
                alert ("Ім'я - katya, email - katyapalamarchuk@gmail.com, пароль - 161616");
            }
        }
    }
}
