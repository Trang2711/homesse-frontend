import { useState } from 'react';

function CheckReview(props) {
    const {initState, onClickReview} = props;
    const tmp = (initState === "0") ? false : true;
    const [checked, setChecked] = useState(tmp);

    function onChangeStatus() {
        const currentState = (checked) ? false : true;
        setChecked(currentState);
        onClickReview(currentState);
    }

    return(
        <i className={checked  ? "far fa-check green review-icon" : "far fa-times red review-icon"} onClick={onChangeStatus}></i>
    )
}

export default CheckReview;