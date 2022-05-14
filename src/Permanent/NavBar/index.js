import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './NavBar.module.scss';

import logo from '../../Component/images/logo.png';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <nav className={cx('navbar-container')}>
            <div className={cx('navbar')}>
                <Link to="starbooks-home/">
                    <img className={cx('logo')} src={logo} alt="" />
                </Link>
                <ul className={cx('navbar-list')}>
                    <li className={cx('navbar-item')}>
                        <Link className={cx('navbar-item_text')} to="/starbooks-home/">
                            TRANG CHỦ
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <a className={cx('navbar-item_text')} href={'http://google.com'}>
                            CÁC MÃ GIẢM GIÁ
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
