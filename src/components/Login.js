import React from 'react';

function Login({handleLogin}) {
    const [data, setData] = React.useState({
        logEmail: '',
        logPassword: ''
    });

    const [message, setMessage] = React.useState('');

    function handleChange(e) {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!data.logEmail || !data.logPassword) {
            return;
        }
        handleLogin(data.logEmail, data.logPassword);
    }

    return (
        <div className="auth">
            <div className="auth__container">
                <form className="auth__form"
                      name="logForm"
                      onSubmit={handleSubmit}
                >
                    <h2 className="auth__title">Вход</h2>
                    <input className="auth__input"
                           id="user-email"
                           required
                           minLength="2"
                           maxLength="40"
                           type="email"
                           placeholder="email"
                           name="logEmail"
                           value={data.email}
                           onChange={handleChange}/>
                    <span className="error" id="user-email-error">{message}</span>
                    <input className="auth__input"
                           id="user-password"
                           required
                           minLength="2"
                           maxLength="40"
                           type="password"
                           suggested="current-password"
                           placeholder="Пароль"
                           name="logPassword"
                           value={data.password}
                           onChange={handleChange}/>
                    <span className="error" id="user-password-error">{message}</span>
                    <button className="auth__submit" type="submit">Войти</button>
                </form>
            </div>
        </div>
    )
}

export default Login;