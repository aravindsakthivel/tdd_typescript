import { FC } from 'react';
import { ReferralRowTemplate } from './ReferralRowTemplate';
import { InfoCard } from '../InfoCard';
import { OverviewInfoCardInterface } from '../Interfaces/overviewInfoCardInterface';

const Overview: FC<OverviewInfoCardInterface> = ({
  title = 'User Onboarded this month',
  onBoardCount = 324,
}) => {
  return (
    <ReferralRowTemplate title={'Overview'}>
      <InfoCard title={title} onBoardCount={onBoardCount} />
    </ReferralRowTemplate>
  );
};

export { Overview };
