import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      this.props.onImageClick('');
    }
  };

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onImageClick('');
    }
  };

  render() {
    console.log(this.props.largeImgUrl);
    return (
      <div className={css.Overlay} onClick={this.handleBackdrop}>
        <div className={css.Modal}>
          <img src={this.props.largeImgUrl} alt="Large" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onImageClick: PropTypes.func.isRequired,
  largeImgUrl: PropTypes.shape({
    largeImgUrl: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};