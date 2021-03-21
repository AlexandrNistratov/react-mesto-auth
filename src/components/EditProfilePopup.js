import PopupWithForm from './PopupWithForm';
import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    function handleChangeName(e) {
        setName(e.target.value)
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value)
    }

    const currentUser = React.useContext(CurrentUserContext);
    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleSubmit(e) {
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
            name: name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            name="info"
            container="min"
            title="Редактировать профиль"
            submit="min"
            textSubmitButton="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input className="popup__input popup__input_type_firstname" id="user-name" required minLength="2"
                   maxLength="40"
                   type="text" placeholder="Имя" name="firstname" value={name || ''} onChange={handleChangeName}/>
            <span className="error" id="user-name-error"/>
            <input className="popup__input popup__input_type_career" id="user-career" required minLength="2"
                   maxLength="200"
                   type="text" placeholder="Работа" name="career" value={description || ''}
                   onChange={handleChangeDescription}/>
            <span className="error" id="user-career-error"/>
        </PopupWithForm>
    )
}

export default EditProfilePopup;