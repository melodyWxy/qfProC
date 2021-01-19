import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, List, Table, Typography } from 'antd';
import React, { Component } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { connect, Link } from 'umi';
import getLocationSearch from './../lib/getLocationSearch';
import getTypeId from './../lib/getTypeIdBySeach';
import styles from './style.less';
const { Paragraph } = Typography;

class CardList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const typeId = getTypeId();
    dispatch({
      type: 'listAndcardList/fetch',
      payload: {
        typeId,
      },
    });
  }

  render() {
    const {
      listAndcardList: { list },
      loading,
    } = this.props;

    const content = (
      <div className={styles.pageHeaderContent}>
        <p>
          前端项目集锦。
        </p>

      </div>
    );
    const extraContent = (
      <div className={styles.contentLink}>
        <Link to={`/table-list${getLocationSearch()}`}>切换表格列表模式</Link>
      </div>
    );
    // const nullData = {};
    return (
      <PageContainer content={content} extraContent={extraContent}>
        <div className={styles.cardList}>
          <List
            rowKey="id"
            loading={loading}
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 3,
              xl: 4,
              xxl: 4,
            }}
            dataSource={[...list]}
            renderItem={(item) => {
              if (item && item._id) {
                return (
                  <List.Item key={item._id}>
                    <Card
                      hoverable
                      className={styles.card}
                      actions={[<Link to={`/profile/advanced?typeId=${item.typeId}&proId=${item.proId}`} key="option1">项目详情</Link>, <a key="option2" target="_blank" href={item.preview}>项目预览</a>]}
                    >
                      <Card.Meta
                        onClick={()=>this.props.history.push(`/profile/advanced?typeId=${item.typeId}&proId=${item.proId}`)}
                        avatar={<img alt="" className={styles.cardAvatar} src={item.avatar} />}
                        title={<a>{item.title}</a>}
                        description={
                          <Paragraph
                            className={styles.item}
                            ellipsis={{
                              rows: 3,
                            }}
                          >
                            {item.description}
                          </Paragraph>
                        }
                      />
                    </Card>
                  </List.Item>
                );
              }

              return (
                <List.Item>
                  <Button type="dashed" className={styles.newButton}>
                    <PlusOutlined /> 新增产品
                  </Button>
                </List.Item>
              );
            }}
          />
        </div>
      </PageContainer>
    );
  }
}

export default connect(({ listAndcardList, loading }) => ({
  listAndcardList,
  loading: loading.models.listAndcardList,
}))(CardList);
