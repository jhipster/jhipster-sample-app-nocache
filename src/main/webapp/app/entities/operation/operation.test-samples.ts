import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 20209,
  date: dayjs('2015-08-04T17:02'),
  amount: 37751,
};

export const sampleWithPartialData: IOperation = {
  id: 90379,
  date: dayjs('2015-08-05T06:52'),
  amount: 12473,
};

export const sampleWithFullData: IOperation = {
  id: 82715,
  date: dayjs('2015-08-05T07:34'),
  description: 'Cotton',
  amount: 1065,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-05T04:37'),
  amount: 92436,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
