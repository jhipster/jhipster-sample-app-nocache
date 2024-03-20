import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 5281,
  label: 'budget',
};

export const sampleWithPartialData: ILabel = {
  id: 31082,
  label: 'huzzah toward',
};

export const sampleWithFullData: ILabel = {
  id: 14241,
  label: 'jubilantly',
};

export const sampleWithNewData: NewLabel = {
  label: 'canonise instead yieldingly',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
