import { createAction, props } from '@ngrx/store';
import { ContactModel } from '../models/data.model';

export const fetchData = createAction('[Data] Fetch ContactData');
export const fetchDataSuccess = createAction('[Data] Fetch ContactData Success', props<{ contact: ContactModel[] }>());
export const fetchDataFailure = createAction('[Data] Fetch ContactData Failure', props<{ error: string }>());


// Add Data
export const addData = createAction(
  '[Data] Add ContactData',
  props<{ newData: ContactModel }>()
);
export const addDataSuccess = createAction(
  '[Data] Add ContactData Success',
  props<{ newData: ContactModel }>()
);
export const addDataFailure = createAction(
  '[Data] Add ContactData Failure',
  props<{ error: string }>()
);

// Update Data
export const updateContactData = createAction(
  '[Data] Update Data',
  props<{ updatedData: ContactModel }>()
);
export const updateContactDataSuccess = createAction(
  '[Data] Update Data Success',
  props<{ updatedData: ContactModel }>()
);
export const updateContactDataFailure = createAction(
  '[Data] Update Data Failure',
  props<{ error: string }>()
);

// Delet Data
export const deleteContactData = createAction(
  '[Data] Delete Data',
  props<{ id: string }>()
);
export const deleteContactDataSuccess = createAction(
  '[Data] Delete Data Success',
  props<{ id: string }>()
);
export const deleteContactDataFailure = createAction(
  '[Data] Delete Data Failure',
  props<{ error: string }>()
);




