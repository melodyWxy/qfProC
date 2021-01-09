import { Card, List } from 'antd';
import React, { useEffect } from 'react';
import { connect } from 'umi';
import moment from 'moment';
import AvatarList from '../AvatarList';
import styles from './index.less';

const Projects = (props) => {
  const { list, dispatch } = props;
  console.log(list, '--')
  useEffect(()=>{
    console.log('didmount')
    dispatch({
      type: 'offerWall/fetch',
    });
  }, [])
  return (
    <List
      className={styles.coverCardList}
      rowKey="id"
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 4,
      }}
      dataSource={list}
      renderItem={(item) => (
        <List.Item>
          <Card className={styles.card} hoverable cover={<img alt={item.title} src={item.preViewSrc} />}>
            <Card.Meta title={<a>{item.title}</a>} description={item.description} />
            <div className={styles.cardItemContent}>
              <span>{moment(item.updatedAt).fromNow()}</span>
              <div className={styles.avatarList}>
                <AvatarList size="small">
                    <AvatarList.Item
                      size="small"
                      key={item.offerId}
                      src={item.avatar}
                      tips={item.user}
                    />
                </AvatarList>
              </div>
            </div>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default connect(({ offerWall }) => ({
  list: offerWall.list,
}))(Projects);
