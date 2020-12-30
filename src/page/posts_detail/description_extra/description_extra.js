import './description_extra.scss';

function DescriptionExtra(props){
    const data = props.data;
    return(
        <div className="description_extra__container">
            <h3 className="description_extra__title">
                Mô tả thêm
            </h3>
            <div className="underlined__desc_extra"></div>
            <div className="description_extra__content">
                <p className="desc__content">
                    {data && data.boarding.description}
                </p>
            </div>
        </div>
    );
}

export default DescriptionExtra;