import React from 'react';

import './InputList.css';

const InputList = props => {
    const clickHandler = () => {
        props.deleteHandler(props.detail.key);
    }
    return (
        <li className="list" onClick={clickHandler}>{`${props.detail.Name} ${props.detail.Age} Years Old`}</li>
    )
}

export default InputList;