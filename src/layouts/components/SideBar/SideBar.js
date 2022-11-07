import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import config from '~/config';
import Menu, { MenuItem } from './Menu';
import SuggestedAccount from '~/components/SuggestedAccounts';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import * as userServices from '~/services/userServices';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;
const SideBar = () => {
    const [page, setPage] = useState(INIT_PAGE);
    const [suggestUsers, setSuggestUsers] = useState([]);

    useEffect(() => {
        userServices
            .getSuggest({ page: page, perPage: PER_PAGE })
            .then((data) => setSuggestUsers((prevUsers) => [...prevUsers, ...data]))
            .catch((error) => console.log(error));
    }, [page]);

    const handleSeeMore = () => {
        setPage(page + 1);
    };

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem to={config.routes.home} title="For You" icon={<HomeIcon />} iconActive={<HomeActiveIcon />} />
                <MenuItem
                    to={config.routes.following}
                    title="Following"
                    icon={<UserGroupIcon />}
                    iconActive={<UserGroupActiveIcon />}
                />
                <MenuItem to={config.routes.live} title="Live" icon={<LiveIcon />} iconActive={<LiveActiveIcon />} />
            </Menu>

            <SuggestedAccount label="Tài khoản đang được đề xuất" data={suggestUsers} onSeeMore={handleSeeMore} />
        </aside>
    );
};

export default SideBar;
