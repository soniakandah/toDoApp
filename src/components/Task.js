import React from 'react';

function Task(props) {
    return (
        <div className={props.isComplete ? 'complete' : 'incomplete'}>
            {props.name ? <p>{props.name}</p> : ''}
            {props.description ? <p>{props.description}</p> : ''}
            {props.date ? (
                <p>{new Date(props.date).toLocaleDateString()}</p>
            ) : (
                ''
            )}
            {props.priority ? <p>Priority: {props.priority}</p> : ''}
            <label>
                Is Complete?
                <input
                    type='checkbox'
                    checked={props.isComplete}
                    onChange={e => {
                        props.toggle(props.id, props.isComplete);
                    }}
                ></input>
            </label>
            <button
                onClick={e => {
                    props.edit(props);
                }}
            >
                Edit
            </button>
            <button
                onClick={e => {
                    props.delete(props.id);
                }}
            >
                Delete
            </button>
        </div>
    );
}

export default Task;
