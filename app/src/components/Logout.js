import React from 'react';
import { connect } from 'react-redux';

function Logout(props) {
    return (
        <div>
            <button
                onClick={() => {
                    props.dispatch({ type: 'LOGOUT' });
                }}
            >
                Logout
            </button>
        </div>
    );
}

export default connect()(Logout);
