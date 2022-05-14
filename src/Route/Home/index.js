import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Star from '../../Component/Star/index';
import { TabTitle } from '../../Component/title/index';

const cx = classNames.bind(styles);

function Home() {
    TabTitle('những cuốn sách hay nên đọc');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://thanhtran198.github.io/API-ListProduct-Books.github.io/product.json')
            .then((res) => res.json())
            .then((books) => {
                setBooks(books.productsBooks);
            });
    }, []);

    return (
        <ul className={cx('container')}>
            {books.map((books, index) => {
                return (
                    <li className={cx('books-item')} key={index}>
                        <div className={cx('img-product_container')}>
                            <img className={cx('img-product')} src={books.image} alt={books.name} />
                        </div>
                        <div className={cx('content-pruduct')}>
                            <h4 className={cx('name-pruduct')}>{books.name}</h4>

                            <div className={cx('number-star')}>
                                <Star numberStar={books.star} />
                            </div>
                            <div className={cx('btn-link')}>
                                <a
                                    className={cx('link-shopee')}
                                    href={books.linkShopee}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Đến trang sản phẩm
                                </a>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default Home;
