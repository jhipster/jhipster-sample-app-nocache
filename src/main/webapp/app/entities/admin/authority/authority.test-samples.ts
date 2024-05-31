import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'dcee369d-6b75-4b28-bcf1-6379607490f1',
};

export const sampleWithPartialData: IAuthority = {
  name: '04a4a2ef-a5f1-43ca-bfa1-c223da0fe8e6',
};

export const sampleWithFullData: IAuthority = {
  name: 'a03f39b0-92b6-4c99-b07a-a65bfb891450',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
