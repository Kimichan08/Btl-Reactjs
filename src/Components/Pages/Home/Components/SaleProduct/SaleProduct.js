import React from 'react';
import style from './Sale.module.css';
import classNames from 'classnames/bind';

import Products from './Products/Products';

const cx = classNames.bind(style);

function SaleProduct() {
  return (
    <div className={cx('bg-sale', "mt-5")}>
      <div className={cx('container')}>
        <div className={cx('row')}>
          <div className={cx("col-lg-3","mt-5","p-0")}>
            <p className={cx('text-sale')}>Sản phẩm khuyến mãi</p>
            <p className={cx('pt-2','text-infor')}>Cùng săn những sản phẩm giá tốt nhất chỉ có tại Ego Garden</p>
          </div>
          <div className={cx("col-lg-9", 'p-0')}>
            <div className={cx("container", "row", "justify-content-between")}>
              <Products />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SaleProduct