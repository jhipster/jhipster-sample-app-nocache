import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 11966,
  login: 'W5.9',
};

export const sampleWithPartialData: IUser = {
  id: 26421,
  login: 'a',
};

export const sampleWithFullData: IUser = {
  id: 16966,
  login: '3sw',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
