/*
Modal Component
*/

import React from 'react';

const Modal = ({onClose, currentPhoto}) => {
    const { name, category, description, index} = currentPhoto;

    return (
        <div className = "modalBackground">
            <div className = "modalContainer">
                <h3 className="ModalTitle">{name}</h3>
                <img alt="current category" src={require(`../../assets/large/${category}/${index}.jpg`).default} />
                <p> {description} </p>
                <button type="button" onClick={onClose}>Close</button>
            </div>
        </div>        
    )
}

export default Modal;