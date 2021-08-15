// import ConnectionManager, { Logger } from 'dashboard-common';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios, { AxiosRequestConfig } from 'axios';
import { IAddUserRequest, IAddUserResponse } from '../typings/__generated__';

const addUser = (data?: IAddUserRequest): Promise<IAddUserResponse> => {
  if (!data) throw Error('Invalid Data');

  const params: AxiosRequestConfig = {
    method: 'post',
    data,
    url: 'http://localhost:3004/users',
  };
  console.log(params);
  return axios(params)
    .then(() => {
      return { message: 'User added successfully', isSuccess: true };
    })
    .catch((err) => err);
};

const AddUserService = {
  addUser,
};

export default AddUserService;
