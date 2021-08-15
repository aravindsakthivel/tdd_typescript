export interface AddUserValuesInterface {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  role: 'AUDITOR' | 'EMPLOYEE' | 'BROADCASTER' | 'ADMIN';
  prefix: string;
}

export interface GeneralModalInterface {
  isModalOpen: boolean;
  closeModal: () => void;
  holdClose?: boolean;
}

export interface SelectOptionInterface {
  name: string;
  value: string;
}

export interface ModalInputInterface {
  visible: boolean;
  onCreate: (values: AddUserValuesInterface) => Promise<unknown>;
  onCancel: () => void;
  holdClose: boolean;
}
