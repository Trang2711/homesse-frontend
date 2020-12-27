import './customer.scss';
import { useState, useEffect } from 'react';
import userApi from '../../../api/userApi';
import CheckReview from '../../../components/check_review/check_review';

function Customer() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        async function fetchCustomer() {
            const customers = await userApi.getUser();
            console.log(customers);
            setCustomers(customers);
        }

        fetchCustomer();
    }, [])

    function handleClickReview(status_review) {
        console.log(status_review);
        /**
         * send request to change status review
         */
    }

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
                        {
                            customers.map(customer => (
                                <tr key={customer.id}>
                                    <td><input type="checkbox" name="delete" /></td>
                                    <td>
                                        {customer.email}
                                    </td>
                                    <td>{customer.time_create}</td>
                                    <td>
                                        <CheckReview initState={customer.status_review} onClickReview={handleClickReview} />
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>

                </table>

            </div>
        </div>
    )
}

export default Customer;