import './time_report.scss';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

function TimeReport() {
    const data = [{ name: 'Tuần 1', post: 400, pv: 2400, amt: 2400 }, { name: 'Tuần 2', post: 300, pv: 2400, amt: 2400 }, { name: 'Tuần 3', post: 350, pv: 2400, amt: 2400 }, { name: 'Tuần 4', post: 500, pv: 2400, amt: 2400 }];
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