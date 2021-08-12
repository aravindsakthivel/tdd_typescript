import ReactDOM from 'react-dom';
import { render, cleanup, act, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { mockConfig } from '../../mock';
import { AddUserModal } from '../AddUserModal';

afterEach(cleanup);

beforeEach(() => {
  mockConfig();
});

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AddUserModal
      isModalOpen={false}
      closeModal={function (): void {
        throw new Error('Function not implemented.');
      }}
      holdClose={false}
    />,
    div,
  );
});

it('renders all the input components', () => {
  const { getByPlaceholderText, getByTestId } = render(
    <AddUserModal
      isModalOpen={true}
      closeModal={function (): void {
        throw new Error('Function not implemented.');
      }}
      holdClose={false}
    />,
  );
  // expect(getByRole())
  expect(getByPlaceholderText(/Full Name/i)).toBeInTheDocument();
  expect(getByPlaceholderText(/Email Address/i)).toBeInTheDocument();
  expect(getByPlaceholderText(/Phone Number/i)).toBeInTheDocument();
  expect(getByTestId(/Select-role/i)).toBeInTheDocument();
});

it('renders submit and cancel button', () => {
  const { getByText } = render(
    <AddUserModal
      isModalOpen={true}
      closeModal={function (): void {
        throw new Error('Function not implemented.');
      }}
      holdClose={false}
    />,
  );
  expect(getByText('Invite User')).toBeInTheDocument();
  expect(getByText('Cancel')).toBeInTheDocument();
});

describe('Form Behaviour', () => {
  it('validate the user inputs, and provide error messages', async () => {
    const { getByTestId } = render(
      <AddUserModal
        isModalOpen={true}
        closeModal={function (): void {
          throw new Error('Function not implemented.');
        }}
        holdClose={false}
      />,
    );

    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText(/Full Name/i), {
        target: { value: '' },
      });
      fireEvent.change(screen.getByPlaceholderText(/Email Address/i), {
        target: { value: '' },
      });
      fireEvent.change(screen.getByPlaceholderText(/Phone Number/i), {
        target: { value: '' },
      });
    });

    await act(async () => {
      fireEvent.submit(getByTestId('form-add-user'));
    });

    await screen.findByText('Please add the Full Name');
    expect(screen.getByText('Please add the Email')).toBeInTheDocument();
    expect(screen.getByText('Please add the Phone Number')).toBeInTheDocument();
    expect(screen.getByText('Please select the role')).toBeInTheDocument();
  });

  it('the validation must pass and form should be submitted', async () => {
    const { getByTestId } = render(
      <AddUserModal
        isModalOpen={true}
        closeModal={function (): void {
          throw new Error('Function not implemented.');
        }}
        holdClose={false}
      />,
    );
    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText(/Full Name/i), {
        target: { value: 'lorem ipsum' },
      });
      fireEvent.change(screen.getByPlaceholderText(/Email Address/i), {
        target: { value: 'aravind@gmail.com' },
      });
      fireEvent.change(screen.getByPlaceholderText(/Phone Number/i), {
        target: { value: '1234567890' },
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let [role, number] = screen.getAllByRole(/combobox/i);
      fireEvent.change(role, {
        target: { value: 'auditor' },
      });
    });

    await act(async () => {
      fireEvent.submit(getByTestId('form-add-user'));
    });
    let fullname = screen.queryByText('Please add the Full Name');
    expect(fullname).toBeNull();
    let email = screen.queryAllByText('Please add the Email');
    expect(email).toHaveLength(0);
    let phoneNumber = screen.queryAllByText('Please add the Phone Number');
    expect(phoneNumber).toHaveLength(0);
    let role = screen.queryAllByText('Please select the role');
    expect(role).toHaveLength(0);
  });
});
