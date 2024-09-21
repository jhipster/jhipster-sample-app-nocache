import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 11966,
  login: '96a73w',
};

export const sampleWithPartialData: IUser = {
  id: 2793,
  login: 'S_w+@HuUzT\\PtS\\RrbvsN\\)f2cho\\5CwwTH',
};

export const sampleWithFullData: IUser = {
  id: 17934,
  login: '!@4vOP\\-1hb',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
