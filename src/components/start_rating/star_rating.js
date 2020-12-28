import './star_rating.scss';
import {useState} from 'react'

export default function StarRating(props) {
    const {initialValue, onChangeValue, register} = props;
    const [rating, setRating] = useState(initialValue);
    const ratings = [1, 2, 3, 4, 5];
    function onClickStar(item){
        setRating(item);
    }
    return(
        <div className="your_review" >
            {ratings.map(item => (
                <div className="checkbStar">
                    <input id={"star" + item } type="checkbox" className="checkboxStar" name="star" ref={register} value={item}  onClick={() => onClickStar(item)}/>
                    <label htmlFor={"star" + item}><i className={(item <= rating) ? "fas fa-star review_star yellow" : "fas fa-star review_star gray"} id="review_star"/></label>
                </div>
            ))}
            
        </div>                        
    );
}