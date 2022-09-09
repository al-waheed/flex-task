import React from "react";
import {getDays} from './../utils'
export const MessageCard = ({details }) => {
  return (
    <div className="message_card">
      <h5 className="text_bold">{details.author} </h5>
      <div className="message">
      <div className="message_container">
        <h5 className="text_bold-2">{details.message.title} </h5>
        <h5 className="text_bold-3"> 
        <span className='gray_dot'></span>{details.message.receiver} 
         <span className="date">{getDays(details.createdAt)}</span>
         </h5>
      
        <p className="message_box">
        {details.message.description}
        </p>
      </div>
      </div>
    </div>
  );
};
