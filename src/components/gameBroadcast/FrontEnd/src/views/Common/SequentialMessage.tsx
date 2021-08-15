import React from 'react';
import { message } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';
import './commomCustomClassStyle.scss';

interface MessagesInterface {
  (content: string, duration: number): void;
}

const LoadingMessage: MessagesInterface = (content, duration = 3) => {
  message.loading({
    content,
    duration,
    className: 'custom-class-loading',
    style: {
      marginTop: '2vh',
    },
  });
};

const SuccessMessage: MessagesInterface = (content, duration = 3) => {
  message.success({
    content,
    duration,
    className: 'custom-class-success',
    icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
    style: {
      marginTop: '2vh',
    },
  });
};

const ErrorMessage: MessagesInterface = (content, duration = 3) => {
  message.error({
    content,
    duration,
    className: 'custom-class-error',
    style: {
      marginTop: '2vh',
    },
  });
};

const WarningMessage: MessagesInterface = (content, duration = 3) => {
  message.warning({
    content,
    duration,
    className: 'custom-class-warning',
    style: {
      marginTop: '2vh',
    },
  });
};

export { LoadingMessage, SuccessMessage, ErrorMessage, WarningMessage };
