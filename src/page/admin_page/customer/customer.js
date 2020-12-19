import './customer.scss';
import { Component } from 'react';

class Customer extends Component {
    render() {
        return (
            <div className="customer__container">
                <h3 className="customer__title">Khách hàng</h3>
                <div className="customer__inner">
                <table className="owner-table">
                        <thead>
                            <tr>
                                <th><input type="checkbox" name="delete" /><i className="far fa-trash-alt"></i></th>
                                <th>Tài khoản chủ trọ</th>
                                <th>Ngày tạo</th>
                                <th>Trạng thái duyệt</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" name="delete" /></td>
                                <td>
                                    trinhtrang27112000@gmail.com
                                </td>
                                <td>18:30 12/11/2020</td>
                                <td><i className="far fa-check green"></i></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="delete" /></td>
                                <td>
                                    nguyenlan123@gmail.com
                                </td>
                                <td>07:54 10/12/2020</td>
                                <td><i className="far fa-times red"></i></td>
                            </tr>
                        </tbody>

                    </table>
                
                </div>
            </div>
        )
    }
}

export default Customer;