import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 2944,
  label: 'puffin as',
};

export const sampleWithPartialData: ILabel = {
  id: 8010,
  label: 'vastly',
};

export const sampleWithFullData: ILabel = {
  id: 13551,
  label: 'pfft sweet pause',
};

export const sampleWithNewData: NewLabel = {
  label: 'unless',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
