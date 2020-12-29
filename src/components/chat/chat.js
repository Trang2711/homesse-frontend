import "./chat.scss";
import avatar__user from '../../images/avatar1.jpg';
import { useState } from 'react';

function Chat() {
  const [msg, setmsg] = useState("");
  const [valueInput, setvalueInput] = useState("");

  function handleKeyPress(event) {
    console.log(event.key);
    setvalueInput(event.target.value);
    // if(event.key === 'Enter'){

    // }
  }
  function handleSubmitChat(e) {
    e.preventDefault();
    // console.log(valueInput);
    
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
                backgroundImage: "url(" + avatar__user + ")",
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
                backgroundImage: "url(" + avatar__user + ")",
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
                backgroundImage: "url(" + avatar__user + ")",
                height: "40px",
                width: "40px",
                borderRadius: "20px",
                marginLeft: "5px",
                backgroundSize: "cover",
                backgroundPosition: "center, center"
              }}></div>
            <div className="mess-group__content">{msg}</div>
          </div>
        </div>
        <div className="chat-box__footer">
          <form action="" className="chat-form" onSubmit={handleSubmitChat}>
            <input type="text" name="message" value={valueInput} className="my__message" placeholder="Viết tin nhắn" onChange={handleKeyPress} />
            <i className="fas fa-paper-plane send__message"></i>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chat;
