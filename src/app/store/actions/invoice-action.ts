import { createAction, props } from '@ngrx/store';
import { InvoiceModel } from '../models/data.model';

export const fetchData = createAction('[Data] Fetch Data');
export const fetchDataSuccess = createAction('[Data] Fetch Data Success', props<{ invoice: InvoiceModel[] }>());
export const fetchDataFailure = createAction('[Data] Fetch Data Failure', props<{ error: string }>());

// Add Data
export const addData = createAction(
    '[Data] Add Data',
    props<{ newData: InvoiceModel }>()
  );
  export const addDataSuccess = createAction(
    '[Data] Add Data Success',
    props<{ newData: InvoiceModel }>()
  );
  export const addDataFailure = createAction(
    '[Data] Add Data Failure',
    props<{ error: string }>()
);
  
// Update Data
export const updateInvoice = createAction(
  '[Data] Update Invoice',
  props<{ updatedData: InvoiceModel }>()
);
export const updateInvoiceSuccess = createAction(
  '[Data] Update Invoice Success',
  props<{ updatedData: InvoiceModel }>()
);
export const updateInvoiceFailure = createAction(
  '[Data] Update Invoice Failure',
  props<{ error: string }>()
);


// Delete Data
export const deleteInvoice = createAction(
  '[Data] Delete Invoice',
  props<{ id: string }>()
);
export const deleteInvoiceSuccess = createAction(
  '[Data] Delete Invoice Success',
  props<{ id: string }>()
);
export const deleteInvoiceFailure = createAction(
  '[Data] Delete Invoice Failure',
  props<{ error: string }>()
);
