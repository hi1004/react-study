import React from 'react';

const MyComponent = ({ name, children }) => {
  return (
    <div>
      안녕하세요. 제 이름은 {name}입니다. children 값은 {children} 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: 'defaultName',
};

export default MyComponent;
