import React from 'react';

function Register ({ handleRegister }) {
    const [data, setData] = React.useState({
        regEmail: '',
        regPassword: ''
    });

    function handleChange (e) {
        const { name, value } = e.target;

        setData({
            ...data,
            [name]: value
        })
    }

    function handleSubmit (e) {
        e.preventDefault();
        const { regEmail, regPassword } = data;

        handleRegister(regEmail, regPassword );
    }

    return(
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
                           type="text"
                           placeholder="email"
                           name="regEmail"
                           value={ data.email }
                           onChange={handleChange} />
                    <span className="error" id="user-email-error"></span>
                    <input className="auth__input"
                           id="user-password"
                           required
                           minLength="2"
                           maxLength="40"
                           type="text"
                           placeholder="Пароль"
                           name="regPassword"
                           value={ data.password }
                           onChange={handleChange} />
                    <span className="error" id="user-password-error"></span>
                    <button className="auth__submit" type="submit">Зарегистрироваться</button>
                    <h2 className="auth__subtitle">Уже зарегистрированы? Войти</h2>
                </form>
            </div>
        </div>
    )
}

export default Register;