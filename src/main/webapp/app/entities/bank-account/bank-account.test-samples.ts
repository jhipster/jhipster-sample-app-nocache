import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: 12048,
  name: 'svelte',
  balance: 4649.91,
};

export const sampleWithPartialData: IBankAccount = {
  id: 30594,
  name: 'huzzah pale blindly',
  balance: 6207.42,
};

export const sampleWithFullData: IBankAccount = {
  id: 1154,
  name: 'to',
  balance: 21359.99,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'decelerate',
  balance: 28807.93,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
