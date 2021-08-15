import React, { FC, ReactElement } from 'react';
import { useQuery } from '@apollo/client';
import { Row, Typography } from 'antd';
import { GET_REFERRAL_PAGE_DETAILS } from '../../queries';
import Spinner from '../Common/Spinner';
import Overview from './Overview';
import ReferrralLinkTable from './ReferralLinkTable';
import CreateReferral from './CreateReferral';
import {
  ReferralLinkDetailsInterface,
  ReferralpageDetailsInterface,
} from './ReferralInterfaces';
import './referral.scss';

const { Title } = Typography;

function ReferralPageDetails({
  userId,
  offset,
  count,
}: ReferralpageDetailsInterface): ReactElement | null {
  const { loading, error, data, networkStatus } = useQuery(
    GET_REFERRAL_PAGE_DETAILS,
    {
      variables: { getReferralLinksData: { userId, offset, count } },
      notifyOnNetworkStatusChange: true,
    },
  );

  if (networkStatus === 4) return <p>Re-fetching!</p>;
  if (loading) return <Spinner />;
  if (error) return <div>`Error!: ${JSON.stringify(error)}`</div>;
  const {
    getReferralLinks: { referralLinkDetails },
  } = data;

  let onBoardCount = 0;
  const referralLinks: ReferralLinkDetailsInterface[] = [];

  referralLinkDetails.forEach(
    (referrals: ReferralLinkDetailsInterface, ind: number) => {
      onBoardCount += Number(referrals.onBoarded);
      referralLinks.push({ ...referrals, key: ind });
    },
  );

  return (
    <>
      <CreateReferral />
      <Overview title="User Onboarded this month" onBoardCount={onBoardCount} />
      <ReferrralLinkTable referralLinkDetails={referralLinks} />
    </>
  );
}

const Referral: FC = () => {
  return (
    <>
      <Row className="general-background-border">
        <Title
          level={2}
          style={{ padding: '40px 0px 24px 24px', marginBottom: 0 }}
          data-testid="referral-page-title">
          Referral
        </Title>
      </Row>
      <ReferralPageDetails userId="sdfdsg" offset={0} count={0} />
    </>
  );
};

export default Referral;
