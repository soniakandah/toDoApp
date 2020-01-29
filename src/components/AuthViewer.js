import React from 'react';
import { connect } from 'react-redux';

function AuthViewer(props) {
    let show = props.token !== '';
    if (props.reverse) show = !show;

    if (show) return <div>{props.children}</div>;
    else return <div></div>;
}

const mSTP = state => ({
    token: state.auth.token,
});

export default connect(mSTP)(AuthViewer);
