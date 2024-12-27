import React from 'react';
import main_img from './images/main_img.module.jpg'
import alert_html_val from'./Scripts.module.js'

function Main_page(){
    return(
        <div className='animate__animated animate__fadeIn'>
            <h2>Немного о зале "качалка для мужиков"</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                irure dolor in reprehenderit in voluptate velit esse cillum 
                dolore eu fugiat nulla pariatur.</p>
            <h3>Обязательно посетите нас! Первое занятие - со скидкой 50%!</h3>
            <img className='img1' src={main_img} alt="timetable"/>
            <h3>Записаться на занятие</h3>
            <form onSubmit={alert_html_val}>
                <div className='row justify-content-center'>
                <p className='col-3'>Имя</p>
                <input className='col-3' type='text' id='name' minlength="2" maxlength="20" 
                pattern="^[A-Za-zА-Яа-яЁё]+$" required/></div>

                <div className='row justify-content-center'>
                <p className='col-3'>Телефон</p>
                <input className='col-3' placeholder="+70000000000" type='text' id='tel' 
                pattern="^\+7[0-9]{10}$" required/></div>

                <div className='row justify-content-center'>
                <p className='col-3'>Дата</p>
                <input className='col-3' type='date' id='date' required/></div>

                <div className='row justify-content-center'>
                <p className='col-3'>Время</p>
                <select className='col-3' required id='time'>
                    <option>10-00</option>
                    <option>11-00</option>
                    <option>12-00</option>
                    <option>13-00</option>
                    <option>14-00</option>
                    <option>15-00</option>
                    <option>16-00</option>
                    <option>17-00</option>
                    <option>18-00</option>
                    <option>19-00</option>
                    <option>20-00</option>
                </select> </div>

                <div className='row justify-content-center'>
                <p className='col-3'>Электронная почта</p>
                <input className='col-3' placeholder="example@exp.com" type='email' id='mail' 
                pattern="^\S+@\S+\.\S+$" required/></div>

                <button className="btn btn-outline-dark btn-lg" type="submit">Записаться!</button>
            </form>
        </div>)}

export default Main_page;