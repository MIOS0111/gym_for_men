import React from 'react';
import meme from './images/meme.module.png'
import {checkName, checkFriendPhone, checkOurPhone, checkEmail, checkInfo, OutputData} from './Action_scripts.module.js'

function Actions(){
    return(
        <div className='animate__animated animate__fadeIn'>
            <h2>Акции и спецпредложения</h2>
            <h3>Внимание! До 31 декабря действует скидка 30% на приобретение годового абонемента!</h3>
            <img src={meme} alt='meme'></img>
            <h2>Приведи друга и получи подарок!</h2>
            <form onSubmit={OutputData}>
                <div className='row justify-content-center'>
                    <p className='col-3'>Имя друга</p>
                    <input className='col-3' type='text' id='name' onChange={checkName}/>
                    <div class="col-2"><span id="name_check"></span></div>
                </div>           
                <div className='row justify-content-center'>
                    <p className='col-3'>Телефон друга</p>
                    <input className='col-3' placeholder="+70000000000" type='text' id='friend_tel' 
                    onChange={checkFriendPhone}/>
                    <div class="col-2"><span id="friend_phone_check"></span></div>
                </div>
                <div className='row justify-content-center'>
                    <p className='col-3'>Ваш телефон</p>
                    <input className='col-3' placeholder="+70000000000" type='text' id='tel' onChange={checkOurPhone}/>
                    <div class="col-2"><span id="our_phone_check"></span></div>
                </div>          
                <div className='row justify-content-center'>
                    <p className='col-3'>Ваш E-mail</p>
                    <input className='col-3' placeholder="example@exp.com" type='text' id='mail' onChange={checkEmail}/>
                    <div class="col-2"><span id="email_check"></span></div>
                </div>
                <div className='row justify-content-center'>
                    <p className='col-3'>Доп. информация</p>
                    <input className='col-3'  type='text' id='info' onChange={checkInfo}/>
                    <div class="col-2"><span id="info_check"></span></div>
                </div>           
                <button className="btn btn-outline-dark btn-lg" type="submit">Отправить!</button>
            </form>
        </div>)}

export default Actions;