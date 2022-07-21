import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import plan from 'src/modules/plan/planReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import patient from 'src/modules/patient/patientReducers';
import healthCenter from 'src/modules/healthCenter/healthCenterReducers';
import patientVisit from 'src/modules/patientVisit/patientVisitReducers';
import medicineEnum from 'src/modules/medicineEnum/medicineEnumReducers';
import diagnosticEnum from 'src/modules/diagnosticEnum/diagnosticEnumReducers';
import doctor from 'src/modules/doctor/doctorReducers';
import patientDocument from 'src/modules/patientDocument/patientDocumentReducers';
import siteInventory from 'src/modules/siteInventory/siteInventoryReducers';
import symptomsEnum from 'src/modules/symptomsEnum/symptomsEnumReducers';
import medicalHistory from 'src/modules/medicalHistory/medicalHistoryReducers';
import chronicDiseaseEnum from 'src/modules/chronicDiseaseEnum/chronicDiseaseEnumReducers';
import medicineCategoryEnum from 'src/modules/medicineCategoryEnum/medicineCategoryEnumReducers';
import vendor from 'src/modules/vendor/vendorReducers';
import purchaseOrder from 'src/modules/purchaseOrder/purchaseOrderReducers';
import purchaseOrderEntry from 'src/modules/purchaseOrderEntry/purchaseOrderEntryReducers';
import medicineBatch from 'src/modules/medicineBatch/medicineBatchReducers';
import purchaseInvoice from 'src/modules/purchaseInvoice/purchaseInvoiceReducers';
import transfer from 'src/modules/transfer/transferReducers';
import prescriptionFill from 'src/modules/prescriptionFill/prescriptionFillReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    patient,
    healthCenter,
    patientVisit,
    medicineEnum,
    diagnosticEnum,
    doctor,
    patientDocument,
    siteInventory,
    symptomsEnum,
    medicalHistory,
    chronicDiseaseEnum,
    medicineCategoryEnum,
    vendor,
    purchaseOrder,
    purchaseOrderEntry,
    medicineBatch,
    purchaseInvoice,
    transfer,
    prescriptionFill,
  });
