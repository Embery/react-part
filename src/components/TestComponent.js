import React from 'react';

import RefWrapper from '/src/components/RefWrapper';

const TestComponent = (props) => {
    return <div>
        {`Hello from react${props.name? ', ' + props.name:''} ;)`}
    </div>
}

export default RefWrapper(TestComponent);