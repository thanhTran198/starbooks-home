import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import classNames from 'classnames/bind';
import styles from './star.module.scss';

const cx = classNames.bind(styles);

function Star({ numberStar }) {
    return (
        <div className={cx('container-star')}>
            {numberStar === 1 ? (
                <span className={cx('star')}>
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </span>
            ) : (
                ''
            )}
            {numberStar === 2 ? (
                <span className={cx('star')}>
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </span>
            ) : (
                ''
            )}
            {numberStar === 3 ? (
                <span className={cx('star')}>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </span>
            ) : (
                ''
            )}
            {numberStar === 4 ? (
                <span className={cx('star')}>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                </span>
            ) : (
                ''
            )}
            {numberStar === 5 ? (
                <span className={cx('star')}>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </span>
            ) : (
                ''
            )}

            <p className={cx('number-star')}>({numberStar})</p>
        </div>
    );
}

export default Star;
