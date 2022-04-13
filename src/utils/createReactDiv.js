import React from 'react';
import { Div } from '../components/Div';

const createReactDiv = (props) => {
    const inner = props.inner || "";
    delete props.inner;
    return <Div {...props} />
}

export default createReactDiv;