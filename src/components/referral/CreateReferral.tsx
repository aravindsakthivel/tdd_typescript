import { FC, useState } from 'react';
import { Select, Button, Form } from 'antd';
import { ReferralRowTemplate } from './ReferralRowTemplate';
import { ReferralLinkModal } from './ReferralLinkModal';
import { SelectOptionInterface } from '../Interfaces/generalInterfaces';
import '../customClassStyle.css';

const { Option } = Select;

// the following interface was to test the select
interface CreateReferralTestInterface {
  destinationDefault?: 'mpl_pro' | 'mpl_qa' | 'mpl_dev';
}

const CreateReferral: FC<CreateReferralTestInterface> = ({ destinationDefault = '' }) => {
  let holdClose = false;
  let referralLink = 'www.mpl.com/mobileapp/livegame/mobileapp';
  let isFailure = false;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [destination, setDestination] = useState<string>(destinationDefault);
  let optionValues: SelectOptionInterface[] = [
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

  const onSubmit = (values: any) => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <ReferralRowTemplate title={'Create a custom link'}>
        <Form
          layout="inline"
          size={'large'}
          onFinish={onSubmit}
          data-testid="generate-link-form"
          initialValues={destinationDefault !== '' ? { destination: destinationDefault } : {}}
          className="referral-link-form"
        >
          <Form.Item
            name="destination"
            rules={[{ required: true, message: 'Please select a Destination' }]}
          >
            <Select
              style={{ width: 350, borderRadius: 10 }}
              placeholder="Select a Destination"
              onChange={onChangeDestination}
              data-testid="select-destination-option"
            >
              {optionValues.length > 0 &&
                optionValues.map(({ name, value }, ind) => (
                  <Option value={value} key={ind} className="referral-link-destination-option">
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
              data-testid="generate-link-button"
            >
              Generate Link
            </Button>
          </Form.Item>
        </Form>
      </ReferralRowTemplate>
      <ReferralLinkModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        holdClose={holdClose}
        destination={destination}
        referralLink={referralLink}
        isFailure={isFailure}
      />
    </>
  );
};

export { CreateReferral };
