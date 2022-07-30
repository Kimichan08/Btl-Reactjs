/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import style from './Register.module.css';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';

const cx = classNames.bind(style);

function Register() {

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => console.log(data);
    window.scrollTo(0, 0)

    return (
        <div className={cx('container', 'mt-5', 'd-block')}>
            <h3 className='text-center text-uppercase font-weight-bold'>Đăng ký</h3>
            <div className=''>
                <form onSubmit={handleSubmit(onSubmit)} className={cx('form-submit')}>
                    <div className={cx("mt-3")}>
                        <label className="mb-0 mr-2 font-weight-bold" htmlFor="name">
                            Họ và tên
                        </label>
                        <input
                            id="name" type="text" placeholder='Họ và tên'
                            className={cx("form-control", "form-input", "mt-2")}
                            {...register("name", { required: true })}
                        />
                    </div>
                    <span className={cx("err")}>
                        {errors.name?.type === "required" && <p>Bạn chưa điền họ và tên</p>}
                    </span>

                    <div className={cx("mt-3")}>
                        <label className="mb-0 mr-2 font-weight-bold" htmlFor="number">
                            Số điện thoại
                        </label>
                        <input
                            id="number" placeholder='Số điện thoại'
                            className={cx("form-control", "form-input", "mt-2")}
                            {...register("number", { required: true })}
                        />
                    </div>
                    <span className={cx("err")}>
                        {errors.number?.type === "required" && <p>Bạn chưa điền số điện thoại</p>}
                    </span>

                    <div className={cx('form-submit', 'mt-3')}>
                        <label className="mb-0 mr-2 font-weight-bold d-block" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email" type="email "
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
                        className={cx("btn", "text-uppercase", "btn-button", "mb-5", "mt-2")}
                        href="#"
                    >
                        Đăng ký
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register;
