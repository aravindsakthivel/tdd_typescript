// import ConnectionManager, { Logger } from 'dashboard-common';
import {
  ICreateObjectRequest,
  ICreateObjectResponse,
} from '../typings/__generated__';

const createObject = (
  data?: ICreateObjectRequest
): Promise<ICreateObjectResponse> | any => {
  // Logger.info('Data', data);
  if (!data) throw new Error('Invalid data');

  // return ConnectionManager.call<ICreateObjectRequest, ICreateObjectResponse>({
  //   serviceName: 'service-storage',
  //   serviceNameInProto: 'StorageService',
  //   method: 'createObject',
  //   request: data,
  // });
};

const StorageService = {
  createObject,
};

export default StorageService;
