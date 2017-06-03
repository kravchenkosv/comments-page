import React from 'react';

export default function AddButton(props) {
    return (
        <button onClick={props.action} data-id={props.dataId} type="button" className={'btn btn-' + props.color + ' btn-xs ' + props.typeClass} disabled={props.disabled && 'disabled'}>
            <span data-id={props.dataId} className={'glyphicon glyphicon-' + props.icon}></span>
        </button>
    )
}