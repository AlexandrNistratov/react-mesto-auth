import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';

function Register({handleRegister}) {
    const [data, setData] = React.useState({
        regEmail: '',
        regPassword: ''
    });

    function handleChange(e) {
        const {name, value} = e.target;

        setData({
            ...data,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const {regEmail, regPassword} = data;

        handleRegister(regEmail, regPassword);
    }

    return (
        <div className="auth">
            <div className="auth__container">
                <form className="auth__form"
                      name="logForm"
                      onSubmit={handleSubmit}
                >
                    <h2 className="auth__title">Регистрация</h2>
                    <input className="auth__input"
                           id="user-email"
                           required
                           minLength="2"
                           maxLength="40"
                           type="email"
                           placeholder="email"
                           name="regEmail"
                           value={data.email}
                           onChange={handleChange}/>
                    <span className="error" id="user-email-error"></span>
                    <input className="auth__input"
                           id="user-password"
                           required
                           minLength="2"
                           maxLength="40"
                           type="password"
                           suggested="current-password"
                           placeholder="Пароль"
                           name="regPassword"
                           value={data.password}
                           onChange={handleChange}/>
                    <span className="error" id="user-password-error"></span>
                    <button className="auth__submit" type="submit">Зарегистрироваться</button>
                    <Switch>
                        <Route exact path='/sign-up'>
                                <Link className='auth__subtitle' to="/sign-in">Уже зарегистрированы? Войти</Link>
                        </Route>
                    </Switch>
                </form>
            </div>
        </div>
    )
}

export default Register;