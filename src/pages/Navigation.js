import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

function Navigation() {
    return (
    <header className={classes.header}>
        <h1>Качалка для мужиков!</h1>
        <nav>
            <ul>
                <il><Link to="./">Главная</Link></il>
                <il><Link to="./employees">Команда</Link></il>
                <il><Link to="./actions">Спецпредложения</Link></il>
            </ul>
        </nav>
    </header>
    );
}
export default Navigation;