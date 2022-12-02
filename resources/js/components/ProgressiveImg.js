import React, { useState } from 'react';


const ProgressiveImg = (props)=>{
    const [showPlaceholder,SetShowPlaceHolder] = useState(false)
    if(!props.src){
        return props.placeholder
    }
    if(showPlaceholder && props.placeholder){
        return props.placeholder
    }else{
        return <img onError={()=>{
            SetShowPlaceHolder(true)
        }} {...props}/>
    }
    
}

export default ProgressiveImg;
