import { FC } from 'react';
import { GeneralModalInterface, SelectOptionInterface } from '../Interfaces/generalInterfaces';
import '../customClassStyle.css';
import './addUserModal.css';
import { Modal, Form, Input, Select, Col, Row } from 'antd';
const { Option } = Select;

interface Values {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  role: 'auditor' | 'employee';
}

interface ModalInputInterface {
  visible: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
  holdClose: boolean;
}

const ModalInput: FC<ModalInputInterface> = ({ visible, onCreate, onCancel, holdClose }) => {
  let roleOptions: SelectOptionInterface[] = [
    {
      name: 'Auditor',
      value: 'auditor',
    },
    {
      name: 'Employee',
      value: 'employee',
    },
  ];

  let dialingCode: SelectOptionInterface[] = [
    {
      name: '+91',
      value: '91',
    },
    {
      name: '+62',
      value: '62',
    },
    {
      name: '+1',
      value: '1',
    },
  ];
  const [form] = Form.useForm();
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }} className="add-user-modal-prefix">
        {dialingCode.map(({ name, value }, ind) => (
          <Option value={value} key={ind} className="add-user-modal-select">
            {name}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
  return (
    <Modal
      visible={visible}
      title="Add User"
      okText="Invite User"
      cancelText="Cancel"
      onCancel={onCancel}
      className="add-user-modal"
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
      centered
      okButtonProps={{ size: 'large', className: 'button-common-class', loading: holdClose }}
      cancelButtonProps={{ type: 'text' }}
      maskStyle={{ backgroundColor: '#5A4074', opacity: 0.95 }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        data-testid="form-add-user"
        initialValues={{ prefix: '91' }}
      >
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              name="fullname"
              rules={[
                {
                  required: true,
                  message: 'Please add the Full Name',
                },
              ]}
            >
              <Input placeholder="Full Name" size="large" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="emailAddress"
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'Please add the Email',
                },
              ]}
            >
              <Input placeholder="Email Address" size="large" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="phoneNumber"
              rules={[{ required: true, message: 'Please add the Phone Number' }]}
            >
              <Input addonBefore={prefixSelector} size="large" placeholder="Phone Number" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="role" rules={[{ required: true, message: 'Please select the role' }]}>
              <Select size="large" placeholder="Select a role" data-testid="select-role">
                {roleOptions.map(({ name, value }, ind) => (
                  <Option value={value} key={ind} className="add-user-modal-select">
                    {name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

const AddUserModal: FC<GeneralModalInterface> = ({
  isModalOpen,
  closeModal,
  holdClose = false,
}) => {
  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div>
      <ModalInput
        visible={isModalOpen}
        onCreate={onCreate}
        data-testid="add-user-modal"
        onCancel={holdClose ? () => {} : closeModal}
        holdClose={holdClose}
      />
    </div>
  );
};

export { AddUserModal };
