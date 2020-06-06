var username = document.form['form']['username'];
var password = document.form['form']["password"];

function check(form) {
    if (form.username.value == "admin" && form.password.value == "admin") {
        $("#Asucc").show();
    }
    else if (form.username.value == "user" && form.password.value == "user") {
        $("#Usucc").show();
    }
    else {
        $("#erm").show();
    }
}
