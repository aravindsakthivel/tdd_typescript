import { ReactNode, Dispatch, SetStateAction } from 'react';

export interface OverviewTotalOnboardedInterface {
  title: string;
  onBoardCount: string | number;
}

export interface ReferralpageDetailsInterface {
  userId: string;
  offset: number;
  count: number;
}

export interface ReferralLinkDetailsInterface {
  key?: string | number | undefined;
  urlLink: string;
  createdOn: string;
  destination: string;
  onBoarded: string;
}

interface GeneratedReferralInterface {
  generateReferralLink: {
    destination: string;
    referralUrl: string;
  };
}

export interface ReferralLinkModalInterface extends GeneratedReferralInterface {
  isFailure: boolean;
  isModalOpen: boolean;
  closeModal: () => void;
  holdClose: boolean;
}

export interface ReferralLinkInterface {
  referralLinkDetails: ReferralLinkDetailsInterface[];
}

export interface ReferralRowTemplateInterface {
  children: ReactNode;
  title: string;
  last: boolean;
}

export interface SelectOptionInterface {
  name: string;
  value: string;
}

// the following interface was to test the select
export interface DestinationInterface {
  destination?: 'mpl_pro' | 'mpl_qa' | 'mpl_dev' | string | undefined; // currently no destination info present using general values
}

export interface CreateReferralQueryInterface extends DestinationInterface {
  loading?: boolean;
  error?: string | undefined;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  data: GeneratedReferralInterface;
}
