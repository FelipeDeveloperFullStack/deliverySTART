import React from 'react';

interface IProps {
  classNameTextButton: string,
  classNameButton: string,
  nameButton: string,
  icon: any,
  styleIcon?: any
}

const Button: React.FC<IProps> = (props: IProps) => {
  return (
    <>
      <button type='button' className={props.classNameButton} style={{ width: '200px' }}>
        <div style={props.styleIcon}>{props.icon}</div>
        <div className={props.classNameTextButton} style={{ paddingTop: '4px' }}>{props.nameButton}</div>
        <div></div>
      </button>
    </>
  )
}

export default Button;