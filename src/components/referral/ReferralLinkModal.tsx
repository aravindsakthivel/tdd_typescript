import { FC } from 'react';
import { GeneralModalInterface } from '../Interfaces/generalInterfaces';
import { Modal, Typography } from 'antd';
import { MehOutlined } from '@ant-design/icons';
import { Spinner } from './Spinner';

const { Title, Paragraph } = Typography;

interface ReferralLinkModalInterface extends GeneralModalInterface {
  destination: string;
  referralLink: string;
  isFailure: boolean;
}

const ReferralLinkModal: FC<ReferralLinkModalInterface> = ({
  isModalOpen,
  closeModal,
  holdClose = false,
  destination = 'MPL Mobile App',
  referralLink = 'www.mpl.com/mobileapp/livegame/mobileapp',
  isFailure = false,
}) => {
  destination = destination.split('_').join(' ').toUpperCase();
  return (
    <>
      <Modal
        visible={isModalOpen}
        title={'New Link'}
        footer={null}
        onCancel={holdClose ? () => {} : closeModal}
        maskStyle={{ backgroundColor: '#5A4074', opacity: 0.95 }}
        data-testid="referral-link-modal-component"
        className="referral-link-modal"
      >
        {holdClose ? (
          <Spinner />
        ) : (
          <>
            <Title level={4} data-testid="referral-modal-destination-title">
              Destination: {destination}
            </Title>
            {isFailure ? (
              <Paragraph>Something went wrong &nbsp; {<MehOutlined />}</Paragraph>
            ) : (
              <div className="referralLinkCover">
                <Paragraph copyable>{referralLink}</Paragraph>
              </div>
            )}
          </>
        )}
      </Modal>
    </>
  );
};

export { ReferralLinkModal };
