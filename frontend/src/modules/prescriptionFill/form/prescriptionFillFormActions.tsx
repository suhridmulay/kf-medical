import PrescriptionFillService from 'src/modules/prescriptionFill/prescriptionFillService';
import PatientVisitService from 'src/modules/patientVisit/patientVisitService';
import SiteInventoryService from 'src/modules/siteInventory/siteInventoryService';
import MedicineEnumService from 'src/modules/medicineEnum/medicineEnumService';

import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PRESCRIPTIONFILL_FORM';

const prescriptionFillFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id, patientVisitId) => async (dispatch) => {
    try {
      dispatch({
        type: prescriptionFillFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await PrescriptionFillService.find(id);
      }

      if (patientVisitId != null) {
        const patientVisitDetails = await PatientVisitService.find(patientVisitId);
        const medicalCenter = patientVisitDetails.medicalCenterId;

        record['patientVisit']      = patientVisitDetails;
        record['medicineInventory'] = await SiteInventoryService.list({center: medicalCenter, hasRemainingMeds: 1}, 'expiryDate', null, null);
        record['medicines']         = await MedicineEnumService.list({}, 'medicineName', null, null);
      }

      dispatch({
        type: prescriptionFillFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: prescriptionFillFormActions.INIT_ERROR,
      });

      getHistory().push('/prescription-fill');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: prescriptionFillFormActions.CREATE_STARTED,
      });

      const record1 = {"patientVisit": values.patientVisit, "quantity": values.med1Qty, "siteInventory": values.med1SiteInventory};
      const record2 = {"patientVisit": values.patientVisit, "quantity": values.med2Qty, "siteInventory": values.med2SiteInventory};
      const record3 = {"patientVisit": values.patientVisit, "quantity": values.med3Qty, "siteInventory": values.med3SiteInventory};
      const record4 = {"patientVisit": values.patientVisit, "quantity": values.med4Qty, "siteInventory": values.med4SiteInventory};

      if (record1.quantity > 0) {
        await PrescriptionFillService.create(record1);
      }

      if (record2.quantity > 0) {
        await PrescriptionFillService.create(record2);
      }

      if (record3.quantity > 0) {
        await PrescriptionFillService.create(record3);
      }

      if (record4.quantity > 0) {
        await PrescriptionFillService.create(record2);
      }

      dispatch({
        type: prescriptionFillFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.prescriptionFill.create.success'),
      );

      getHistory().push('/prescription-fill');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: prescriptionFillFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: prescriptionFillFormActions.UPDATE_STARTED,
      });

      await PrescriptionFillService.update(id, values);

      dispatch({
        type: prescriptionFillFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.prescriptionFill.update.success'),
      );

      getHistory().push('/prescription-fill');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: prescriptionFillFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default prescriptionFillFormActions;
