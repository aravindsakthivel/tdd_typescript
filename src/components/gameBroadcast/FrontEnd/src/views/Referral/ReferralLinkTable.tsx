import React, { ReactElement } from 'react';
import { Table } from 'antd';
import moment from 'moment';
import ReferralRowTemplate from './ReferralRowTemplate';
import { ReferralLinkInterface } from './ReferralInterfaces';

function ReferrralLinkTable({
  referralLinkDetails,
}: ReferralLinkInterface): ReactElement {
  const columns = [
    {
      title: 'URL / Link',
      dataIndex: 'link',
      key: 'link',
    },
    {
      title: 'Created On',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (timeStamp: string) => {
        return (
          <span>
            {moment(parseInt(timeStamp, 10)).format('hh:mm A, DD MMM YYYY')}
          </span>
        );
      },
    },
    {
      title: 'Destination',
      dataIndex: 'destination',
      key: 'destination',
    },
    {
      title: 'Onboarded',
      dataIndex: 'onBoarded',
      key: 'onBoarded',
    },
  ];
  return (
    <ReferralRowTemplate title="History" last>
      <Table
        className="referral-link-table"
        columns={columns}
        dataSource={referralLinkDetails}
        style={{ backgroundColor: '#391958' }}
        pagination={referralLinkDetails.length > 5 ? { pageSize: 5 } : false}
      />
    </ReferralRowTemplate>
  );
}

export default ReferrralLinkTable;
