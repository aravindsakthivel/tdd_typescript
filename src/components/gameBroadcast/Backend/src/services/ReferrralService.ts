// import ConnectionManager, { Logger } from 'dashboard-common';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios, { AxiosRequestConfig } from 'axios';
import {
  IGenerateReferralLinkRequest,
  IGenerateReferralLinkResponse,
  IGetReferralLinksRequest,
  IGetReferralLinksResponse,
} from '../typings/__generated__';

interface BodyDataInterface {
  link: string;
  destination: string;
  onBoarded: string;
  createdAt: string;
}

const generateReferralLink = (
  data?: IGenerateReferralLinkRequest
): Promise<IGenerateReferralLinkResponse> => {
  if (!data) throw new Error('Invalid data');
  const crnTime = `${new Date().valueOf()}`;
  const randomNumber = Math.floor(Math.random() * (3495034 - 543)) + 3094680;
  const bodyData: BodyDataInterface | null = {
    link: `https://mpl.live/${randomNumber}mycustomcodeforamqzingoffers`,
    createdAt: crnTime,
    destination: data.destination,
    onBoarded: '5466',
  };

  const params: AxiosRequestConfig = {
    method: 'post',
    data: bodyData,
    url: 'http://localhost:3004/referralLinks',
  };

  return axios(params)
    .then((res) => {
      const { link: referralUrl, destination } = res.data;
      return { referralUrl, destination };
    })
    .catch((err) => err);
};

const getReferralLinks = (
  data?: IGetReferralLinksRequest
): Promise<IGetReferralLinksResponse> => {
  if (!data) throw new Error('Invalid data');
  const params: AxiosRequestConfig = {
    method: 'get',
    url: 'http://localhost:3004/referralLinks',
  };

  return axios(params)
    .then((res) => ({ referralLinkDetails: res.data }))
    .catch((err) => err);
};

const ReferralService = {
  generateReferralLink,
  getReferralLinks,
};

export default ReferralService;
