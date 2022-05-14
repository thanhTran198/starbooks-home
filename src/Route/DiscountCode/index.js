import { TabTitle } from '../../Component/title/index';
import { Markup } from 'interweave';
import classNames from 'classnames/bind';
import styles from './DiscountCode.module.scss';
const cx = classNames.bind(styles);

function DiscountCode() {
    TabTitle('Mã Giảm Giá');

    const code = `
    <div className={cx('container')}>
            <div id="layout-wrapper">
                <main className="atEQPOIVFSDFSDG-voucher-main">
                    <div className="container">
                        <div className="atEQPOIVFSDFSDG-search">
                            <div className="atEQPOIVFSDFSDG-filter-keyword">
                                <ul className="atEQPOIVFSDFSDG-tags"></ul>
                            </div>
                            <div className="atEQPOIVFSDFSDG-input-main-search">
                                <div className="atEQPOIVFSDFSDG-input-search">
                                    <input
                                        className="form-control"
                                        id="atEQPOIVFSDFSDG-search"
                                        placeholder="Nhập link sản phẩm, tên nhãn hàng, tên sản phẩm để tìm kiếm"
                                        type="text"
                                    />
                                    <span className="atEQPOIVFSDFSDG-search-clear">
                                        <i className="fas fa-times-circle" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <button className="atEQPOIVFSDFSDG-btn-search">
                                    <label className="atEQPOIVFSDFSDG-label-search">Tìm kiếm</label>
                                    <span className="atEQPOIVFSDFSDG-icon-search">
                                        <i className="fas fa-search"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="atEQPOIVFSDFSDG-voucher-dealhot">
                            <div className="atEQPOIVFSDFSDG-title-filter">
                                <div className="atEQPOIVFSDFSDG-title-total">
                                    <img src="https://static.accesstrade.vn/coupon/v2/images/icon-coupon.svg" alt="" />
                                    <div className="atEQPOIVFSDFSDG-dealhot-title">
                                        <h2 className="atEQPOIVFSDFSDG-title">Deal Hot</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="atEQPOIVFSDFSDG-dealitem-body"></div>
                        </div>
                        <div className="atEQPOIVFSDFSDG-voucher-dealcoupon">
                            <div className="atEQPOIVFSDFSDG-title-tabs">
                                <div className="atEQPOIVFSDFSDG-title">
                                    <span style="margin-right: 8px">
                                        <img src="https://static.accesstrade.vn/coupon/v2/images/Vector.png" />
                                    </span>
                                    <div className="atEQPOIVFSDFSDG-dealcouponlist-title">
                                        <div className="atEQPOIVFSDFSDG-list-title">
                                            <h4>DANH SÁCH COUPON</h4>
                                            <button className="atEQPOIVFSDFSDG-delete-search" style="">
                                                <span style="margin-right: 8px">
                                                    <img src="https://static.accesstrade.vn/coupon/v2/images/arrow-left.png" />
                                                </span>
                                                <span style="color: red; font-weight: bold">Hủy tìm kiếm</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="atEQPOIVFSDFSDG-title-tabslist">
                                    <ul className="nav nav-tabs" id="tabsdeal--link" role="tablist">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link active"
                                                id="history-tabs"
                                                data-toggle="tab"
                                                href="#deal-opening"
                                                style="font-weight: bold"
                                                role="tab"
                                            >
                                                Đang mở <em></em>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                id="record-tabs"
                                                data-toggle="tab"
                                                href="#deal-soon"
                                                style="font-weight: bold"
                                                role="tab"
                                            >
                                                Sắp mở <em></em>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="atEQPOIVFSDFSDG-filters-and-delete-search">
                                <div className="atEQPOIVFSDFSDG-at-filters">
                                    <div className="dropdown atEQPOIVFSDFSDG-filter-sort">
                                        <button
                                            className="dropdown-toggle"
                                            type="button"
                                            id="dropdownMenuButton"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <span>Mới nhất</span>
                                            <i className="icon-down">
                                                <img
                                                    src="https://static.accesstrade.vn/coupon/v2/images/icon-caret.svg"
                                                    alt=""
                                                />
                                            </i>
                                        </button>
                                        <div
                                            className="dropdown-menu"
                                            aria-labelledby="dropdownMenuButton"
                                            id="dropdownMenuSort"
                                        >
                                            <a className="dropdown-item" data-sort="0" href="#" style="display: none">
                                                Mới nhất
                                            </a>
                                            <a className="dropdown-item" data-sort="4" href="#">
                                                Deal hot
                                            </a>
                                            <a className="dropdown-item" data-sort="2" href="#">
                                                Dùng nhiều
                                            </a>
                                            <a className="dropdown-item" data-sort="3" href="#">
                                                Thời gian còn lại
                                            </a>
                                        </div>
                                    </div>
                                    <div className="dropdown atEQPOIVFSDFSDG-filter-sort">
                                        <button
                                            className="dropdown-toggle"
                                            type="button"
                                            id="dropdownMenuButton2"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <span>Tất cả nhà cung cấp</span>
                                            <i className="icon-down">
                                                <img
                                                    src="https://static.accesstrade.vn/coupon/v2/images/icon-caret.svg"
                                                    alt=""
                                                />
                                            </i>
                                        </button>
                                        <div
                                            className="dropdown-menu"
                                            aria-labelledby="dropdownMenuButton"
                                            id="dropdownMenuMerchant"
                                            style=""
                                        ></div>
                                    </div>
                                </div>
                                <button className="atEQPOIVFSDFSDG-delete-search">
                                    <span style="margin-right: 8px">
                                        <img src="https://static.accesstrade.vn/coupon/v2/images/arrow-left.png" />
                                    </span>
                                    <span style="color: red; font-weight: bold">Hủy tìm kiếm</span>
                                </button>
                            </div>
                            <div className="tab-content" id="tabsdeal--content">
                                <div className="tab-pane fade show active" id="deal-opening" role="tabpanel">
                                    <div id="no-coupon-link" style="display: none; text-align: center; padding: 1em">
                                        <h4>Đang cập nhật</h4>
                                    </div>
                                    <div className="atEQPOIVFSDFSDG-dealpromo-body"></div>
                                    <div className="atEQPOIVFSDFSDG-coupon-pagination">
                                        <nav>
                                            <ul className="pagination" name="pagination">
                                                <li className="page-item" style="display: none">
                                                    <a
                                                        onClick="prev(event,1)"
                                                        className="page-link"
                                                        href="#"
                                                        tabIndex="-1"
                                                    >
                                                        <i className="fas fa-angle-double-left"></i>
                                                    </a>
                                                </li>
                                                <li className="page-item" style="display: none">
                                                    <a
                                                        onClick="prev(event)"
                                                        className="page-link"
                                                        href="#"
                                                        tabIndex="-1"
                                                    >
                                                        <i className="fas fa-angle-left"></i>
                                                    </a>
                                                </li>
                                                <li className="page-item" style="display: none">
                                                    <a
                                                        onClick="prev(event)"
                                                        className="page-link"
                                                        id="prev-page-active"
                                                        href="#"
                                                    ></a>
                                                </li>
                                                <li className="page-item active">
                                                    <a className="page-link" href="#">
                                                        <span className="sr-only"></span>1
                                                    </a>
                                                </li>
                                                <li className="page-item" style="display: none">
                                                    <a
                                                        onClick="next(event)"
                                                        className="page-link"
                                                        id="next-page-active"
                                                        href="#"
                                                    ></a>
                                                </li>
                                                <li className="page-item" style="display: none">
                                                    <a
                                                        onClick="next(event)"
                                                        className="page-link"
                                                        href="#"
                                                        tabIndex="-1"
                                                    >
                                                        <i className="fas fa-angle-right"></i>
                                                    </a>
                                                </li>
                                                <li className="page-item" style="display: none">
                                                    <a className="page-link" href="#" tabIndex="-1">
                                                        <i className="fas fa-angle-double-right"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                        <div className="page-box">
                                            <span className="p-0" style="display: none">
                                                <input className="page-selected" type="text" />
                                            </span>
                                            <span className="text-muted" name="text-muted">
                                                Trên trang
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="deal-soon" role="tabpanel">
                                    <div id="no-coupon" style="display: none; text-align: center; padding: 1em">
                                        <h4>Đang cập nhật</h4>
                                    </div>
                                    <div className="atEQPOIVFSDFSDG-dealpromo-body"></div>
                                    <div className="atEQPOIVFSDFSDG-coupon-pagination">
                                        <nav>
                                            <ul className="pagination" name="pagination-soon">
                                                <li className="page-item" style="display: none">
                                                    <a
                                                        onClick="prev(event,1,true)"
                                                        className="page-link"
                                                        href="#"
                                                        tabIndex="-1"
                                                    >
                                                        <i className="fas fa-angle-double-left"></i>
                                                    </a>
                                                </li>
                                                <li className="page-item" style="display: none">
                                                    <a
                                                        onClick="prev(event,null,true)"
                                                        className="page-link"
                                                        href="#"
                                                        tabIndex="-1"
                                                    >
                                                        <i className="fas fa-angle-left"></i>
                                                    </a>
                                                </li>
                                                <li className="page-item" style="display: none">
                                                    <a
                                                        onClick="prev(event,null,true)"
                                                        className="page-link"
                                                        id="prev-soon-page-active"
                                                        href="#"
                                                    ></a>
                                                </li>
                                                <li className="page-item active">
                                                    <a className="page-link" href="#">
                                                        <span className="sr-only"></span>1
                                                    </a>
                                                </li>
                                                <li className="page-item" style="display: none">
                                                    <a
                                                        onClick="next(event,null,true)"
                                                        className="page-link"
                                                        id="next-soon-page-active"
                                                        href="#"
                                                    ></a>
                                                </li>
                                                <li className="page-item" style="display: none">
                                                    <a
                                                        onClick="next(event,null,true)"
                                                        className="page-link"
                                                        href="#"
                                                        tabIndex="-1"
                                                    >
                                                        <i className="fas fa-angle-right"></i>
                                                    </a>
                                                </li>
                                                <li className="page-item" style="display: none">
                                                    <a className="page-link" href="#" tabIndex="-1">
                                                        <i className="fas fa-angle-double-right"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                        <div className="page-box">
                                            <span className="p-0" style="display: none">
                                                <input className="page-selected" type="text" />
                                            </span>
                                            <span className="text-muted" name="text-muted-soon">
                                                Trên trang
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    `;

    return <div className={cx('container')}></div>;
}

export default DiscountCode;
