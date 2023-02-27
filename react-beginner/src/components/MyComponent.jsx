import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, children, favoriteNumber }) => {
  return (
    <div>
      안녕하세요. 제 이름은 {name}입니다. children 값은 {children} 입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber} 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: 'defaultName',
};
MyComponent.propTypes = {
  name: PropTypes.string, // string 타입 지정
  favoriteNumber: PropTypes.number.isRequired, // favoriteNumber propTypes 필수 설정
};

export default MyComponent;
