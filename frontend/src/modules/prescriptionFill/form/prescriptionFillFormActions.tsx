import PrescriptionFillService from 'src/modules/prescriptionFill/prescriptionFillService';
import PatientVisitService from 'src/modules/patientVisit/patientVisitService';
import SiteInventoryService from 'src/modules/siteInventory/siteInventoryService';

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
        
        record['med1'] = patientVisitDetails.medicine1;
        record['med1Qty'] = patientVisitDetails.med1Qty;
        
        record['med2'] = patientVisitDetails.medicine2;
        record['med2Qty'] = patientVisitDetails.med2Qty;
        
        record['med3'] = patientVisitDetails.medicine3;
        record['med3Qty'] = patientVisitDetails.med3Qty;
        
        record['med4'] = patientVisitDetails.medicine4;
        record['med4Qty'] = patientVisitDetails.med4Qty;

        record['patientVisit'] =  patientVisitDetails;
        record['med1Inventory'] = await SiteInventoryService.list({center: medicalCenter, medicine: patientVisitDetails.medicine1Id}, 
                                                                  'expiryDate', null, null);
        record['med2Inventory'] = await SiteInventoryService.list({center: medicalCenter, medicine: patientVisitDetails.medicine2Id}, 
                                                                    'expiryDate', null, null);
        record['med3Inventory'] = await SiteInventoryService.list({center: medicalCenter, medicine: patientVisitDetails.medicine3Id}, 
                                                                      'expiryDate', null, null);
        record['med4Inventory'] = await SiteInventoryService.list({center: medicalCenter, medicine: patientVisitDetails.medicine4Id}, 
                                                                        'expiryDate', null, null);                                                
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

      await PrescriptionFillService.create(values);

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
