import React, {useState} from 'react';
import {Table} from 'antd'
import { observer } from 'mobx-react-lite';

import RefWrapper from '/src/components/RefWrapper';
import { StoreWrapper } from './StoreWrapper';

const ReactTable = observer((props) => {
    const [extStore] = useState(props?.store || null);
    const store = extStore ? new StoreWrapper(extStore) : null;
    const dataSource = [
        {id: 1, name: 'Ололоша', age: '10'},
        {id: 2, name: 'Азазаша', age: 100},
        {id: 5, name: 'Уруруша', age: 100500},
    ]
    return (
        <Table 
            {...props}
            dataSource={store?.data || dataSource}
            pagination={store?.paginationConfig || undefined}
        />
    );
});

export default RefWrapper(ReactTable);