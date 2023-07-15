import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: 36768,
  name: 'Country',
  balance: 86077,
};

export const sampleWithPartialData: IBankAccount = {
  id: 57601,
  name: 'Curve tan lighthearted',
  balance: 16562,
};

export const sampleWithFullData: IBankAccount = {
  id: 47363,
  name: 'weber quantifying',
  balance: 60627,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'protocol',
  balance: 56497,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
