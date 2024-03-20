import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: 7217,
  name: 'a',
  balance: 23845.96,
};

export const sampleWithPartialData: IBankAccount = {
  id: 9508,
  name: 'aboard',
  balance: 3480.74,
};

export const sampleWithFullData: IBankAccount = {
  id: 10431,
  name: 'blindly above',
  balance: 5033.88,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'upward anxiously',
  balance: 65.5,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
