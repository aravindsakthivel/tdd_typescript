import React, { ReactElement } from 'react';
import ReferralRowTemplate from './ReferralRowTemplate';
import TotalOnboarded from './TotalOnboarded';
import { OverviewTotalOnboardedInterface } from './ReferralInterfaces';

function Overview({
  title = 'User Onboarded this month',
  onBoardCount = 324,
}: OverviewTotalOnboardedInterface): ReactElement {
  return (
    <ReferralRowTemplate title="Overview" last={false}>
      <TotalOnboarded title={title} onBoardCount={onBoardCount} />
    </ReferralRowTemplate>
  );
}

export default Overview;
