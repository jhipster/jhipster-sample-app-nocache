import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'de3967b8-f676-479f-9c44-2f51cf123af8',
};

export const sampleWithPartialData: IAuthority = {
  name: 'a33b9bc9-7a5f-4815-8d8e-f77269512672',
};

export const sampleWithFullData: IAuthority = {
  name: '54039291-b3ee-4935-ac46-f421291dbdbe',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
