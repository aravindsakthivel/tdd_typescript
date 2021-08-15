import { gql } from '@apollo/client';

export const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

export const GET_DOG_PHOTO = gql`
  query dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

export const GET_REFERRAL_PAGE_DETAILS = gql`
  query ($getReferralLinksData: GetReferralLinksRequest) {
    getReferralLinks(data: $getReferralLinksData) {
      referralLinkDetails {
        createdAt
        destination
        onBoarded
        link
      }
    }
  }
`;

export const GENERATE_REFERRAL_LINK = gql`
  mutation ($generateReferralLinkData: GenerateReferralLinkRequest) {
    generateReferralLink(data: $generateReferralLinkData) {
      destination
      referralUrl
    }
  }
`;

export const ADD_USER = gql`
  mutation ($addUserData: AddUserRequest) {
    addUser(data: $addUserData) {
      isSuccess
      message
    }
  }
`;
