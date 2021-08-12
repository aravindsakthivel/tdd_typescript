import ReactDOM from 'react-dom';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { mockConfig } from '../../mock';
import { ReferrralLinkTable } from '../ReferrralLinkTable';

afterEach(cleanup);
beforeEach(() => {
  mockConfig();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReferrralLinkTable />, div);
});

it('check if table head title presents', async () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const data = render(<ReferrralLinkTable />);
  expect(await screen.findByText('URL / Link')).toBeInTheDocument();
  expect(await screen.findByText('Created On')).toBeInTheDocument();
  expect(await screen.findByText('Destination')).toBeInTheDocument();
  expect(await screen.findByText('Onboarded')).toBeInTheDocument();
});

it('matches snapshot', () => {
  const tree = renderer.create(<ReferrralLinkTable />).toJSON();
  expect(tree).toMatchSnapshot();
});
