import React, {Component} from 'react';

import './edit.css';
import Title from '../../components/title/title';
import PropTypes from 'prop-types';

class Edit extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
  };

  static defaultProps = {
    onChange: () => {},
    value: '',
  };

  render() {
    return (
      <div className="edit">
        <Title title="Edit task"/>
        <label className="edit-label">
          <input
            className="edit-input"
            type="text"
            value=""
          />
          <span className="edit-icons">
            <i className="edit-icons__item fas fa-times"/>
            <i className="edit-icons__item fas fa-check"/>
          </span>
        </label>
      </div>
    );
  }
}

export default Edit;