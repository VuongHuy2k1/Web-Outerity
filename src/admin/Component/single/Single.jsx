import styles from './Single.module.scss';
import classNames from 'classnames/bind';
// import Chart from '../../components/chart/Chart';
import List from '../table/Table';
function Single() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('single')}>
            <div className={cx('singleContainer')}>
                <div className={cx('top')}>
                    <div className={cx('left')}>
                        <div className={cx('editButton')}>Edit</div>
                        <h1 className={cx('title')}>Information</h1>
                        <div className={cx('item')}>
                            <img
                                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                                className={cx('itemImg')}
                            />
                            <div className={cx('details')}>
                                <h1 className={cx('itemTitle')}>Jane Doe</h1>
                                <div className={cx('detailItem')}>
                                    <span className={cx('itemKey')}>Email:</span>
                                    <span className={cx('itemValue')}>janedoe@gmail.com</span>
                                </div>
                                <div className={cx('detailItem')}>
                                    <span className={cx('itemKey')}>Phone:</span>
                                    <span className={cx('itemValue')}>+1 2345 67 89</span>
                                </div>
                                <div className={cx('detailItem')}>
                                    <span className={cx('itemKey')}>Address:</span>
                                    <span className={cx('itemValue')}>Elton St. 234 Garden Yd. NewYork</span>
                                </div>
                                <div className={cx('detailItem')}>
                                    <span className={cx('itemKey')}>Country:</span>
                                    <span className={cx('itemValue')}>USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className={cx('right')}>
                        <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
                    </div> */}
                </div>
                <div className={cx('bottom')}>
                    <h1 className={cx('title')}>Last Transactions</h1>
                    <List />
                </div>
            </div>
        </div>
    );
}

export default Single;
