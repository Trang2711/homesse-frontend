import './search.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

const SubmitSearch = yup.object().shape({
  // comment: yup.string().required(),
  // star: yup.number().required(),
});
function AdvanceSearch(props) {
  const {handleSubmitData} = props;
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(SubmitSearch),
  });

  function addFurniture(params, oldString, addString) {
    if (params) return oldString + addString + ",";
    return oldString;
  }

  const onSubmit = (data) => {
    console.log(data);
    let furniture = "";
    furniture = addFurniture(data.air_conditioner, furniture, "điều hòa");
    furniture = addFurniture(data.bathroom, furniture, "phòng tắm riêng");
    furniture = addFurniture(data.kitchen, furniture, "bếp");
    furniture = addFurniture(data.washing_machine, furniture, "tủ lạnh");
    furniture = addFurniture(data.internet, furniture, "internet");
    furniture = furniture.substring(0, furniture.length - 1);
    var dataFomat = {
      district: data.district,
      provinces: data.provinces,
      wards: data.wards,
      area_max: data.area_max,
      area_min: data.area_min,
      price_max: data.price_max,
      price_min: data.price_min,
      stayWithOwner: data.stayWithOwner,
      type_room: data.type_room,
      furniture: furniture
    };

    console.log(dataFomat);
    if(!handleSubmit) return;
    // console.log("hello");
    handleSubmitData(dataFomat);
  };
  return (
    <div className='advance-search'>
      <h1 className='advance-search__header'>Tìm kiếm nâng cao</h1>
      <div className='advance-search__container'>
        <form className='advance-search__form' ref={register} onSubmit={handleSubmit(onSubmit)}>
          <div className='group-input'>
            <h2 className='group-input__title'>Địa chỉ</h2>
            <input type='text' name="provinces" placeholder='Tỉnh/Thành phố' ref={register} />
            <input type='text' name="district" placeholder='Quận/Huyện' ref={register} />
            <input type='text' name="wards" placeholder='Xã/Phường' ref={register} />
          </div>
          <div className='group-input'>
            <h2 className='group-input__title'>Cơ sở vật chất</h2>
            <div className='input'>
              <input type='checkbox' name='internet' id='internet' ref={register} />
              <label htmlFor='internet'>Internet</label>
            </div>
            <div className='input'>
              <input type='checkbox' name='washing_machine' id='washing_machine' ref={register} />
              <label htmlFor='washing_machine'>Máy giặt</label>
            </div>
            <div className='input'>
              <input type='checkbox' name='air_conditioner' id='air_conditioner' ref={register} />
              <label htmlFor='air_conditioner'>Điều hòa</label>
            </div>
            <div className='input'>
              <input type='checkbox' name='kitchen' id='kitchen' ref={register} />
              <label htmlFor='kitchen'>Bếp</label>
            </div>
            <div className='input'>
              <input type='checkbox' name='bathroom' id='bathroom' ref={register} />
              <label htmlFor='bathroom'>Vệ sinh khép kín</label>
            </div>
            <div className='input last-input'>
              <input type='checkbox' name='stayWithOwner' id='stayWithOwner' ref={register} />
              <label htmlFor='stayWithOwner'>Chung chủ</label>
            </div>
          </div>
          <div className='group-input'>
            <h2 className='group-input__title'>Khác</h2>
            <select name='type_room' ref={register}>
              <option className="abc" value="">Loại phòng</option>
              <option value="chung cư">Chung cư</option>
              <option value="phòng trọ">Phòng trọ</option>
              <option value="homestay">Homestay</option>
              <option value="nhà nguyên căn">Nhà nguyên căn</option>
            </select>
            <p className="lable-connect">Giá cả từ</p>
            <input type='number' name="price_min" placeholder='Giá cả' ref={register} />
            <p className="lable-connect">Đến</p>
            <input type='number' name="price_max" placeholder='Giá cả' ref={register} />
            <p className="lable-connect">Diện tích từ</p>
            <input type='number' name="area_min" placeholder='Diện tích' ref={register} />
            <p className="lable-connect">Đến</p>
            <input type='number' name="area_max" placeholder='Diện tích' ref={register} />
          </div>
          <button type='submit'>TÌM KIẾM</button>
        </form>
      </div>
    </div>
  );
}

export default AdvanceSearch;
