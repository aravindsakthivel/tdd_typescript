import { FC, ReactNode, ReactElement } from 'react';
import { Row, Col, Typography } from 'antd';
import '../customClassStyle.css';

const { Title } = Typography;

interface ReferralRowTemplateInterface {
  children?: ReactNode;
  title?: string;
  last?: boolean;
}

const ReferralRowTemplate: FC<ReferralRowTemplateInterface> = ({
  children,
  title = 'None',
  last = false,
}): ReactElement => {
  return (
    <Row
      className={`referral-row-template-class general-background-border ${
        last && 'no-border-last'
      }`}
    >
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
};

export { ReferralRowTemplate };
