import React, { ReactElement } from 'react';
import { Typography, Card } from 'antd';
import { OverviewTotalOnboardedInterface } from './ReferralInterfaces';

const { Text, Title } = Typography;

function TotalOnboarded({
  title = 'User Onboarded this month',
  onBoardCount,
}: OverviewTotalOnboardedInterface): ReactElement {
  return (
    <Card
      style={{ width: 218, height: 108, background: '#492D66', border: 0 }}
      className="referral-info-card">
      <Text
        type="secondary"
        data-testid="info-card-title"
        style={{ color: '#ffffff' }}>
        {title}
      </Text>
      <Title
        level={3}
        style={{ marginTop: '5px' }}
        data-testid="info-card-onboard-count">
        {onBoardCount}
      </Title>
    </Card>
  );
}

export default TotalOnboarded;
