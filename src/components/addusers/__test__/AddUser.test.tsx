import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { mockConfig } from '../../mock';
import { AddUser } from '../AddUser';

afterEach(cleanup);
beforeEach(() => {
  mockConfig();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddUser />, div);
});

it('all the elements presents', () => {
  const { getByTestId } = render(<AddUser />);
  expect(getByTestId('add-user-button')).toHaveTextContent('Add User');
});

it('renders the modal after clicking the add user button', () => {
  const { getByTestId } = render(<AddUser />);
  const adduser = getByTestId('add-user-button');
  fireEvent.click(adduser);
});

it('matches snapshot', () => {
  const tree = renderer.create(<AddUser />).toJSON();
  expect(tree).toMatchSnapshot();
});
