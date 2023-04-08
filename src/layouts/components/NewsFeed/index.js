import classNames from 'classnames/bind';

import styles from './NewsFeed.module.scss';
import FeedItem from './FeedItem/FeedItem';
import CornerActions from '../CornerActions';

const cx = classNames.bind(styles);

function NewsFeed() {
    return (
        <div className={cx('wrapper')}>
            <FeedItem postId={1} />
            <FeedItem postId={2} />
            <FeedItem postId={3} />
            <FeedItem postId={4} />
            <CornerActions />
        </div>
    );
}

export default NewsFeed;
