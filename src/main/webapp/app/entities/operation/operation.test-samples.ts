import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 6622,
  date: dayjs('2015-08-04T17:02'),
  amount: 12370,
};

export const sampleWithPartialData: IOperation = {
  id: 29615,
  date: dayjs('2015-08-05T06:52'),
  description: 'Chrysler',
  amount: 10307,
};

export const sampleWithFullData: IOperation = {
  id: 8201,
  date: dayjs('2015-08-05T02:31'),
  description: 'grey',
  amount: 1955,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-05T11:16'),
  amount: 28481,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
