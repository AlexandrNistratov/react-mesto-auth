import React from 'react';

import Union from '../image/Union.svg'
import UnionError from '../image/UnionError.svg'

function InfoTooltip({status, onClose, isInfoTooltipOpen}) {
    return (
        <div className={isInfoTooltipOpen ? `popup popup__result popup_is-opened` : `popup popup__result`}>
            <div className="popup__container popup__container-result">
                <button className="popup__close popup__close-result" type="button"
                        onClick={onClose}>
                </button>
                <img className="popup__result_image" alt='Ошибка регистрации'
                     src={status === 'error' ? UnionError : Union}/>
                <div className="popup__result_container_text">
                    <h2 className="popup__result_text">{status === 'error' ? 'Что-то пошло не так! Попробуйте ещё раз.' : 'Вы успешно зарегистрировались!'}.</h2>
                </div>
            </div>
        </div>
    )
}

export default InfoTooltip;