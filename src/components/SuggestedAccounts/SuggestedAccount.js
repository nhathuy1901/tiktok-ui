import classNames from 'classnames/bind';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './SuggestedAccount.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

const SuggestedAccount = ({ label, data = [], onSeeMore }) => {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {data.map((account, index) => (
                <AccountItem key={account.id} data={account} />
            ))}

            <p className={cx('more-btn')} onClick={onSeeMore}>
                Xem tất cả
            </p>
        </div>
    );
};

SuggestedAccount.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SuggestedAccount;
