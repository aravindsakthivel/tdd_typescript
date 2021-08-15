import React, { ReactElement } from 'react';
import { Modal, Form, Input, Select, Col, Row } from 'antd';
import { useMutation } from '@apollo/client';
import {
  LoadingMessage,
  SuccessMessage,
  ErrorMessage,
} from '../Common/SequentialMessage';
import {
  AddUserValuesInterface,
  GeneralModalInterface,
  SelectOptionInterface,
  ModalInputInterface,
} from './AddUserInterface';
import { ADD_USER } from '../../queries/index';

const { Option } = Select;

function ModalInput({
  visible,
  onCreate,
  onCancel,
  holdClose,
}: ModalInputInterface): ReactElement {
  const roleOptions: SelectOptionInterface[] = [
    {
      name: 'Auditor',
      value: 'AUDITOR',
    },
    {
      name: 'Employee',
      value: 'EMPLOYEE',
    },
    {
      name: 'Broadcaster',
      value: 'BROADCASTER',
    },
    {
      name: 'Admin',
      value: 'ADMIN',
    },
  ];

  const dialingCode: SelectOptionInterface[] = [
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
        {dialingCode.map(({ name, value }) => (
          <Option value={value} key={value} className="add-user-modal-select">
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
            onCreate(values)
              .then(() => {
                form.resetFields();
              })
              .catch((err) => {
                // eslint-disable-next-line no-console
                console.log(err);
              });
          })
          .catch((info) => {
            // eslint-disable-next-line no-console
            console.log('Validate Failed:', info);
          });
      }}
      centered
      okButtonProps={{
        size: 'large',
        className: 'button-common-class',
        loading: holdClose,
      }}
      cancelButtonProps={{ type: 'text' }}
      maskStyle={{ backgroundColor: '#5A4074', opacity: 0.95 }}>
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        data-testid="form-add-user"
        initialValues={{ prefix: '91' }}>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              name="fullName"
              rules={[
                {
                  required: true,
                  message: 'Please add the Full Name',
                },
              ]}>
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
              ]}>
              <Input placeholder="Email Address" size="large" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="phoneNumber"
              rules={[
                { required: true, message: 'Please add the Phone Number' },
              ]}>
              <Input
                addonBefore={prefixSelector}
                size="large"
                placeholder="Phone Number"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="role"
              rules={[{ required: true, message: 'Please select the role' }]}>
              <Select
                size="large"
                placeholder="Select a role"
                data-testid="select-role">
                {roleOptions.map(({ name, value }) => (
                  <Option
                    value={value}
                    key={value}
                    className="add-user-modal-select">
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
}

function AddUserModal({
  isModalOpen,
  closeModal,
}: GeneralModalInterface): ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [addUser, { data, loading, error }] = useMutation(ADD_USER, {
    notifyOnNetworkStatusChange: true,
  });

  const onCreate = (values: AddUserValuesInterface) => {
    // eslint-disable-next-line no-console
    console.log('Received values of form: ', values);

    LoadingMessage(`${values.fullName} was getting added`, 1);

    return new Promise((resolve, reject) => {
      addUser({
        variables: {
          addUserData: {
            requestedBy: 'aravind',
            role: values.role,
            fullName: values.fullName,
            mobileNumber: `${values.prefix}-${values.phoneNumber}`,
            emailId: values.emailAddress,
          },
        },
      })
        .then((res) => {
          SuccessMessage(`${values.fullName} added to the user list`, 3);
          resolve({ name: values.fullName, res });
        })
        .catch((err) => {
          ErrorMessage(`Something went wrong try againg later`, 3);
          reject(err);
        });
    });
  };

  return (
    <div>
      <ModalInput
        visible={isModalOpen}
        onCreate={onCreate}
        data-testid="add-user-modal"
        onCancel={loading ? () => {} : closeModal}
        holdClose={loading}
      />
    </div>
  );
}

export default AddUserModal;
