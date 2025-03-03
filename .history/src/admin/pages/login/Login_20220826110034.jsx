import { useState } from 'react';
import classNames from 'classnames/bind';

import FormRegister from '~/admin/pages/login/FormRegister';
import FormSign from '~/admin/pages/login/FormSign';
import styles from '~/admin/pages/login/Login.module.scss';
import TabTitle from '~/Components/config/TabTitle';
const cx = classNames.bind(styles);
const Login = () => {
    TabTitle('Login');

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        password_confirm: '',
    });

    const inputs = [
        {
            id: 1,
            name: 'name',
            type: 'text',
            placeholder: 'Username',
            errorMessage: 'Username should be 3-16 characters ',
            label: 'Username',
            pattern: '^[[A-Z]|[a-z]][[A-Z]|[a-z]|\\d|[_]]{7,29}$',
            required: true,
            icon: 'fa-solid fa-user',
        },

        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            errorMessage: 'It should be a valid email address!',
            label: 'Email',
            pattern: '[a-z0-9]+@[a-z]+.[a-z]{2,3}',
            required: true,
            icon: 'fa-solid fa-envelope',
        },
        {
            id: 3,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            errorMessage: 'Mật khẩu phải bao gồm ký tự in hoa, in thường, chữ số và ký tự đặc biệt',
            label: 'Password',
            pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,20}$`,
            required: true,
            icon: 'fa-solid fa-lock',
        },
        {
            id: 4,
            name: 'password_confirm',
            type: 'password',
            placeholder: 'Confirm Password',
            errorMessage: "Passwords don't match!",
            label: 'Confirm Password',
            reps: values.password,
            required: true,
            icon: 'fa-solid fa-lock',
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div class={cx('container')}>
            <FormSign />
            <form onSubmit={handleSubmit} className={cx('form-Login')} autoComplete="off">
                <h3 className={cx('form-heading')}>ĐĂNG KÝ THÀNH VIÊN MỚI </h3>
                {inputs.map((input) => (
                    <FormRegister
                        key={input.id}
                        {...input}
                        values={values}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}

                <button className={cx('form-submit')}>Đăng ký</button>
            </form>
        </div>
    );
};

export default Login;
