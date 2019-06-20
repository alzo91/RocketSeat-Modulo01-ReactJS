import React from 'react';

const NewInput = props => (
  <input style={{ marginTop: '5px' }} placeholder={props.name} id={props.name} id={props.name} />
);

NewInput.defaultProps = {
  name: 'myId',
};

export default NewInput;
