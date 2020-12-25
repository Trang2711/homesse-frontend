import './description_extra.scss';

function DescriptionExtra(){
    return(
        <div className="description_extra__container">
            <h3 className="description_extra__title">
                Mô tả thêm
            </h3>
            <div className="underlined__desc_extra"></div>
            <div className="description_extra__content">
                <p className="desc__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer tincidunt suscipit erat, nec laoreet ipsum vestibulum sed. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer tincidunt suscipit erat, nec laoreet ipsum vestibulum sed. 
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer tincidunt suscipit erat, nec laoreet ipsum vestibulum sed.
                </p>
            </div>
        </div>
    );
}

export default DescriptionExtra;