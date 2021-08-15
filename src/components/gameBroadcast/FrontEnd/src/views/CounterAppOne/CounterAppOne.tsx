import React from 'react';
import { Button } from 'antd';
import { useQuery } from '@apollo/client';
import { GET_DOG_PHOTO } from '../../queries';

function DogPhoto({ breed }: { breed: string }) {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_DOG_PHOTO,
    {
      variables: { breed },
      notifyOnNetworkStatusChange: true,
      // pollInterval: 500
    },
  );

  if (networkStatus === 4) return <p>Re-fetching!</p>;
  if (loading) return <div />;
  if (error) return <div>`Error!: ${JSON.stringify(error)}`</div>;

  return (
    <div>
      <div>
        <img
          src={data.dog.displayImage}
          style={{ height: 100, width: 100 }}
          alt=""
        />
      </div>
      <Button onClick={() => refetch()}>Refetch!</Button>
    </div>
  );
}

const Counter: React.FC = () => {
  return (
    <div>
      <h2>APP 1</h2>
      <DogPhoto breed="pug" />
    </div>
  );
};

export default Counter;
