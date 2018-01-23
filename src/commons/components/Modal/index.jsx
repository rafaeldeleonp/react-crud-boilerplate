import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal';
import './style.scss';

class MyModal extends React.Component {
  onClose = () => {
    this.props.onHide();
  }

  render() {
    const {
      className, show, title, children, footer,
    } = this.props;

    return (
      <Modal
        dialogClassName={`modal-dialog ${className}`}
        show={show}
        onHide={this.onClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {children}
        </Modal.Body>

        <Modal.Footer>
          {footer}
        </Modal.Footer>
      </Modal>
    );
  }
}

MyModal.propTypes = {
  className: PropTypes.string,
  show: PropTypes.bool,
  title: PropTypes.string,
  footer: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  onHide: PropTypes.func,
};

MyModal.defaultProps = {
  className: '',
  show: false,
  title: 'Modal Title',
  onHide: () => {},
};

export default MyModal;
