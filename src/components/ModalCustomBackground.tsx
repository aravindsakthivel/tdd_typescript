import { ReactNode, FC, ReactElement } from 'react';
import './customClassStyle.css';

interface ModalCustomBackgroundInterface {
  children: ReactNode;
}

const ModalCustomBackground: FC<ModalCustomBackgroundInterface> = ({ children }): ReactElement => {
  return <div className="modal-custom-background-class">{children}</div>;
};

export { ModalCustomBackground };
