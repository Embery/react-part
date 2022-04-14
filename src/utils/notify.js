import { notification } from 'antd';

export const notify = (props = {}) => {
    if(props.type) notification[props.type](props);
    else notification.open(props);
}