/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import style from './Login.module.css';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function Login() {
  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  window.scrollTo(0, 0)

  return (
    <div className={cx('container', 'mt-5', 'd-block')}>
      <h3 className='text-center text-uppercase font-weight-bold'>Đăng nhập</h3>
      <div className=''>
        <form onSubmit={handleSubmit(onSubmit)} className={cx('form-submit')}>
          <div className={cx('form-submit', 'mt-3')}>
            <label className="mb-0 mr-2 font-weight-bold d-block" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className={cx("form-control", "form-input", "mt-2")}
              {...register("email", { required: true })} placeholder="Email"
            />
          </div>
          <span className={cx("err")}>
            {errors.name?.type === "required" && <p>Bạn chưa điền email</p>}
          </span>
          <div className={cx("mb-2", "mt-4")}>
            <label className="mb-0 mr-2 font-weight-bold d-block" htmlFor="password">
              Mật khẩu
            </label>
            <input
              id="password" type="password"
              className={cx("form-control", "form-input", "mt-2")}
              {...register("password", { required: true })} placeholder="Mật khẩu"
            />
          </div>
          <span className={cx("err")}>
            {errors.email && <p>Bạn chưa nhập mật khẩu</p>}
          </span>
          <button
            type="submit"
            className={cx("btn", "text-uppercase", "btn-button", "mb-4", "mt-2")}
            href="#"
          >
            Đăng nhập
          </button>
        </form>
        <div className={cx('text-center','mb-4')}>
          <span>Chưa có tài khoản? Đăng ký </span>
          <Link to={"/register"} className='text-danger text-decoration-none'>tại đây</Link>
        </div>
      </div>
    </div>
  )
}

export default Login;