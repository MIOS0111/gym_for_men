import React from 'react';
import Person from './Person';
import Themnokholmov from './images/Themnokholmov.module.jpg'
import Kharitonov from './images/Kharitonov.module.jpg'
import Beliy from './images/Beliy.module.jpg'

function Employees(){
    return(
        <div className='animate__animated animate__fadeIn'>
            <h2>Наши тренеры</h2>
            <div className='horizontal_scroll'>
                <Person image={Themnokholmov} name='Иван Темнохолмов' text='Lorem ipsum dolor 
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua'></Person>
                <Person image={Kharitonov} name='Борис Харитонов' text='Lorem ipsum dolor 
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua'></Person>
                <Person image={Beliy} name='Александр Белый' text='Lorem ipsum dolor 
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua'></Person>
            </div>
            <h2>Контакты</h2>
            <ul>
                <li>+7-xxx-xxx-xx-xx</li>
                <li>+7-yyy-yyy-yy-yy</li>
                <li>Группа ВК: @gym_for_men_official</li>
                <li>Телеграм канал: @gym_for_men_official</li>
            </ul>
        </div>)}

export default Employees;