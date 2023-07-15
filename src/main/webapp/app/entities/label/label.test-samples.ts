import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 8984,
  label: 'Bentley Bicycle',
};

export const sampleWithPartialData: ILabel = {
  id: 94520,
  label: 'Borders bypassing Accountability',
};

export const sampleWithFullData: ILabel = {
  id: 20256,
  label: 'Keyboard',
};

export const sampleWithNewData: NewLabel = {
  label: 'Ohio Pickup',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
