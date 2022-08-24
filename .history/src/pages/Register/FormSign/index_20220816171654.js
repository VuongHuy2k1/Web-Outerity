import classNames from 'classnames/bind';
import styles from '~/pages/Register/Register.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

// const cx = classNames.bind(styles);
// const FormSign = ({ icon, placeholder }) => {
//     return (
//         <>
//             <div className={cx('form-group')}>
//                 <i className={icon} />
//                 <input autofocus autocomplete="off" className={cx('form-input')} placeholder={placeholder} />
//             </div>
//         </>
//     );
// };

// export default FormSign;

import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from './context/AuthProvider';

import axios from '../api/axios';
const LOGIN_URL = '/auth';
const cx = classNames.bind(styles);
const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({ user, pwd }), {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            });
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    };

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="/">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
                        {errMsg}
                    </p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className={cx('form-group')}>
                            <label htmlFor="username">Username:</label>
                            <i className="fa-solid fa-envelope" />
                            <input
                                placeholder="Username của bạn"
                                className={cx('form-input')}
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                            />
                        </div>
                        <div className={cx('form-group')}>
                            <label htmlFor="password">Password:</label>
                            <i className="fa-solid fa-envelope" />
                            <input
                                placeholder="Password của bạn"
                                className={cx('form-input')}
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                            />
                        </div>
                        <button className={cx('form-submit')}>Đăng nhập</button>
                    </form>
                    <a href="/" className={cx('forget-password')}>
                        Quên mật khẩu?
                    </a>
                    <p>
                        Need an Account?
                        <br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="/">Sign Up</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    );
};

export default Login;
