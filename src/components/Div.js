
import React from 'react';

import RefWrapper from '/src/components/RefWrapper';

const htmlDecode = (input) => {
    const el = document.createElement('div');
    el.innerHTML = input;
    return el.childNodes.length === 0 ? "" : el.childNodes[0].nodeValue;
}
export const Div = (props) => {
    return <div {...props} dangerouslySetInnerHTML={{ __html: htmlDecode(props.content) }} />
}

export default RefWrapper(Div);