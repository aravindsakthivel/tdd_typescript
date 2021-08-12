import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { mockConfig } from '../../mock';
import { ReferralRowTemplate } from '../ReferralRowTemplate';
import { InfoCard } from '../../InfoCard';

afterEach(cleanup);
beforeEach(() => {
  mockConfig();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReferralRowTemplate title={'none'} />, div);
});

it('the component consist of Title and Children Node', () => {
  let topTestTitle = 'test-text';
  const title = 'User Onboarded this month';
  const count = '320';
  const { getByTestId } = render(
    <ReferralRowTemplate
      title={topTestTitle}
      children={<InfoCard title={title} onBoardCount={count} />}
    />,
  );
  expect(getByTestId('referral-row-title')).toHaveTextContent(topTestTitle);
  expect(getByTestId('info-card-title')).toHaveTextContent(title);
  expect(getByTestId('info-card-onboard-count')).toHaveTextContent(count);
});

it('matches snapshot with title', () => {
  const tree = renderer.create(<ReferralRowTemplate title={'none'} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('matches snapshot with title and children', () => {
  let topTestTitle = 'test-text';
  const title = 'User Onboarded this month';
  const count = '320';
  const tree = renderer
    .create(
      <ReferralRowTemplate
        title={topTestTitle}
        children={<InfoCard title={title} onBoardCount={count} />}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
