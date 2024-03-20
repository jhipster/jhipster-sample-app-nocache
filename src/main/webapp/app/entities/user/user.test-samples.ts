import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 24009,
  login: 'GY@TU\\`S6xer6',
};

export const sampleWithPartialData: IUser = {
  id: 13212,
  login: 'oM@vmF6A9\\5K\\ImUu4',
};

export const sampleWithFullData: IUser = {
  id: 17094,
  login: 'j',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
