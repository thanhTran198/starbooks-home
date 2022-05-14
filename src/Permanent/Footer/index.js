import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div>
            <h1 className={cx('footer')}>FOOTER</h1>
        </div>
    );
}

export default Footer;
