import React, { useState, ReactElement } from 'react';
import { useMutation } from '@apollo/client';
import { Select, Button, Form } from 'antd';
import ReferralRowTemplate from './ReferralRowTemplate';
import ReferralLinkModal from './ReferralLinkModal';
import { SuccessMessage, ErrorMessage } from '../Common/SequentialMessage';
import { GENERATE_REFERRAL_LINK } from '../../queries';
import {
  SelectOptionInterface,
  DestinationInterface,
} from './ReferralInterfaces';

const { Option } = Select;

function CreateReferral({
  destination: destinationTest = '',
}: DestinationInterface): ReactElement {
  const [generateReferrals, { data, loading, error }] = useMutation(
    GENERATE_REFERRAL_LINK,
    {
      notifyOnNetworkStatusChange: true,
    },
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [destination, setDestination] = useState<string>(destinationTest);
  // currently no destination info present using general values
  const optionValues: SelectOptionInterface[] = [
    {
      name: 'MPL PRO',
      value: 'mpl_pro',
    },
    {
      name: 'MPL QA',
      value: 'mpl_qa',
    },
    {
      name: 'MPL DEV',
      value: 'mpl_dev',
    },
  ];

  const onChangeDestination = (option: string) => {
    setDestination(option);
  };

  const onSubmit = () => {
    generateReferrals({
      variables: {
        generateReferralLinkData: { userId: 'skdfjlksj589', destination },
      },
    })
      .then(() => {
        SuccessMessage('Referral Link Generated Successfully', 3);
      })
      .catch(() => {
        ErrorMessage('Something went wrong try again', 3);
      });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <ReferralRowTemplate title="Create a custom link" last={false}>
        <Form
          layout="inline"
          size="large"
          onFinish={onSubmit}
          data-testid="generate-link-form"
          initialValues={
            destinationTest !== '' ? { destination: destinationTest } : {}
          }
          className="referral-link-form">
          <Form.Item
            name="destination"
            rules={[
              { required: true, message: 'Please select a Destination' },
            ]}>
            <Select
              style={{ width: 350, borderRadius: 10 }}
              placeholder="Select a Destination"
              onChange={onChangeDestination}
              data-testid="select-destination-option">
              {optionValues.length > 0 &&
                optionValues.map(({ name, value }, ind) => (
                  <Option
                    value={value}
                    // eslint-disable-next-line react/no-array-index-key
                    key={ind}
                    className="referral-link-destination-option">
                    {name}
                  </Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="button-common-class generate-link-button"
              data-testid="generate-link-button">
              Generate Link
            </Button>
          </Form.Item>
        </Form>
      </ReferralRowTemplate>
      {isModalOpen && (
        <ReferralLinkModal
          isModalOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          holdClose={!!loading}
          isFailure={!(error === undefined)}
          generateReferralLink={
            data !== undefined ? data.generateReferralLink : undefined
          }
        />
      )}
    </>
  );
}

export default CreateReferral;
