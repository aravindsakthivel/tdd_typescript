import { FC } from 'react';
import { Spin } from 'antd';
import '../customClassStyle.css';

const Spinner: FC = () => {
  return (
    <div className="spinLoader">
      <Spin />
    </div>
  );
};

export { Spinner };
