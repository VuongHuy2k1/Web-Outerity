import styles from './product.module.scss';
import classNames from 'classnames/bind';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Product = () => {
    const cx = classNames.bind(styles);
    const [data, setData] = useState([
        {
            id: 1,
            username: 'Snow',
            img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            status: 'active',
            email: '1snow@gmail.com',
            age: 35,
        },
        {
            id: 2,
            username: 'Jamie Lannister',
            img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            email: '2snow@gmail.com',
            status: 'passive',
            age: 42,
        },
        {
            id: 3,
            username: 'Lannister',
            img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            email: '3snow@gmail.com',
            status: 'pending',
            age: 45,
        },
        {
            id: 4,
            username: 'Stark',
            img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            email: '4snow@gmail.com',
            status: 'active',
            age: 16,
        },
        {
            id: 5,
            username: 'Targaryen',
            img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            email: '5snow@gmail.com',
            status: 'passive',
            age: 22,
        },
        {
            id: 6,
            username: 'Melisandre',
            img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            email: '6snow@gmail.com',
            status: 'active',
            age: 15,
        },
        {
            id: 7,
            username: 'Clifford',
            img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            email: '7snow@gmail.com',
            status: 'passive',
            age: 44,
        },
        {
            id: 8,
            username: 'Frances',
            img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            email: '8snow@gmail.com',
            status: 'active',
            age: 36,
        },
        {
            id: 9,
            username: 'Roxie',
            img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            email: 'snow@gmail.com',
            status: 'pending',
            age: 65,
        },
        {
            id: 10,
            username: 'Roxie',
            img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            email: 'snow@gmail.com',
            status: 'active',
            age: 65,
        },
    ]);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    const userColumns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'user',
            headerName: 'User',
            width: 230,
            renderCell: (params) => {
                return (
                    <div className={cx('cellWithImg')}>
                        <img className={cx('cellImg')} src={params.row.img} alt="avatar" />
                        {params.row.username}
                    </div>
                );
            },
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 230,
        },

        {
            field: 'age',
            headerName: 'Age',
            width: 100,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 160,
            renderCell: (params) => {
                return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
            },
        },
    ];
    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className={cx('cellAction')}>
                        <Link to="/users/test" style={{ textDecoration: 'none' }}>
                            <div className={cx('viewButton')}>View</div>
                        </Link>
                        <div className={cx('deleteButton')} onClick={() => handleDelete(params.row.id)}>
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];
    return (
        <div className={cx('list')}>
            <div className={cx('listContainer')}>
                return (
                <div className={cx('datatable')}>
                    <div className={cx('datatableTitle')}>
                        Add New User
                        <Link to="/users/new" className={cx('link')}>
                            Add New
                        </Link>
                    </div>
                    <DataGrid
                        className={cx('datagrid')}
                        rows={data}
                        columns={userColumns.concat(actionColumn)}
                        pageSize={9}
                        rowsPerPageOptions={[9]}
                        checkboxSelection
                    />
                </div>
                );
            </div>
        </div>
    );
};

export default Product;
