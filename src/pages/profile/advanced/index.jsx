import {
  DingdingOutlined,
  DownOutlined,
  EllipsisOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import {
  Badge,
  Button,
  Card,
  Statistic,
  Descriptions,
  Dropdown,
  Menu,
  Popover,
  Steps,
} from 'antd';
import { GridContent, PageContainer, RouteContext } from '@ant-design/pro-layout';
import React, { Component, Fragment } from 'react';
import { connect } from 'umi';
import styles from './style.less';
const ButtonGroup = Button.Group;
const menu = (
  <Menu>
    <Menu.Item key="1">收藏</Menu.Item>
  </Menu>
);
const mobileMenu = (
  <Menu>
    <Menu.Item key="3">关注</Menu.Item>
    <Menu.Item key="2">下载</Menu.Item>
  </Menu>
);
const imgSrcMapList =[
  {
    key: 'preViewSrc',
    tab: '首页预览',
  },
  {
    key: 'steps',
    tab: '业务流程',
  },
  {
    key: 'functionFramework',
    tab: '功能架构',
  },
  {
    key: 'tecFramework',
    tab: '技术架构',
  },
]
const getAction = (lxh) => (
  <RouteContext.Consumer>
    {({ isMobile }) => {
      if (isMobile) {
        return (
          <Dropdown.Button
            type="primary"
            icon={<DownOutlined />}
            overlay={mobileMenu}
            placement="bottomRight"
            onClick={() => window.open(lxh.preview)}
          >
            预览
          </Dropdown.Button>
        );
      }

      return (
        <Fragment>
          <ButtonGroup>
            <Button>关注</Button>
            <Button>下载</Button>
            <Dropdown overlay={menu} placement="bottomRight">
              <Button>
                <EllipsisOutlined />
              </Button>
            </Dropdown>
          </ButtonGroup>
          <Button type="primary"  onClick={() => window.open(lxh.preview)}>预览</Button>
        </Fragment>
      );
    }}
  </RouteContext.Consumer>
);
const extra = (
  <div className={styles.moreInfo}>
    <Statistic title="STAR" value={40} />
  </div>
);
const getDescription = (des, remarks) => (
  <RouteContext.Consumer>
    {({ isMobile }) => (
      <Descriptions className={styles.headerList} size="small" column={isMobile ? 1 : 2}>
        <Descriptions.Item label="应用技术">{remarks}</Descriptions.Item>
        <Descriptions.Item label="项目简介">{des}</Descriptions.Item>
      </Descriptions>
    )}
  </RouteContext.Consumer>
);

class Advanced extends Component {
  state = {
    operationKey: 'tab1',
    tabActiveKey: 'preViewSrc',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'profileAndadvanced/fetchAdvanced',
    });
  }

  onOperationTabChange = (key) => {
    this.setState({
      operationKey: key,
    });
  };
  onTabChange = (tabActiveKey) => {
    this.setState({
      tabActiveKey,
    });
  };
  renderDetailPre = (tabActiveKey, data) => {
    if(tabActiveKey=== 'preViewSrc'){
      if(data['proType'] === 'vedio'){
        return (
          <video  width="100%" height="100%"  controls> 
            <source src={data['preview']}  type="video/mp4" />
          </video>
        )
      }
      return <iframe  className={data['proType'] === 'h5'? styles.iframeX : styles.iframeY}   src={data['preview']}/>
    }
    return <img className={styles.imgX} src={data[tabActiveKey]} />
  }

  render() {
    const { tabActiveKey } = this.state;
    const { profileAndadvanced = {} } = this.props;
    const { data = {} } = profileAndadvanced;
    const action = getAction(data);
    return (
      <PageContainer
        title={data['title']}
        extra={action}
        className={styles.pageHeader}
        content={getDescription(data['description'], data['remarks'])}
        extraContent={extra}
        tabActiveKey={tabActiveKey}
        onTabChange={this.onTabChange}
        tabList={imgSrcMapList}
      >
        <div className={styles.main}>
          <GridContent>
            <Card
              title={imgSrcMapList.find(item=>item.key===tabActiveKey)?.tab || ''}
              style={{
                marginBottom: 24,
              }}
            >
              {this.renderDetailPre(tabActiveKey, data)}
            </Card>
          </GridContent>
        </div>
      </PageContainer>
    );
  }
}

export default connect(({ profileAndadvanced, loading }) => ({
  profileAndadvanced,
  loading: loading.effects['profileAndadvanced/fetchAdvanced'],
}))(Advanced);
