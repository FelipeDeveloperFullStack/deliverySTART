import React from 'react';
/** Types */
import IPropsButtonCustom from './Types/IPropsButtonCustom'


const Button: React.FC<IPropsButtonCustom> = (props: IPropsButtonCustom) => {
  return (
    <>
      <button type='button' className={props.classNameButton} style={{ width: '200px' }} onClick={props.onClick}>
        <div style={props.styleIcon}>{props.icon}</div>
        <div className={props.classNameTextButton} style={{ paddingTop: '4px' }}>{props.nameButton}</div>
        <div></div>
      </button>
    </>
  )
}

export default Button;