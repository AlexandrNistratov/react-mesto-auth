import logo from '../image/logo.svg';
import React from 'react'
import { Route, Switch, Link } from 'react-router-dom';

function Header({ handleLogout, email}) {
    // console.log(email)
    return (
            <header className="header">
                <img className="header__logo" src={logo} alt="Логотип Mesto" />
                    <Switch>
                        <Route exact path='/'>
                            <nav className="header__nav">
                                <p className='header__nav-email'>{email.email}</p>
                                <Link className='header__nav-link' onClick={handleLogout} to="/sign-up">Выход</Link>
                            </nav>
                        </Route>
                        <Route exact path='/sign-up'>
                            <nav className="header__nav">
                                <Link className='header__nav-link' to="/sign-in">Вход</Link>
                            </nav>
                        </Route>
                        <Route exact path='/sign-in'>
                            <nav className="header__nav">
                                <Link className='header__nav-link' to="/sign-up">Регистрация</Link>
                            </nav>
                        </Route>
                    </Switch>
            </header>
    )
}

export default Header;