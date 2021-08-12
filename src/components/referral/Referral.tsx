import { FC } from 'react';
import { Row, Typography } from 'antd';
import { CreateReferral } from './CreateReferral';
import { Overview } from './Overview';
import { ReferrralLinkTable } from './ReferrralLinkTable';
import './referral.css';

const { Title } = Typography;

const Referral: FC = () => {
  return (
    <>
      <Row className="general-background-border">
        <Title
          level={2}
          style={{ padding: '40px 0px 24px 24px', marginBottom: 0 }}
          data-testid="referral-page-title"
        >
          Referral
        </Title>
      </Row>
      <CreateReferral />
      <Overview title="User Onboarded this month" onBoardCount={324} />
      <ReferrralLinkTable />
    </>
  );
};

export { Referral };
