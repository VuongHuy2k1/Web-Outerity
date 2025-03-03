import classNames from 'classnames/bind';
import styles from './New.module.scss';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NewUser = () => {
    const cx = classNames.bind(styles);
    const [file, setFile] = useState('');
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        address: '',
    });

    const userInputs = [
        {
            id: 1,
            name: 'name',

            label: 'Username',
            type: 'text',
            placeholder: 'john_doe',
        },
        {
            id: 3,
            name: 'email',

            label: 'Email',
            type: 'mail',
            placeholder: 'john_doe@gmail.com',
        },
        {
            id: 4,
            name: 'phone',

            label: 'Phone',
            type: 'text',
            placeholder: '+1 234 567 89',
        },
        {
            id: 5,
            name: 'password',

            label: 'Password',
            type: 'password',
        },
        {
            id: 6,
            name: 'address',

            label: 'Address',
            type: 'text',
            placeholder: 'Elton St. 216 NewYork',
        },
    ];
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.warn(setValues);
    };
    return (
        <div className={cx('new')}>
            <div className={cx('newContainer')}>
                <div className={cx('top')}>
                    <h1>Thêm thành viên</h1>
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('left')}>
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                            }
                            alt=""
                        />
                    </div>
                    <div className={cx('right')}>
                        <form>
                            <div className={cx('formInput')}>
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlinedIcon className={cx('icon')} />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: 'none' }}
                                />
                            </div>

                            {userInputs.map((input) => (
                                <div className={cx('formInput')} key={input.id}>
                                    <label>{input.label}</label>
                                    <input
                                        type={input.type}
                                        placeholder={input.placeholder}
                                        onChange={onChange}
                                        values={values}
                                        value={values[input.name]}
                                    />
                                </div>
                            ))}
                            <Link to="/users" className={cx('link')}>
                                <button>Send</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewUser;
