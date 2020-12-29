// import { Link } from "react-router-dom";
// function Notification(props) {
//     const {userId, postId, title, content} = props
//     return(
//         <Link to=""><li id={"/posts/" + postId}>Bài đăng "<b>{title}</b>" {content}</li></Link>
//     )
// }

// export default Notification;
import React, { useEffect, useMemo, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import "../sass/notication.scss";

import { GETNOTICATION, READNOTICATION } from "../action/mainAction";

import { uniqueId } from "lodash";

import Echo from "laravel-echo";

import moment from "moment";

function Notication(props) {

    // Cáu hình thư viện pusher

    window.Pusher = require("pusher-js");

    window.Echo = new Echo({

        broadcaster: "pusher",

        key: "3ade4b6949abdf2188b0",

        cluster: "ap1",

        forceTLS: true

    });

    useEffect(() => {

        // lấy danh sách các thông báo từ server khi mà người dùng không online

        getNotification();

    }, []);

    useEffect(() => {

        // Kết nối đến Boardcast

        var channel = window.Echo.channel("my-channel");

        channel.listen(".my-event", function(res) {

            setData([...data, res.message]);

        });

    }, []);

    // State trạng thái hiển thị danh sách thông báo

    const [show, setShow] = useState(false);

    // State lưu trữ danh sách các thông báo

    const [data, setData] = useState([]);

    const dispatch = useDispatch();

    // Ref của thành phần hiển thị số thông báo chưa đọc

    const refCount = useRef();

    // Hàm lấy danh sách thông báo từ server sử dụng redux saga

    function getNotification() {

        dispatch({ type: GETNOTICATION, payload: setData });

    }

    // Hàm hiển thị danh sách các thông báo

    function handledShow() {

        if (show == false) {

            setShow(true);

        } else {

            setShow(false);

        }

    }

    // Hàm đánh dấu tất cả thông báo đều đã đọc

    function handelMark() {

        dispatch({ type: READNOTICATION });

        refCount.current.textContent = 0;

    }

    const listNotice = useMemo(() => showNotication(), [data]);

    // Hàm hiển thị danh sách thông báo

    function showNotication() {

        if (data.length > 0) {

            let number = 0;

            return data.map(item => {

                if (item.userId == localStorage.userId) {

                    number++;

                    refCount.current.textContent = number;

                    return (

                        <li

                            key={uniqueId("notification")}

                            className="itemNotication"

                        >

                            <section className="content-notication">

                                <p className="time">

                                    {moment(item.time).format("DD/MM/YYYY")}

                                </p>

                                <p style={{ marginBottom: 0 }}>{item.msg}</p>

                            </section>

                        </li>

                    );

                }

            });

        } else {

            return (

                <li className="itemNotication">

                    <section className="content-notication">

                        <p className="time"></p>

                        <p style={{ marginBottom: 0 }}>

                            Không có thông báo mới

                        </p>

                    </section>

                </li>

            );

        }

    }

    return (

        <>

            <section className="logo">

                <i

                    style={{

                        fontSize: "34pt",

                        color: "white"

                    }}

                    className="fas fa-bell"

                ></i>

                <span

                    onClick={handledShow}

                    ref={refCount}

                    style={{

                        position: "absolute",

                        top: "10px",

                        right: "30px",

                        cursor: "pointer"

                    }}

                    className="count"

                >

                    0

                </span>

                <ul

                    style={show ? { display: "block" } : { display: "none" }}

                    className="listnotication"

                >

                    {listNotice}

                    {data.length > 0 ? (

                        <li onClick={handelMark} className="mark">

                            Đánh dấu tất cả đã đọc

                        </li>

                    ) : (

                        ""

                    )}

                </ul>

            </section>

        </>

    );

}

export default Notication;