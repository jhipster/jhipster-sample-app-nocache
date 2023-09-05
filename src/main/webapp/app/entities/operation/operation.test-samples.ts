import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 6622,
  date: dayjs('2015-08-04T17:02'),
  amount: 12370.02,
};

export const sampleWithPartialData: IOperation = {
  id: 29615,
  date: dayjs('2015-08-05T06:52'),
  description: 'incidentally',
  amount: 30288.51,
};

export const sampleWithFullData: IOperation = {
  id: 4732,
  date: dayjs('2015-08-05T03:42'),
  description: 'postfix',
  amount: 15131.8,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-04T18:24'),
  amount: 18843.89,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
