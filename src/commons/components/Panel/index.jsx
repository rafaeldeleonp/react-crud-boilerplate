import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import BPanel from 'react-bootstrap/lib/Panel';
import Tab from 'react-bootstrap/lib/Tab';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import './style.scss';

class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      key: 1,
    };
  }

  getHeader = () => {
    const { header, actions } = this.props;

    return (
      <div>
        {header}
        <div className="panel-heading-actions">
          {actions}
        </div>
      </div>
    );
  }

  getTabs = () => {
    const { tabs } = this.props;
    return (
      <Tab.Container
        id="tabs-container"
        className="panel-tab-container"
        activeKey={this.state.key}
        onSelect={this.handleSelect}
      >
        <Row>
          <Col className="panel-tab-column" sm={12}>
            <Nav bsStyle="tabs">
              {tabs.map((tab, index) => (
                <NavItem key={index} eventKey={index + 1}>
                  {tab.icon}
                </NavItem>
              ))}
            </Nav>
          </Col>
          <Col className="panel-tab-content-column" sm={12}>
            <Tab.Content>
              {tabs.map((tab, index) => (
                <Tab.Pane key={index} eventKey={index + 1}>
                  {tab.body}
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }

  handleSelect = (key) => {
    this.setState({ key });
  }

  render() {
    const {
      className, tabs, children, grid,
    } = this.props;
    const cls = classnames({
      panel: true,
      [className]: Boolean(className),
      grid,
    });
    const hasTabs = tabs.length > 0;

    return (
      <BPanel
        className={cls}
        header={!hasTabs ? this.getHeader() : null}
        footer={null}
      >
        {hasTabs && this.getTabs()}
        {!hasTabs && children}
      </BPanel>
    );
  }
}

Panel.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  actions: PropTypes.arrayOf(PropTypes.element),
  tabs: PropTypes.arrayOf(PropTypes.object),
  grid: PropTypes.bool,
};

Panel.defaultProps = {
  className: null,
  header: null,
  actions: [],
  tabs: [],
  grid: false,
};

export default Panel;
