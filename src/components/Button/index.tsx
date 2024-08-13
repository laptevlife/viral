import React from 'react';
import s from './index.module.scss';
import cn from 'classnames';

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  // isOpen: boolean;
  // closeModal: () => void;
}

const Button = ({ children, className }: IButtonProps) => {
  return (
    <div className={cn(s.button, className)}>
      <div className={s.buttonContent}>{children}</div>
    </div>
  );
};

export default Button;
