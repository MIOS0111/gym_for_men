export default function alert_html_val(){
    const name = document.getElementById('name').value;
    const tel = document.getElementById('tel').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const mail = document.getElementById('mail').value;
    alert(`Вы записались на занятие\nИмя: ${name}\nТелефон: ${tel}\nДата: ${date} \nВремя: ${time}\nEmail: ${mail}`);
}