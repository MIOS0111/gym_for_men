function check(first_id, second_id, regex) { //это экспортировать не надо
    var checking_value = document.getElementById(first_id).value;

    if (regex.test(checking_value)) {
        document.getElementById(second_id).innerHTML = "";
        return true;
    }
    else {
        document.getElementById(second_id).innerHTML = "ошибка ввода";
        return false;
    }
}

function checkName(){
    return check("name", "name_check", /^[a-zA-Zа-яА-ЯёЁ]{2,20}$/)
}

function checkFriendPhone(){
    return check('friend_tel', 'friend_phone_check', /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)
}

function checkOurPhone(){
    return check('tel', 'our_phone_check', /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)
}

function checkEmail() {
    return check('mail', 'email_check', /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu)
}

function checkInfo() {
    return check('info', 'info_check', /^[a-zA-Zа-яА-ЯёЁ0-9?.,!-]{2,200}$/)
}

function OutputData(event){
    var friendName=document.getElementById("name").value;
    var friendPhone=document.getElementById("friend_tel").value;
    var ourPhone=document.getElementById("tel").value;
    var email=document.getElementById("mail").value;
    var info=document.getElementById("info").value;
    if(checkName() && checkFriendPhone() && checkOurPhone(), checkEmail(), checkInfo()){
        alert(`Мы свяжемся с вашим другом \nдруга зовут: ${friendName} \nтелефон друга: ${friendPhone}\nваш телефон: ${ourPhone}\nпочта: ${email}\nдополнительная информация: ${info} `);
    }
    else{
        alert("повторите ввод")
        event.preventDefault();
    }
}

export {checkName, checkFriendPhone, checkOurPhone, checkEmail, checkInfo, OutputData}