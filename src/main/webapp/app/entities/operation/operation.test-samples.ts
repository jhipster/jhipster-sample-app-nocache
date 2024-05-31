import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 5825,
  date: dayjs('2015-08-04T15:09'),
  amount: 8145.77,
};

export const sampleWithPartialData: IOperation = {
  id: 27104,
  date: dayjs('2015-08-05T07:34'),
  description: 'yahoo',
  amount: 1955.38,
};

export const sampleWithFullData: IOperation = {
  id: 2148,
  date: dayjs('2015-08-04T15:59'),
  description: 'moon',
  amount: 7727.95,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-04T16:53'),
  amount: 29753.63,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
