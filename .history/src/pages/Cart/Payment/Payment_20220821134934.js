import React, { useContext, useState, useEffect } from 'react';
import '../Cart.module.scss';
import styles from './Payment.css';
import classNames from 'classnames/bind';
import { DataContext } from '../DataProvider';
import Colors from '../Colors';
import Sizes from '../Sizes';
import '../Details.css';
import config from '~/Components/config';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Payment() {
    const cx = classNames.bind(styles);
    const value = useContext(DataContext);
    const [cart, setCart] = value.cart;
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + item.price * item.count;
            }, 0);
            setTotal(res);
        };
        getTotal();
    }, [cart]);

    const reduction = (id) => {
        cart.forEach((item) => {
            if (item._id === id) {
                item.count === 1 ? (item.count = 1) : (item.count -= 1);
            }
        });
        setCart([...cart]);
    };
    const increase = (id) => {
        cart.forEach((item) => {
            if (item._id === id) {
                item.count += 1;
            }
        });
        setCart([...cart]);
    };

    const removeProduct = (id) => {
        if (window.confirm('Do you want to delete this product?')) {
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1);
                }
            });
            setCart([...cart]);
        }
    };

    return (
        <>
            <div className={cx('row')}>
                <div className={cx('col-md-6 col-sm-12 col-xs-12')}>
                    {/* <div className={cx('step')}>
                        <div className={cx('step-sections steps-onepage')}>
                            <div className={cx('section')}>
                                <div className={cx('section-content section-customer-information no-mb')}>
                                    <p className={cx('section-content-text')}>
                                        Bạn đã có tài khoản?
                                        <NavLink to={config.routes.register}>Đăng nhập</NavLink>
                                    </p>

                                    <div className={cx('fieldset')}>
                                        <div className={cx('field field-required  ')}>
                                            <div className={cx('field-input-wrapper')}>
                                                <label
                                                    className={cx('field-label')}
                                                    htmlFor="billing_address_full_name"
                                                >
                                                    Họ và tên
                                                </label>
                                                <input
                                                    placeholder="Họ và tên"
                                                    autoCapitalize="off"
                                                    spellCheck="false"
                                                    className={cx('field-input')}
                                                    size="30"
                                                    type="text"
                                                    id="billing_address_full_name"
                                                    name="full_name"
                                                    value=""
                                                    autoComplete="false"
                                                />
                                            </div>
                                        </div>

                                        <div className={cx('field  field-two-thirds  ')}>
                                            <div className={cx('field-input-wrapper')}>
                                                <label className={cx('field-label')} htmlFor="checkout_user_email">
                                                    Email
                                                </label>
                                                <input
                                                    autoComplete="false"
                                                    placeholder="Email"
                                                    autoCapitalize="off"
                                                    spellCheck="false"
                                                    className={cx('field-input')}
                                                    size="30"
                                                    type="email"
                                                    id="checkout_user_email"
                                                    name="email"
                                                    value=""
                                                />
                                            </div>
                                        </div>

                                        <div className={cx('field field-required field-third  ')}>
                                            <div className={cx('field-input-wrapper')}>
                                                <label className={cx('field-label')} htmlFor="billing_address_phone">
                                                    Số điện thoại
                                                </label>
                                                <input
                                                    autoComplete="false"
                                                    placeholder="Số điện thoại"
                                                    autoCapitalize="off"
                                                    spellCheck="false"
                                                    className={cx('field-input')}
                                                    size="30"
                                                    maxLength="15"
                                                    type="tel"
                                                    id="billing_address_phone"
                                                    name="phone"
                                                    value=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    {/* </div> */}
                    <div class="main">
                        <div class="main-header">
                            <a href="/" class="logo">
                                <h1 class="logo-text">Outerity</h1>
                            </a>

                            <ul class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="/cart">Giỏ hàng</a>
                                </li>

                                <li class="breadcrumb-item breadcrumb-item-current">Thông tin giao hàng</li>
                            </ul>
                        </div>
                        <div class="main-content">
                            <div class="step">
                                <div class="step-sections steps-onepage" step="1">
                                    <div class="section">
                                        <div class="section-header">
                                            <h2 class="section-title">Thông tin giao hàng</h2>
                                        </div>
                                        <div class="section-content section-customer-information no-mb">
                                            <p class="section-content-text">
                                                Bạn đã có tài khoản?
                                                <NavLink
                                                    className={(nav) => ({ active: nav.isActive })}
                                                    to={config.routes.register}
                                                >
                                                    <FontAwesomeIcon icon={faUser} />
                                                </NavLink>
                                            </p>

                                            <div class="fieldset">
                                                <div class="field field-required  ">
                                                    <div class="field-input-wrapper">
                                                        <label
                                                            className="field-label"
                                                            htmlFor="billing_address_full_name"
                                                        >
                                                            Họ và tên
                                                        </label>
                                                        <input
                                                            placeholder="Họ và tên"
                                                            autoCapitalize="off"
                                                            spellCheck="false"
                                                            className="field-input"
                                                            size="30"
                                                            type="text"
                                                            id="billing_address_full_name"
                                                            name="full_name"
                                                            value=""
                                                            autoComplete="false"
                                                        />
                                                    </div>
                                                </div>

                                                <div class="field  field-two-thirds  ">
                                                    <div class="field-input-wrapper">
                                                        <label className="field-label" htmlFor="checkout_user_email">
                                                            Email
                                                        </label>
                                                        <input
                                                            autoComplete="false"
                                                            placeholder="Email"
                                                            autoCapitalize="off"
                                                            spellCheck="false"
                                                            className="field-input"
                                                            size="30"
                                                            type="email"
                                                            id="checkout_user_email"
                                                            name="email"
                                                            value=""
                                                        />
                                                    </div>
                                                </div>

                                                <div class="field field-required field-third  ">
                                                    <div class="field-input-wrapper">
                                                        <label className="field-label" htmlFor="billing_address_phone">
                                                            Số điện thoại
                                                        </label>
                                                        <input
                                                            autoComplete="false"
                                                            placeholder="Số điện thoại"
                                                            autoCapitalize="off"
                                                            spellCheck="false"
                                                            className="field-input"
                                                            size="30"
                                                            maxLength="15"
                                                            type="tel"
                                                            id="billing_address_phone"
                                                            name="phone"
                                                            value=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="section-content">
                                            <div class="fieldset">
                                                <form
                                                    autocomplete="off"
                                                    id="form_update_shipping_method"
                                                    class="field default"
                                                    accept-charset="UTF-8"
                                                    method="post"
                                                >
                                                    <input name="utf8" type="hidden" value="✓" />
                                                    <div class="content-box mt0">
                                                        <div
                                                            id="form_update_location_customer_shipping"
                                                            class="order-checkout__loading radio-wrapper content-box-row content-box-row-padding content-box-row-secondary "
                                                            for="customer_pick_at_location_false"
                                                        >
                                                            <input name="utf8" type="hidden" value="✓" />
                                                            <div class="order-checkout__loading--box">
                                                                <div class="order-checkout__loading--circle"></div>
                                                            </div>

                                                            <div class="field field-required  ">
                                                                <div class="field-input-wrapper">
                                                                    <label
                                                                        class="field-label"
                                                                        for="billing_address_address1"
                                                                    >
                                                                        Địa chỉ
                                                                    </label>
                                                                    <input
                                                                        placeholder="Địa chỉ"
                                                                        autocapitalize="off"
                                                                        spellcheck="false"
                                                                        class="field-input"
                                                                        size="30"
                                                                        type="text"
                                                                        id="billing_address_address1"
                                                                        name="billing_address[address1]"
                                                                        value=""
                                                                    />
                                                                </div>
                                                            </div>

                                                            <input
                                                                name="selected_customer_shipping_country"
                                                                type="hidden"
                                                                value=""
                                                            />
                                                            <input
                                                                name="selected_customer_shipping_province"
                                                                type="hidden"
                                                                value=""
                                                            />
                                                            <input
                                                                name="selected_customer_shipping_district"
                                                                type="hidden"
                                                                value=""
                                                            />
                                                            <input
                                                                name="selected_customer_shipping_ward"
                                                                type="hidden"
                                                                value=""
                                                            />

                                                            <div class="field field-show-floating-label field-required field-third ">
                                                                <div class="field-input-wrapper field-input-wrapper-select">
                                                                    <label
                                                                        class="field-label"
                                                                        for="customer_shipping_province"
                                                                    >
                                                                        {' '}
                                                                        Tỉnh / thành{' '}
                                                                    </label>
                                                                </div>
                                                            </div>

                                                            <div class="field field-show-floating-label field-required field-third ">
                                                                <div class="field-input-wrapper field-input-wrapper-select">
                                                                    <label
                                                                        class="field-label"
                                                                        for="customer_shipping_district"
                                                                    >
                                                                        Quận / huyện
                                                                    </label>
                                                                    <select
                                                                        class="field-input"
                                                                        id="customer_shipping_district"
                                                                        name="customer_shipping_district"
                                                                    >
                                                                        <option
                                                                            data-code="null"
                                                                            value="null"
                                                                            selected=""
                                                                        >
                                                                            Chọn quận / huyện
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div class="field field-show-floating-label field-required  field-third  ">
                                                                <div class="field-input-wrapper field-input-wrapper-select">
                                                                    <label
                                                                        class="field-label"
                                                                        for="customer_shipping_ward"
                                                                    >
                                                                        Phường / xã
                                                                    </label>
                                                                    <select
                                                                        class="field-input"
                                                                        id="customer_shipping_ward"
                                                                        name="customer_shipping_ward"
                                                                    >
                                                                        <option
                                                                            data-code="null"
                                                                            value="null"
                                                                            selected=""
                                                                        >
                                                                            Chọn phường / xã
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div
                                                                id="div_location_country_not_vietnam"
                                                                class="section-customer-information "
                                                                // style="display: none;"
                                                            >
                                                                <div class="field field-two-thirds">
                                                                    <div class="field-input-wrapper">
                                                                        <label
                                                                            class="field-label"
                                                                            for="billing_address_city"
                                                                        >
                                                                            Thành phố
                                                                        </label>
                                                                        <input
                                                                            placeholder="Thành phố"
                                                                            autocapitalize="off"
                                                                            spellcheck="false"
                                                                            class="field-input"
                                                                            size="30"
                                                                            type="text"
                                                                            id="billing_address_city"
                                                                            name="billing_address[city]"
                                                                            value=""
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div class="field field-third">
                                                                    <div class="field-input-wrapper">
                                                                        <label
                                                                            class="field-label"
                                                                            for="billing_address_zip"
                                                                        >
                                                                            Mã bưu chính
                                                                        </label>
                                                                        <input
                                                                            placeholder="Mã bưu chính"
                                                                            autocapitalize="off"
                                                                            spellcheck="false"
                                                                            class="field-input"
                                                                            size="30"
                                                                            type="text"
                                                                            id="billing_address_zip"
                                                                            name="billing_address[zip]"
                                                                            value=""
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div id="change_pick_location_or_shipping">
                                            <div id="section-shipping-rate">
                                                <div class="section-header">
                                                    <h2 class="section-title">Phương thức vận chuyển</h2>
                                                </div>
                                                <div class="section-content">
                                                    <div class="content-box  blank-slate">
                                                        <i class="blank-slate-icon icon icon-closed-box "></i>
                                                        <p>
                                                            Vui lòng chọn tỉnh / thành để có danh sách phương thức vận
                                                            chuyển.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="section-payment-method" class="section">
                                                <div class="section-header">
                                                    <h2 class="section-title">Phương thức thanh toán</h2>
                                                </div>
                                                <div class="section-content">
                                                    <div class="content-box">
                                                        <div class="radio-wrapper content-box-row">
                                                            <label
                                                                class="radio-label"
                                                                for="payment_method_id_1002766550"
                                                            >
                                                                <div class="radio-input payment-method-checkbox">
                                                                    <input
                                                                        type-id="1"
                                                                        id="payment_method_id_1002766550"
                                                                        class="input-radio"
                                                                        name="payment_method_id"
                                                                        type="radio"
                                                                        value="1002766550"
                                                                        checked=""
                                                                    />
                                                                </div>
                                                                <div class="radio-content-input">
                                                                    <img
                                                                        class="main-img"
                                                                        src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=1"
                                                                        alt=""
                                                                    />
                                                                    <div>
                                                                        <span class="radio-label-primary">
                                                                            Thanh toán khi giao hàng (COD)
                                                                        </span>
                                                                        <span class="quick-tagline hidden"></span>
                                                                        <span class="quick-tagline  hidden ">
                                                                            Buy Now, Pay Later
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="step-footer">
                                    <form id="form_next_step" accept-charset="UTF-8" method="post">
                                        <input name="utf8" type="hidden" value="✓" />
                                        <button type="submit" class="step-footer-continue-btn btn">
                                            <span class="btn-content">Hoàn tất đơn hàng</span>
                                            <i class="btn-spinner icon icon-button-spinner"></i>
                                        </button>
                                    </form>
                                    <a class="step-footer-previous-link" href="/cart">
                                        Giỏ hàng
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="hrv-coupons-popup">
                            <div class="hrv-title-coupons-popup">
                                <p>
                                    Chọn giảm giá <span class="count-coupons"></span>
                                </p>
                                <div class="hrv-coupons-close-popup">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17.1663 2.4785L15.5213 0.833496L8.99968 7.35516L2.47801 0.833496L0.833008 2.4785L7.35468 9.00016L0.833008 15.5218L2.47801 17.1668L8.99968 10.6452L15.5213 17.1668L17.1663 15.5218L10.6447 9.00016L17.1663 2.4785Z"
                                            fill="#424242"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="hrv-content-coupons-code">
                                <h3 class="coupon_heading">Mã giảm giá của shop</h3>
                                <div class="hrv-discount-code-web"></div>
                                <div class="hrv-discount-code-external"></div>
                            </div>
                        </div>
                        <div class="hrv-coupons-popup-site-overlay"></div>
                        <div class="main-footer footer-powered-by">Powered by Haravan</div>
                    </div>
                </div>
                <div className={cx('col-md-6 col-sm-12 col-xs-12')}>
                    {cart.map((item) => (
                        <div className={cx('details cart')} key={item._id}>
                            <div
                                className={cx('img-container')}
                                style={{ backgroundImage: `url(${item.images[0]})` }}
                            />

                            <div className={cx('box-details')}>
                                <div className={cx('row')}>
                                    <h2>{item.title}</h2>
                                    <span>{item.price * item.count}.000 VND</span>
                                </div>
                                <Colors colors={item.colors} />
                                <Sizes sizes={item.sizes} />
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <div className={cx('amount')}>
                                    <button className={cx('count')} onClick={() => reduction(item._id)}>
                                        {' '}
                                        -{' '}
                                    </button>
                                    <span>{item.count}</span>
                                    <button className={cx('count')} onClick={() => increase(item._id)}>
                                        {' '}
                                        +{' '}
                                    </button>
                                </div>
                            </div>
                            <div className={cx('delete')} onClick={() => removeProduct(item._id)}>
                                X
                            </div>
                        </div>
                    ))}
                    <div className={cx('total')}>
                        <NavLink to={config.routes.payment}>Thanh toán</NavLink>
                        <h3>Total: {total}.000VND</h3>
                    </div>
                </div>
            </div>
        </>
    );
}
