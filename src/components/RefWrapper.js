import React, {useEffect, useRef, useState} from 'react';

const RefWrapper = (Component) => {
    return ((props) => {
        const extComponent = props.extComponent;
        const propsCopy = Object.assign({}, props);
        delete propsCopy.extComponent;
        const ref = useRef(null);
        const [divisions, setDivisions] = useState(null);
      
        useEffect(() => {
            // extComponent.setHeight(ref.current?.clientHeight || 0)
            // extComponent.setWidth(ref.current?.clientWidth || 0)
            const t = ref;
            if(ref?.current){
                new ResizeObserver(()=>{
                    extComponent.setHeight(ref.current?.clientHeight || 0);
                    extComponent.setWidth(ref.current?.clientWidth || 0);
                }).observe(ref.current);
            }
        }, [])
        return <div ref={ref}><Component {...propsCopy}/></div>;
    })
}

export default RefWrapper;