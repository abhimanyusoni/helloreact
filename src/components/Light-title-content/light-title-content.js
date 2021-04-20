import React from 'react';
import '../Light-title-content/light-title-content.css';

const lightTitleContent = (props) =>{
    return(
        <div className="lightTitle_wrapper">
            <h2 className="light_title">{props.title}</h2>
            <p>{props.content1}</p>
            <p>{props.content2}</p>
        </div>
    );
}

export default lightTitleContent;