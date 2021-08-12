import { FC, useState, MouseEvent } from 'react';
import { AddUserModal } from './AddUserModal';
import { Button, Row, Col, Typography } from 'antd';
import '../customClassStyle.css';

const { Title } = Typography;

const AddUser: FC = () => {
  const holdClose = false;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const isModalToggle = (event: MouseEvent<HTMLButtonElement>): void => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Row
        justify="space-between"
        className="general-background-border manage-user-page-class add-user"
      >
        <Col span={5}>
          <Title level={2} style={{ color: '#ffffff' }}>
            Manage User
          </Title>
        </Col>
        <Col span={3}>
          <Button
            key="primary"
            type="text"
            data-testid="add-user-button"
            onClick={isModalToggle}
            size="large"
            className="add-user-button-class button-common-class"
          >
            Add User
          </Button>
        </Col>
      </Row>
      <AddUserModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        data-testid="add-user-modal"
        holdClose={holdClose}
      />
    </>
  );
};

export { AddUser };
