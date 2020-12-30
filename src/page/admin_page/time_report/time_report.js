import './time_report.scss';
import postApi from '../../../api/postApi';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { useEffect, useState } from 'react';

    
function TimeReport() {
    const [listDay, setListDay] = useState([]);
    const [data, setData] = useState([]);

    // var data = [];
    useEffect(() => {
        async function fetchListDay() {
            const res = await postApi.getListDay();
            console.log(res);
            var data = [];
            for(let i = 0; i < res.length; i ++) {
                
                data.push({
                    name: res[i].day,
                    post: res[i].post,
                    pv: 2400,
                    amt: 2400,
                });
            }
            console.log(data);
            setData(data);
            setListDay(res);
        }

        fetchListDay();
    }, []);

    
    // const data = [{ name: '2020-2-1', post: 1, pv: 2400, amt: 2400 }, { name: '2020-2-2', post: 2, pv: 2400, amt: 2400 }, { name: '2020-2-3', post: 3, pv: 2400, amt: 2400 }, { name: '2020-2-4', post: 4, pv: 2400, amt: 2400 }];
    console.log(data);
    return (
        <div className="time-report__container">
            <h3 className="time-report__title">Báo cáo theo thời gian</h3>
            <div className="time-report__inner">
                <LineChart width={980} height={500} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="post" stroke="#8884d8" activeDot={{ r: 8 }}/>
                </LineChart>
                <h3 className="char-title">Số lượng bài viết theo tuần</h3>
            </div>
        </div>
    )
}

export default TimeReport;