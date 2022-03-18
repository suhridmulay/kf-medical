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

      medicineSuppliesImport: {
        id: 'medicineSuppliesImport',
        allowedRoles: [roles.admin, roles.manager, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      medicineSuppliesCreate: {
        id: 'medicineSuppliesCreate',
        allowedRoles: [roles.admin, roles.manager, roles.data_entry, roles.pharmacist],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      medicineSuppliesEdit: {
        id: 'medicineSuppliesEdit',
        allowedRoles: [roles.admin, roles.manager, roles.data_entry, roles.pharmacist],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      medicineSuppliesDestroy: {
        id: 'medicineSuppliesDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      medicineSuppliesRead: {
        id: 'medicineSuppliesRead',
        allowedRoles: [roles.admin, roles.manager, roles.data_entry, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      medicineSuppliesAutocomplete: {
        id: 'medicineSuppliesAutocomplete',
        allowedRoles: [roles.admin, roles.manager, roles.data_entry, roles.pharmacist],
        allowedPlans: [plans.free],
      },

      medicineInventoryImport: {
        id: 'medicineInventoryImport',
        allowedRoles: [roles.admin, roles.manager, roles.data_entry, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      medicineInventoryCreate: {
        id: 'medicineInventoryCreate',
        allowedRoles: [roles.admin, roles.manager, roles.data_entry, roles.pharmacist],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      medicineInventoryEdit: {
        id: 'medicineInventoryEdit',
        allowedRoles: [roles.admin, roles.manager, roles.data_entry, roles.pharmacist],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      medicineInventoryDestroy: {
        id: 'medicineInventoryDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
        allowedStorage: [

        ],
      },
      medicineInventoryRead: {
        id: 'medicineInventoryRead',
        allowedRoles: [roles.admin, roles.manager, roles.data_entry, roles.pharmacist],
        allowedPlans: [plans.free],
      },
      medicineInventoryAutocomplete: {
        id: 'medicineInventoryAutocomplete',
        allowedRoles: [roles.admin, roles.manager, roles.data_entry, roles.pharmacist],
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
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      medicineCategoryEnumCreate: {
        id: 'medicineCategoryEnumCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      medicineCategoryEnumEdit: {
        id: 'medicineCategoryEnumEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      medicineCategoryEnumDestroy: {
        id: 'medicineCategoryEnumDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      medicineCategoryEnumRead: {
        id: 'medicineCategoryEnumRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      medicineCategoryEnumAutocomplete: {
        id: 'medicineCategoryEnumAutocomplete',
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
