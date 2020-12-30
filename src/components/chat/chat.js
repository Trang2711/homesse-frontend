import "./chat.scss";
import avatar__user1 from '../../images/avatar1.jpg';
import avatar__user2 from '../../images/avatar2.jpg';

import { useState, useRef, useEffect } from 'react';

function Chat() {
  // const [message, setMessage] = useState("");

  const listMessageInit = [
    {
      id: 1,
      userId: 123,
      content: "Hello",
    },
    {
      id: 2,
      userId: 345,
      content: "Hi",
    },
    {
      id: 3,
      userId: 123,
      content: "Leu leu dam p cưt cho kia!",
    },
    {
      id: 4,
      userId: 456,
      content: "con lau, tk dien",
    },
    {
      id: 5,
      userId: 123,
      content: "bye",
    },
    {
      id: 6,
      userId: 345,
      content: "them chao day",
    },
    {
      id: 7,
      userId: 123,
      content: "ke may",
    },
    {
      id: 8,
      userId: 345,
      content: "ke t",
    }
  ]
  const [valueInput, setvalueInput] = useState("");
  const [listMessage, setListMessage] = useState(listMessageInit);
  const currentId = 123;
  const scrollEl = useRef(null);

  const [visibility, setVisibility] = useState("false");

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [listMessage]);


  function handleKeyPress(event) {
    console.log(event.key);
    setvalueInput(event.target.value);

  }

  function handleSubmitChat(e) {
    e.preventDefault();
    setvalueInput("");
    let newMess = {
      userId: currentId,
      content: valueInput
    }
    let arr = [...listMessage];
    arr.push(newMess)
    setListMessage(arr);

  }

  function handleClickChat() {
    setVisibility(!visibility);
  }

  return (
    <div className="chat__container">
      <div className="chat-bubble" onClick={handleClickChat}></div>
      <div className="chat-box" style={{display: visibility ? "block" : "none"}}>
        <div className="chat-box__header">
          <div>
            <div
              className="avatar_chat"
              style={{
                backgroundImage: "url(" + avatar__user1 + ")",
                height: "40px",
                width: "40px",
                borderRadius: "20px",
                marginLeft: "5px",
                backgroundSize: "cover",
                backgroundPosition: "center, center"
              }}></div>
          </div>
          <p className="name__user">Trang Trịnh</p>
          <i className="far fa-times-circle cancel__chat" onClick={handleClickChat}></i>
        </div>
        <div className="chat-box__content" ref={scrollEl}>
          {
            listMessage.map(mess => {
              return (
                <div className={"mess-group " + ((currentId === mess.userId) ? "right" : "left")}>
                  <div
                    className="mess-group__avatar"
                    style={{
                      backgroundImage: "url(" + ((currentId === mess.userId) ? avatar__user1 : avatar__user2) + ")",
                      height: "40px",
                      width: "40px",
                      borderRadius: "20px",
                      marginLeft: "5px",
                      backgroundSize: "cover",
                      backgroundPosition: "center, center"
                    }}></div>
                  <div className="mess-group__content">{mess.content}</div>
                </div>
              )
            })
          }
          <div ref={messagesEndRef} />
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
