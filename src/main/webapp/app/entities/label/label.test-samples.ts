import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 18280,
  label: 'fooey',
};

export const sampleWithPartialData: ILabel = {
  id: 12423,
  label: 'unit insert in',
};

export const sampleWithFullData: ILabel = {
  id: 801,
  label: 'per',
};

export const sampleWithNewData: NewLabel = {
  label: 'swear daddy dearly',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
