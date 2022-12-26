import Roles from 'src/security/roles';
import Plans from 'src/security/plans';
import Storage from 'src/security/storage';

const storage = Storage.values;
const roles = Roles.values;
const plans = Plans.values;

class Permissions {
  static get values() {
    return {
      tenantEdit: {
        id: 'tenantEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
      },
      tenantDestroy: {
        id: 'tenantDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
      },
      planEdit: {
        id: 'planEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
      },
      planRead: {
        id: 'planRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
      },
      userEdit: {
        id: 'userEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
      },
      userDestroy: {
        id: 'userDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
      },
      userCreate: {
        id: 'userCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
      },
      userImport: {
        id: 'userImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
      },
      userRead: {
        id: 'userRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
      },
      userAutocomplete: {
        id: 'userAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
        allowedStorage: [
          storage.settingsBackgroundImages,
          storage.settingsLogos,
        ],
      },
      patientImport: {
        id: 'patientImport',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
      },
      patientCreate: {
        id: 'patientCreate',
        allowedRoles: [roles.admin, roles.doctor, roles.nurse, roles.data_entry, roles.manager],
        allowedPlans: [plans.free],
        allowedStorage: [
          storage.patientPicture,
        ],
      },
      patientEdit: {
        id: 'patientEdit',
        allowedRoles: [roles.admin, roles.doctor, roles.nurse, roles.data_entry, roles.manager],
        allowedPlans: [plans.free],
        allowedStorage: [
          storage.patientPicture,
        ],
      },
      patientDestroy: {
        id: 'patientDestroy',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
        allowedStorage: [
          storage.patientPicture,
        ],
      },
      patientRead: {
        id: 'patientRead',
        allowedRoles: [roles.admin, roles.doctor, roles.nurse, roles.data_entry, roles.manager],
        allowedPlans: [plans.free],
      },
      patientAutocomplete: {
        id: 'patientAutocomplete',
        allowedRoles: [roles.admin, roles.doctor, roles.nurse, roles.data_entry, roles.manager],
        allowedPlans: [plans.free],
      },

      healthCenterImport: {
        id: 'healthCenterImport',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
      },
      healthCenterCreate: {
        id: 'healthCenterCreate',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      healthCenterEdit: {
        id: 'healthCenterEdit',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      healthCenterDestroy: {
        id: 'healthCenterDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      healthCenterRead: {
        id: 'healthCenterRead',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
      },
      healthCenterAutocomplete: {
        id: 'healthCenterAutocomplete',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
      },

      patientVisitImport: {
        id: 'patientVisitImport',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
      },
      patientVisitCreate: {
        id: 'patientVisitCreate',
        allowedRoles: [roles.admin, roles.doctor, roles.nurse, roles.data_entry, roles.manager],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      patientVisitEdit: {
        id: 'patientVisitEdit',
        allowedRoles: [roles.admin, roles.doctor, roles.nurse, roles.data_entry, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      patientVisitDestroy: {
        id: 'patientVisitDestroy',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      patientVisitRead: {
        id: 'patientVisitRead',
        allowedRoles: [roles.admin, roles.doctor, roles.nurse, roles.data_entry, roles.manager],
        allowedPlans: [plans.free],
      },
      patientVisitAutocomplete: {
        id: 'patientVisitAutocomplete',
        allowedRoles: [roles.admin, roles.doctor, roles.nurse, roles.data_entry, roles.manager],
        allowedPlans: [plans.free],
      },

      medicineEnumImport: {
        id: 'medicineEnumImport',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
      },
      medicineEnumCreate: {
        id: 'medicineEnumCreate',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      medicineEnumEdit: {
        id: 'medicineEnumEdit',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      medicineEnumDestroy: {
        id: 'medicineEnumDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      medicineEnumRead: {
        id: 'medicineEnumRead',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      medicineEnumAutocomplete: {
        id: 'medicineEnumAutocomplete',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },

      diagnosticEnumImport: {
        id: 'diagnosticEnumImport',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
      },
      diagnosticEnumCreate: {
        id: 'diagnosticEnumCreate',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      diagnosticEnumEdit: {
        id: 'diagnosticEnumEdit',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      diagnosticEnumDestroy: {
        id: 'diagnosticEnumDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      diagnosticEnumRead: {
        id: 'diagnosticEnumRead',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
      },
      diagnosticEnumAutocomplete: {
        id: 'diagnosticEnumAutocomplete',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
      },

      doctorImport: {
        id: 'doctorImport',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
      },
      doctorCreate: {
        id: 'doctorCreate',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      doctorEdit: {
        id: 'doctorEdit',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      doctorDestroy: {
        id: 'doctorDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      doctorRead: {
        id: 'doctorRead',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
      },
      doctorAutocomplete: {
        id: 'doctorAutocomplete',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
      },

      patientDocumentImport: {
        id: 'patientDocumentImport',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
      },
      patientDocumentCreate: {
        id: 'patientDocumentCreate',
        allowedRoles: [roles.admin, roles.doctor, roles.nurse, roles.data_entry, roles.manager],
        allowedStorage: [
          storage.patientDocumentImage,
        ],
      },
      patientDocumentEdit: {
        id: 'patientDocumentEdit',
        allowedRoles: [roles.admin, roles.doctor, roles.nurse, roles.data_entry, roles.manager],
        allowedPlans: [plans.free],
        allowedStorage: [
          storage.patientDocumentImage,
        ],
      },
      patientDocumentDestroy: {
        id: 'patientDocumentDestroy',
        allowedRoles: [roles.admin, roles.doctor, roles.nurse, roles.data_entry, roles.manager],
        allowedPlans: [plans.free],
        allowedStorage: [
          storage.patientDocumentImage,
        ],
      },
      patientDocumentRead: {
        id: 'patientDocumentRead',
        allowedRoles: [roles.admin, roles.doctor, roles.nurse, roles.data_entry, roles.manager],
        allowedPlans: [plans.free],
      },
      patientDocumentAutocomplete: {
        id: 'patientDocumentAutocomplete',
        allowedRoles: [roles.admin, roles.doctor, roles.nurse, roles.data_entry, roles.manager],
        allowedPlans: [plans.free],
      },

      siteInventoryImport: {
        id: 'siteInventoryImport',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      siteInventoryCreate: {
        id: 'siteInventoryCreate',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      siteInventoryEdit: {
        id: 'siteInventoryEdit',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      siteInventoryDestroy: {
        id: 'siteInventoryDestroy',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      siteInventoryRead: {
        id: 'siteInventoryRead',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      siteInventoryAutocomplete: {
        id: 'siteInventoryAutocomplete',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },

      symptomsEnumImport: {
        id: 'symptomsEnumImport',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
      },
      symptomsEnumCreate: {
        id: 'symptomsEnumCreate',
        allowedRoles: [roles.admin, roles.manager, roles.doctor],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      symptomsEnumEdit: {
        id: 'symptomsEnumEdit',
        allowedRoles: [roles.admin, roles.manager, roles.doctor],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      symptomsEnumDestroy: {
        id: 'symptomsEnumDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      symptomsEnumRead: {
        id: 'symptomsEnumRead',
        allowedRoles: [roles.admin, roles.manager, roles.doctor],
        allowedPlans: [plans.free],
      },
      symptomsEnumAutocomplete: {
        id: 'symptomsEnumAutocomplete',
        allowedRoles: [roles.admin, roles.manager, roles.doctor],
        allowedPlans: [plans.free],
      },

      medicalHistoryImport: {
        id: 'medicalHistoryImport',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
      },
      medicalHistoryCreate: {
        id: 'medicalHistoryCreate',
        allowedRoles: [roles.admin, roles.doctor, roles.nurse, roles.data_entry, roles.manager],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      medicalHistoryEdit: {
        id: 'medicalHistoryEdit',
        allowedRoles: [roles.admin, roles.doctor, roles.nurse, roles.data_entry, roles.manager],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      medicalHistoryDestroy: {
        id: 'medicalHistoryDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      medicalHistoryRead: {
        id: 'medicalHistoryRead',
        allowedRoles: [roles.admin, roles.doctor, roles.nurse, roles.data_entry, roles.manager],
        allowedPlans: [plans.free],
      },
      medicalHistoryAutocomplete: {
        id: 'medicalHistoryAutocomplete',
        allowedRoles: [roles.admin, roles.doctor, roles.nurse, roles.data_entry, roles.manager],
        allowedPlans: [plans.free],
      },

      chronicDiseaseEnumImport: {
        id: 'chronicDiseaseEnumImport',
        allowedRoles: [roles.admin, roles.doctor, roles.manager],
        allowedPlans: [plans.free],
      },
      chronicDiseaseEnumCreate: {
        id: 'chronicDiseaseEnumCreate',
        allowedRoles: [roles.admin, roles.doctor, roles.manager],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      chronicDiseaseEnumEdit: {
        id: 'chronicDiseaseEnumEdit',
        allowedRoles: [roles.admin, roles.doctor, roles.manager],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      chronicDiseaseEnumDestroy: {
        id: 'chronicDiseaseEnumDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      chronicDiseaseEnumRead: {
        id: 'chronicDiseaseEnumRead',
        allowedRoles: [roles.admin, roles.doctor, roles.manager],
        allowedPlans: [plans.free],
      },
      chronicDiseaseEnumAutocomplete: {
        id: 'chronicDiseaseEnumAutocomplete',
        allowedRoles: [roles.admin, roles.doctor, roles.manager],
        allowedPlans: [plans.free],
      },

      medicineCategoryEnumImport: {
        id: 'medicineCategoryEnumImport',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      medicineCategoryEnumCreate: {
        id: 'medicineCategoryEnumCreate',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      medicineCategoryEnumEdit: {
        id: 'medicineCategoryEnumEdit',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      medicineCategoryEnumDestroy: {
        id: 'medicineCategoryEnumDestroy',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      medicineCategoryEnumRead: {
        id: 'medicineCategoryEnumRead',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      medicineCategoryEnumAutocomplete: {
        id: 'medicineCategoryEnumAutocomplete',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },

      vendorImport: {
        id: 'vendorImport',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      vendorCreate: {
        id: 'vendorCreate',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      vendorEdit: {
        id: 'vendorEdit',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      vendorDestroy: {
        id: 'vendorDestroy',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      vendorRead: {
        id: 'vendorRead',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      vendorAutocomplete: {
        id: 'vendorAutocomplete',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },

      purchaseOrderImport: {
        id: 'purchaseOrderImport',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      purchaseOrderCreate: {
        id: 'purchaseOrderCreate',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      purchaseOrderEdit: {
        id: 'purchaseOrderEdit',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      purchaseOrderDestroy: {
        id: 'purchaseOrderDestroy',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      purchaseOrderRead: {
        id: 'purchaseOrderRead',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      purchaseOrderAutocomplete: {
        id: 'purchaseOrderAutocomplete',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },

      purchaseOrderEntryImport: {
        id: 'purchaseOrderEntryImport',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      purchaseOrderEntryCreate: {
        id: 'purchaseOrderEntryCreate',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      purchaseOrderEntryEdit: {
        id: 'purchaseOrderEntryEdit',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      purchaseOrderEntryDestroy: {
        id: 'purchaseOrderEntryDestroy',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      purchaseOrderEntryRead: {
        id: 'purchaseOrderEntryRead',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      purchaseOrderEntryAutocomplete: {
        id: 'purchaseOrderEntryAutocomplete',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },

      medicineBatchImport: {
        id: 'medicineBatchImport',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      medicineBatchCreate: {
        id: 'medicineBatchCreate',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      medicineBatchEdit: {
        id: 'medicineBatchEdit',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      medicineBatchDestroy: {
        id: 'medicineBatchDestroy',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      medicineBatchRead: {
        id: 'medicineBatchRead',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      medicineBatchAutocomplete: {
        id: 'medicineBatchAutocomplete',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },

      purchaseInvoiceImport: {
        id: 'purchaseInvoiceImport',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      purchaseInvoiceCreate: {
        id: 'purchaseInvoiceCreate',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      purchaseInvoiceEdit: {
        id: 'purchaseInvoiceEdit',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      purchaseInvoiceDestroy: {
        id: 'purchaseInvoiceDestroy',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      purchaseInvoiceRead: {
        id: 'purchaseInvoiceRead',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      purchaseInvoiceAutocomplete: {
        id: 'purchaseInvoiceAutocomplete',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },

      transferImport: {
        id: 'transferImport',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      transferCreate: {
        id: 'transferCreate',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      transferEdit: {
        id: 'transferEdit',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      transferDestroy: {
        id: 'transferDestroy',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      transferRead: {
        id: 'transferRead',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      transferAutocomplete: {
        id: 'transferAutocomplete',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },

      prescriptionFillImport: {
        id: 'prescriptionFillImport',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      prescriptionFillCreate: {
        id: 'prescriptionFillCreate',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      prescriptionFillEdit: {
        id: 'prescriptionFillEdit',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      prescriptionFillDestroy: {
        id: 'prescriptionFillDestroy',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      prescriptionFillRead: {
        id: 'prescriptionFillRead',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      prescriptionFillAutocomplete: {
        id: 'prescriptionFillAutocomplete',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },

      staffImport: {
        id: 'staffImport',
        allowedRoles: [roles.admin, roles.manager],
      },
      staffCreate: {
        id: 'staffCreate',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      staffEdit: {
        id: 'staffEdit',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      staffDestroy: {
        id: 'staffDestroy',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      staffRead: {
        id: 'staffRead',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
      },
      staffAutocomplete: {
        id: 'staffAutocomplete',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free],
      },

      visitTicketsImport: {
        id: 'visitTicketsImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      visitTicketsCreate: {
        id: 'visitTicketsCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      visitTicketsEdit: {
        id: 'visitTicketsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      visitTicketsDestroy: {
        id: 'visitTicketsDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      visitTicketsRead: {
        id: 'visitTicketsRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      visitTicketsAutocomplete: {
        id: 'visitTicketsAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
