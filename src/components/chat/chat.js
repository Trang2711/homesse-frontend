import "./chat.scss";
import avatar__user from '../../images/avatar1.jpg';
import { useState } from 'react';

function Chat() {
  const [message, setMessage] = useState("");
  const [msg, setmsg] = useState("");

  function submitMessage(){
    setMessage();
  }
  function onHandleChange(event) {
    var target = event.target;
    var name = target.name;
    var value = target.value;

    if (name === 'message') {
        setmsg(value);
    }
}
  
  return (
    <div className="chat__container">
      <div className="chat-bubble"></div>
      <div className="chat-box">
        <div className="chat-box__header">
          <div>
            <div 
              className="avatar_chat" 
              style={{
                backgroundImage: "url(" +  avatar__user + ")", 
                height: "40px",
                width: "40px",
                borderRadius: "20px",
                marginLeft: "5px",
                backgroundSize: "cover",
                backgroundPosition: "center, center"
              }}></div>
          </div>
          <p className="name__user">Trang Trịnh</p>
          <i className="far fa-times-circle cancel__chat"></i>
        </div>
        <div className="chat-box__content__message">
          <div className="mess-group left">
            <div 
              className="mess-group__avatar"
              style={{
                backgroundImage: "url(" +  avatar__user + ")", 
                height: "40px",
                width: "40px",
                borderRadius: "20px",
                marginLeft: "5px",
                backgroundSize: "cover",
                backgroundPosition: "center, center"
              }}></div>
            <div className="mess-group__content">Hello, John, how are you?</div>
          </div>

          <div className="mess-group right">
            <div 
              className="mess-group__avatar"
              style={{
                backgroundImage: "url(" +  avatar__user + ")", 
                height: "40px",
                width: "40px",
                borderRadius: "20px",
                marginLeft: "5px",
                backgroundSize: "cover",
                backgroundPosition: "center, center"
              }}></div>
            <div className="mess-group__content">{ message }</div>
          </div>
        </div>
        <div className="chat-box__footer">
          <input type="text" name="message" value={message} className="my__message" placeholder="Viết tin nhắn" onChange={onHandleChange}/>
          <i className="fas fa-paper-plane send__message" onClick={submitMessage}></i>
        </div>
      </div>
    </div>
  );
}

export default Chat;
