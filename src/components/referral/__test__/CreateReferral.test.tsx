import ReactDOM from 'react-dom';
import { render, cleanup, act, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { mockConfig } from '../../mock';
import { CreateReferral } from '../CreateReferral';

afterEach(cleanup);
beforeEach(() => {
  mockConfig();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateReferral />, div);
});

it('component consit of select and button', () => {
  const { getByTestId } = render(<CreateReferral />);

  expect(getByTestId(/select-destination-option/i)).toBeInTheDocument();
  expect(getByTestId(/generate-link-button/i)).toBeInTheDocument();
});

describe('Form behavior', () => {
  it('component shows error when clicking button without selecting', async () => {
    const { getByTestId } = render(<CreateReferral />);

    await act(async () => {
      fireEvent.submit(getByTestId('generate-link-form'));
    });

    await screen.findByText('Please select a Destination');
  });

  it('validation passes form submits and modal appears', async () => {
    const { getByTestId } = render(<CreateReferral destinationDefault={'mpl_pro'} />);

    await act(async () => {
      fireEvent.submit(getByTestId('generate-link-form'));
    });

    await screen.findByText('New Link');
    expect(getByTestId('referral-modal-destination-title')).toHaveTextContent(
      'Destination: MPL PRO',
    );
    expect(screen.getByText('www.mpl.com/mobileapp/livegame/mobileapp')).toBeInTheDocument();
  });
});

it('matches snapshot without modal', () => {
  const tree = renderer.create(<CreateReferral />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('matches snapshot with modal', () => {
  const tree = renderer.create(<CreateReferral destinationDefault={'mpl_pro'} />).toJSON();
  expect(tree).toMatchSnapshot();
});
