import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from '~/admin/pages/login/Login.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

const cx = classNames.bind(styles);
const FormRegister = (props) => {
    const { icon, label, errorMessage, onChange, pattern, id, value, values, ...inputProps } = props;
    const [check, setCheck] = useState();
    useEffect(() => {
        if (inputProps.name === 'password_confirm') {
            setCheck(value === inputProps.reps);
        } else {
            setCheck(pattern && new RegExp(`${pattern}`).test(value));
        }
    }, [values]);

    return (
        <>
            <div className={cx('form-group')}>
                <i className={icon} />
                <input
                    autofocus
                    autocomplete="off"
                    className={cx('form-input')}
                    {...inputProps}
                    pattern={pattern}
                    value={value}
                    onChange={(e) => {
                        onChange(e);
                    }}
                />
            </div>
            {!check && <span>{errorMessage}</span>}
        </>
    );
};

export default FormRegister;
