import React, { useState } from 'react';
import { dateFix } from '../util';

function TaskEdit(props) {
    let [name, setName] = useState(props.task.name);
    let [description, setDescription] = useState(props.task.description);
    let [priority, setPriority] = useState(props.task.priority);
    let [date, setDate] = useState(dateFix(props.task.date));
    let [isComplete, setIsComplete] = useState(props.task.isComplete);

    console.log(date);

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    props.edit({
                        id: props.task.id,
                        name,
                        description,
                        priority,
                        date,
                        isComplete,
                    });
                    props.close();
                }}
            >
                <h1>Edit Task</h1>
                <label>
                    Name:{' '}
                    <input
                        type='text'
                        value={name}
                        onChange={e => {
                            setName(e.target.value);
                        }}
                    ></input>
                </label>

                <label>
                    Description:
                    <input
                        type='text'
                        value={description}
                        onChange={e => {
                            setDescription(e.target.value);
                        }}
                    ></input>
                </label>

                <label>
                    Priority:
                    <input
                        type='number'
                        value={priority}
                        onChange={e => {
                            setPriority(e.target.value);
                        }}
                    />
                </label>

                <label>
                    Date:
                    <input
                        type='date'
                        value={date}
                        onChange={e => {
                            setDate(e.target.value);
                        }}
                    />
                </label>

                <label>
                    Is Complete?
                    <input
                        type='checkbox'
                        checked={isComplete}
                        onChange={e => {
                            setIsComplete(e.target.value);
                        }}
                    />
                </label>

                <button>Save Changes</button>
                <button
                    type='button'
                    onClick={() => {
                        props.close();
                    }}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
}

export default TaskEdit;
