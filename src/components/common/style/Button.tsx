import * as React from 'react';

interface IButtonProps extends React.Props<any> {
  variant: "primary" | "secondary";
}

export function Button({variant, children, ...props}: IButtonProps){
  return (
    <button type="button" className={`btn btn-${variant}`} {...props}>
      {children}
    </button>
  )
};

export default Button;
