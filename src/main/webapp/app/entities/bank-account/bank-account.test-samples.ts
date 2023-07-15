import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: 12048,
  name: 'encompassing',
  balance: 19046,
};

export const sampleWithPartialData: IBankAccount = {
  id: 11373,
  name: 'Stage ick Industrial',
  balance: 5528,
};

export const sampleWithFullData: IBankAccount = {
  id: 15999,
  name: 'quantifying male Borders',
  balance: 10174,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'Bedfordshire',
  balance: 1154,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
