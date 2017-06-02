import React from 'react';
function AddButton(props) {
    return (
        <button onClick={props.action} data-id={props.dataId} type="button" className={'btn btn-' + props.type +' btn-xs'}>
            <span data-id={props.dataId} className={'glyphicon glyphicon-' + props.icon}></span>
        </button>
    )
}
export default AddButton;