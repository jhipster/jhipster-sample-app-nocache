import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'a0d99956-5f3e-4900-ac8f-8529fdc037a5',
};

export const sampleWithPartialData: IAuthority = {
  name: '036f8d7b-c91d-4edc-8fc2-2e380abad5db',
};

export const sampleWithFullData: IAuthority = {
  name: 'd2d3a43a-f791-439b-85e8-88460ed10c04',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
