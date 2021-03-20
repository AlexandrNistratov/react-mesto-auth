import React from 'react';

import Union from '../image/Union.svg'
import UnionError from '../image/UnionError.svg'

function InfoTooltip ({status, onClose, isInfoTooltipOpen}) {
    return (
        <div className={isInfoTooltipOpen ? `popup popup__result popup_is-opened` : `popup popup__result`}>
            <div className="popup__container popup__container-result">
                <button className="popup__close popup__close-result" type="button"
                        onClick={onClose}>
                </button>
                {status === 'error' ?
                <>
                    <img className="popup__result_image" alt='Ошибка регистрации' src={UnionError}/>
                    <div className="popup__result_container_text">
                        <h2 className="popup__result_text">Что-то пошло не так!
                            Попробуйте ещё раз.</h2>
                    </div>
                </> :
                <>
                    <img className="popup__result_image" alt='Успешная регистрация' src={Union}/>
                    <div className="popup__result_container_text">
                        <h2 className="popup__result_text">Вы успешно зарегистрировались!</h2>
                    </div>
                </>
                }

            </div>
        </div>
    )
}

export default InfoTooltip;