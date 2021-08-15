import React, { useState, ReactElement } from 'react';
import { Button, Row, Typography } from 'antd';
import AddUserModal from './AddUserModal';
import './addUserStyle.scss';

const { Title } = Typography;

function AddUser(): ReactElement {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const isModalToggle = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Row
        justify="space-between"
        className="general-background-border manage-user-page-class add-user">
        <Title level={2} style={{ color: '#ffffff' }}>
          Manage User
        </Title>
        <Button
          key="primary"
          type="text"
          data-testid="add-user-button"
          onClick={isModalToggle}
          size="large"
          className="add-user-button-class button-common-class">
          Add User
        </Button>
      </Row>
      <AddUserModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        data-testid="add-user-modal"
      />
    </>
  );
}

export default AddUser;
