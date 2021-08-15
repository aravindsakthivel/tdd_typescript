import React, { ReactElement } from 'react';
import { Row, Col, Typography } from 'antd';
import { ReferralRowTemplateInterface } from './ReferralInterfaces';

const { Title } = Typography;

function ReferralRowTemplate({
  children,
  title = 'None',
  last = false,
}: ReferralRowTemplateInterface): ReactElement {
  return (
    <Row
      className={`referral-row-template-class general-background-border ${
        last && 'no-border-last'
      }`}>
      <Col span={24}>
        <Title level={5} data-testid="referral-row-title">
          {title}
        </Title>
      </Col>
      <Col span={23} data-testid="referral-row-children">
        {children}
      </Col>
    </Row>
  );
}

export default ReferralRowTemplate;
