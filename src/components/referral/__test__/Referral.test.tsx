import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { mockConfig } from '../../mock';
import { Referral } from '../Referral';

afterEach(cleanup);
beforeEach(() => {
  mockConfig();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Referral />, div);
});

it('The component consist of title', () => {
  const { getByTestId } = render(<Referral />);
  expect(getByTestId('referral-page-title')).toHaveTextContent('Referral');
});

it('matches snapshot', () => {
  const tree = renderer.create(<Referral />).toJSON();
  expect(tree).toMatchSnapshot();
});
