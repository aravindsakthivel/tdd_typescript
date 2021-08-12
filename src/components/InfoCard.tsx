import { FC } from 'react';
import { Typography, Card } from 'antd';
import { OverviewInfoCardInterface } from './Interfaces/overviewInfoCardInterface';
import './infoCard.css';
const { Text, Title } = Typography;

const InfoCard: FC<OverviewInfoCardInterface> = ({
  title = 'User Onboarded this month',
  onBoardCount,
}) => {
  return (
    <Card style={{ width: 218, height: 108, background: '#492D66', border: 0 }} className="referral-info-card">
      <Text type="secondary" data-testid="info-card-title" style={{color: '#ffffff'}}>
        {title}
      </Text>
      <Title level={3} style={{ marginTop: '5px' }} data-testid="info-card-onboard-count">
        {onBoardCount}
      </Title>
    </Card>
  );
};

export { InfoCard };
