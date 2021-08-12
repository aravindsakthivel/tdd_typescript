import { FC } from 'react';
import { ReferralRowTemplate } from './ReferralRowTemplate';
import { Table } from 'antd';
import './referralLinkTable.css';

interface ReferralLinkTableDataInterface {
  key?: string;
  urlLink: string;
  createdOn: string;
  destination: string;
  onboarded: string;
}

const ReferrralLinkTable: FC = () => {
  let referralInfoList: ReferralLinkTableDataInterface[] = [
    {
      key: '1',
      urlLink: 'https://mpl.live/mycustomcodeforamqzingoffers ',
      createdOn: '12:01pm, 12 Mar 2020',
      destination: '1 days',
      onboarded: '12',
    },
    {
      key: '2',
      urlLink: 'https://mpl.live/mycustomcodeforamqzingoffers ',
      createdOn: '12:01pm, 12 Mar 2020',
      destination: '3 days',
      onboarded: '33',
    },
    {
      key: '3',
      urlLink: 'https://mpl.live/mycustomcodeforamqzingoffers ',
      createdOn: '12:01pm, 12 Mar 2020',
      destination: '7 days',
      onboarded: '325',
    },
    {
      key: '4',
      urlLink: 'https://mpl.live/mycustomcodeforamqzingoffers ',
      createdOn: '12:01pm, 12 Mar 2020',
      destination: '8 days',
      onboarded: '5466',
    },
    {
      key: '5',
      urlLink: 'https://mpl.live/mycustomcodeforamqzingoffers ',
      createdOn: '12:01pm, 12 Mar 2020',
      destination: '7 days',
      onboarded: '325',
    },
  ];

  const columns = [
    {
      title: 'URL / Link',
      dataIndex: 'urlLink',
      key: 'urlLink',
    },
    {
      title: 'Created On',
      dataIndex: 'createdOn',
      key: 'createdOn',
    },
    {
      title: 'Destination',
      dataIndex: 'destination',
      key: 'destination',
    },
    {
      title: 'Onboarded',
      dataIndex: 'onboarded',
      key: 'onboarded',
    },
  ];
  return (
    <ReferralRowTemplate title={'History'} last={true}>
      <Table
        className="referral-link-table"
        columns={columns}
        dataSource={referralInfoList}
        style={{ backgroundColor: '#391958' }}
        pagination={referralInfoList.length > 5 ? { pageSize: 5 } : false}
      />
    </ReferralRowTemplate>
  );
};

export { ReferrralLinkTable };
