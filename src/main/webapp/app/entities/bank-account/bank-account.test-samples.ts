import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: 11760,
  name: 'even bakeware',
  balance: 1154.73,
};

export const sampleWithPartialData: IBankAccount = {
  id: 21024,
  name: 'sweatshop brr',
  balance: 30390.46,
};

export const sampleWithFullData: IBankAccount = {
  id: 11672,
  name: 'well-documented',
  balance: 6080.91,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'once excluding',
  balance: 3445.4,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
