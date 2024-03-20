import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 16253,
  date: dayjs('2015-08-04T15:45'),
  amount: 32528.35,
};

export const sampleWithPartialData: IOperation = {
  id: 28205,
  date: dayjs('2015-08-05T12:18'),
  amount: 10446.71,
};

export const sampleWithFullData: IOperation = {
  id: 8923,
  date: dayjs('2015-08-05T08:59'),
  description: 'stained although',
  amount: 2510.42,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-05T02:52'),
  amount: 9242.35,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
