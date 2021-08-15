import React, { FC } from 'react';
import { Spin } from 'antd';
import './commomCustomClassStyle.scss';

const Spinner: FC = () => {
  return (
    <div className="spinLoader">
      <Spin />
    </div>
  );
};

export default Spinner;
