import React, { useState } from 'react';

function TaskAdd(props) {
    let [name, setName] = useState('');
    let [description, setDescription] = useState('');
    let [priority, setPriority] = useState('');
    let [date, setDate] = useState('');
    let [isComplete, setIsComplete] = useState(false);

    return (
        <div>
            <form
                id='add-task-form'
                onSubmit={e => {
                    e.preventDefault();
                    setName('');
                    setDescription('');
                    setPriority('');
                    setDate('');
                    setIsComplete(false);
                }}
            >
                <h1>Add Task</h1>
                <label>
                    Name:{' '}
                    <input
                        type='text'
                        value={name}
                        onChange={e => {
                            setName(e.target.value);
                        }}
                    />
                </label>

                <label>
                    Description:
                    <input
                        type='text'
                        value={description}
                        onChange={e => {
                            setDescription(e.target.value);
                        }}
                    />
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

                <button
                    onClick={() => {
                        let data = {
                            name,
                            description,
                            priority,
                            isComplete,
                            date,
                        };
                        props.add(data);
                    }}
                >
                    Save Changes
                </button>
                <button>Clear</button>
            </form>
        </div>
    );
}

export default TaskAdd;
