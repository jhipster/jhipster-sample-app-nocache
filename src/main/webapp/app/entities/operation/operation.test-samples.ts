import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 10307,
  date: dayjs('2015-08-04T23:09'),
  amount: 11234.59,
};

export const sampleWithPartialData: IOperation = {
  id: 1955,
  date: dayjs('2015-08-05T09:42'),
  description: 'muscat madly caption',
  amount: 19164.65,
};

export const sampleWithFullData: IOperation = {
  id: 12982,
  date: dayjs('2015-08-05T09:52'),
  description: 'onto thankfully however',
  amount: 10583.9,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-05T09:48'),
  amount: 16386.73,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
