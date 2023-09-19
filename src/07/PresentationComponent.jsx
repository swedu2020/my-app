import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PresentationComponent extends PureComponent {
  render() {
    const { loading, userName, entity } = this.props;
    return (
      <div>
        로딩: {String(loading)},
        이름: {userName},
        선택된 항목: {entity && `name: ${entity.name}, age: ${entity.age}`}
      </div>
    );
  }
}

PresentationComponent.propTypes = {
  loading: PropTypes.bool,
  userName: PropTypes.string,
  entity: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
  })
};

export default PresentationComponent;
