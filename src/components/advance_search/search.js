import './search.scss';
import { Component } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

const SubmitSearch = yup.object().shape({
  // comment: yup.string().required(),
  // star: yup.number().required(),
});
function AdvanceSearch() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(SubmitSearch),
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };
  return (
    <div className='advance-search'>
      <h1 className='advance-search__header'>Tìm kiếm nâng cao</h1>
      <div className='advance-search__container'>
        <form className='advance-search__form' ref={register} onSubmit={handleSubmit(onSubmit)}>
          <div className='group-input'>
            <h2 className='group-input__title'>Địa chỉ</h2>
            <input type='text' placeholder='Địa chỉ' ref={register} />
          </div>
          <div className='group-input'>
            <h2 className='group-input__title'>Cơ sở vật chất</h2>
            <div className='input'>
              <input
                type='checkbox'
                name='airConditioner'
                id='airConditioner'
                ref={register}
              />
              <label htmlFor='airConditioner'>Điều hòa</label>
            </div>
            <div className='input'>
              <input
                type='checkbox'
                name='washingMachine'
                id='washingMachine'
                ref={register}
              />
              <label htmlFor='washingMachine'>Máy giặt</label>
            </div>
            <div className='input'>
              <input type='checkbox' name='heater' id='heater' ref={register} />
              <label htmlFor='heater'>Điều hòa</label>
            </div>
            <div className='input'>
              <input type='checkbox' name='kitchen' id='kitchen' ref={register}/>
              <label htmlFor='kitchen'>Bếp</label>
            </div>
            <div className='input'>
              <input type='checkbox' name='toilet' id='toilet' ref={register}/>
              <label htmlFor='toilet'>Vệ sinh khép kín</label>
            </div>
            <div className='input last-input'>
              <input type='checkbox' name='stayWithOwner' id='stayWithOwner' ref={register}/>
              <label htmlFor='stayWithOwner'>Chung chủ</label>
            </div>
          </div>
          <div className='group-input'>
            <h2 className='group-input__title'>Khác</h2>
            <select name='type_room' ref={register}>
              <option value='volvo'>Loại phòng</option>
              <option value='saab'>Đơn</option>
              <option value='fiat'>Đôi</option>
              <option value='audi'>Audi</option>
            </select>
            <select name='price' ref={register}>
              <option value='volvo'>Giá cả</option>
              <option value='saab'>3 000 000</option>
              <option value='fiat'>2 500 000</option>
              <option value='audi'>2 000 000</option>
            </select>
            <select name='area' ref={register}>
              <option value='volvo'>Diện tích</option>
              <option value='saab'>25m2</option>
              <option value='fiat'>30m2</option>
              <option value='audi'>35m2</option>
            </select>
          </div>
          <button type='submit'>TÌM KIẾM</button>
        </form>
      </div>
    </div>
  );
}

export default AdvanceSearch;
