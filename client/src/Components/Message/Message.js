import React from 'react';
import './Message.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Message = (props) => {
    const {message, setMessage} = props;

    return (
        <div className="message">
            <FontAwesomeIcon className="close" icon={faTimes} title="Close" color="#232931" onClick={e => setMessage(null)}/>
            <p className="text">{message ? message:null}</p>
        </div>
    )
}

export default Message;