import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 2944,
  label: 'Bentley Bicycle',
};

export const sampleWithPartialData: ILabel = {
  id: 30972,
  label: 'Northeast bypassing Human',
};

export const sampleWithFullData: ILabel = {
  id: 6637,
  label: 'Rustic',
};

export const sampleWithNewData: NewLabel = {
  label: 'Lakes Dollar',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
