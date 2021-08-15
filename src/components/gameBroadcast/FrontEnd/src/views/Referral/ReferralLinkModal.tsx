import React, { ReactElement } from 'react';
import { Modal, Typography } from 'antd';
import Spinner from '../Common/Spinner';
import { ReferralLinkModalInterface } from './ReferralInterfaces';

const { Title, Paragraph } = Typography;

function ReferralLinkModal({
  isModalOpen,
  closeModal,
  holdClose,
  isFailure = false,
  generateReferralLink,
}: ReferralLinkModalInterface): ReactElement {
  return (
    <>
      <Modal
        visible={isModalOpen}
        title="New Link"
        footer={null}
        onCancel={holdClose ? () => {} : closeModal}
        maskStyle={{ backgroundColor: '#5A4074', opacity: 0.95 }}
        data-testid="referral-link-modal-component"
        className="referral-link-modal">
        {holdClose ? (
          <Spinner />
        ) : (
          <>
            {isFailure ? (
              <Paragraph>
                Something went wrong &nbsp; Please try again or check link table
              </Paragraph>
            ) : (
              generateReferralLink !== undefined && (
                <>
                  <Title
                    level={4}
                    data-testid="referral-modal-destination-title">
                    Destination:{' '}
                    {generateReferralLink.destination
                      .split('_')
                      .join(' ')
                      .toUpperCase() || ''}
                  </Title>
                  <div className="referralLinkCover">
                    <Paragraph copyable>
                      {generateReferralLink.referralUrl || ''}
                    </Paragraph>
                  </div>
                </>
              )
            )}
          </>
        )}
      </Modal>
    </>
  );
}

export default ReferralLinkModal;
