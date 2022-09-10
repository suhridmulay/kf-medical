import Permissions from 'src/security/permissions';
import config from 'src/config';
const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () =>
      import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },
  
  {
    path: '/patient',
    loader: () =>
      import('src/view/patient/list/PatientListPage'),
    permissionRequired: permissions.patientRead,
    exact: true,
  },
  {
    path: '/patient/new',
    loader: () =>
      import('src/view/patient/form/PatientFormPage'),
    permissionRequired: permissions.patientCreate,
    exact: true,
  },
  {
    path: '/patient/importer',
    loader: () =>
      import(
        'src/view/patient/importer/PatientImporterPage'
      ),
    permissionRequired: permissions.patientImport,
    exact: true,
  },
  {
    path: '/patient/:id/edit',
    loader: () =>
      import('src/view/patient/form/PatientFormPage'),
    permissionRequired: permissions.patientEdit,
    exact: true,
  },
  {
    path: '/patient/:id',
    loader: () =>
      import('src/view/patient/view/PatientViewPage'),
    permissionRequired: permissions.patientRead,
    exact: true,
  },

  {
    path: '/health-center',
    loader: () =>
      import('src/view/healthCenter/list/HealthCenterListPage'),
    permissionRequired: permissions.healthCenterRead,
    exact: true,
  },
  {
    path: '/health-center/new',
    loader: () =>
      import('src/view/healthCenter/form/HealthCenterFormPage'),
    permissionRequired: permissions.healthCenterCreate,
    exact: true,
  },
  {
    path: '/health-center/importer',
    loader: () =>
      import(
        'src/view/healthCenter/importer/HealthCenterImporterPage'
      ),
    permissionRequired: permissions.healthCenterImport,
    exact: true,
  },
  {
    path: '/health-center/:id/edit',
    loader: () =>
      import('src/view/healthCenter/form/HealthCenterFormPage'),
    permissionRequired: permissions.healthCenterEdit,
    exact: true,
  },
  {
    path: '/health-center/:id',
    loader: () =>
      import('src/view/healthCenter/view/HealthCenterViewPage'),
    permissionRequired: permissions.healthCenterRead,
    exact: true,
  },

  {
    path: '/patient-visit',
    loader: () =>
      import('src/view/patientVisit/list/PatientVisitListPage'),
    permissionRequired: permissions.patientVisitRead,
    exact: true,
  },
  {
    path: '/patient-visit/new',
    loader: () =>
      import('src/view/patientVisit/form/PatientVisitFormPage'),
    permissionRequired: permissions.patientVisitCreate,
    exact: true,
  },
  {
    path: '/patient-visit/importer',
    loader: () =>
      import(
        'src/view/patientVisit/importer/PatientVisitImporterPage'
      ),
    permissionRequired: permissions.patientVisitImport,
    exact: true,
  },
  {
    path: '/patient-visit/:id/edit',
    loader: () =>
      import('src/view/patientVisit/form/PatientVisitFormPage'),
    permissionRequired: permissions.patientVisitEdit,
    exact: true,
  },
  {
    path: '/patient-visit/:id',
    loader: () =>
      import('src/view/patientVisit/view/PatientVisitViewPage'),
    permissionRequired: permissions.patientVisitRead,
    exact: true,
  },
  {
    path: '/patient-visit/:id/print',
    loader: () =>
      import('src/view/patientVisit/view/PatientVisitPrintPage'),
    permissionRequired: permissions.patientVisitRead,
    exact: true,
  },

  {
    path: '/medicine-enum',
    loader: () =>
      import('src/view/medicineEnum/list/MedicineEnumListPage'),
    permissionRequired: permissions.medicineEnumRead,
    exact: true,
  },
  {
    path: '/medicine-enum/new',
    loader: () =>
      import('src/view/medicineEnum/form/MedicineEnumFormPage'),
    permissionRequired: permissions.medicineEnumCreate,
    exact: true,
  },
  {
    path: '/medicine-enum/importer',
    loader: () =>
      import(
        'src/view/medicineEnum/importer/MedicineEnumImporterPage'
      ),
    permissionRequired: permissions.medicineEnumImport,
    exact: true,
  },
  {
    path: '/medicine-enum/:id/edit',
    loader: () =>
      import('src/view/medicineEnum/form/MedicineEnumFormPage'),
    permissionRequired: permissions.medicineEnumEdit,
    exact: true,
  },
  {
    path: '/medicine-enum/:id',
    loader: () =>
      import('src/view/medicineEnum/view/MedicineEnumViewPage'),
    permissionRequired: permissions.medicineEnumRead,
    exact: true,
  },

  {
    path: '/diagnostic-enum',
    loader: () =>
      import('src/view/diagnosticEnum/list/DiagnosticEnumListPage'),
    permissionRequired: permissions.diagnosticEnumRead,
    exact: true,
  },
  {
    path: '/diagnostic-enum/new',
    loader: () =>
      import('src/view/diagnosticEnum/form/DiagnosticEnumFormPage'),
    permissionRequired: permissions.diagnosticEnumCreate,
    exact: true,
  },
  {
    path: '/diagnostic-enum/importer',
    loader: () =>
      import(
        'src/view/diagnosticEnum/importer/DiagnosticEnumImporterPage'
      ),
    permissionRequired: permissions.diagnosticEnumImport,
    exact: true,
  },
  {
    path: '/diagnostic-enum/:id/edit',
    loader: () =>
      import('src/view/diagnosticEnum/form/DiagnosticEnumFormPage'),
    permissionRequired: permissions.diagnosticEnumEdit,
    exact: true,
  },
  {
    path: '/diagnostic-enum/:id',
    loader: () =>
      import('src/view/diagnosticEnum/view/DiagnosticEnumViewPage'),
    permissionRequired: permissions.diagnosticEnumRead,
    exact: true,
  },

  {
    path: '/doctor',
    loader: () =>
      import('src/view/doctor/list/DoctorListPage'),
    permissionRequired: permissions.doctorRead,
    exact: true,
  },
  {
    path: '/doctor/new',
    loader: () =>
      import('src/view/doctor/form/DoctorFormPage'),
    permissionRequired: permissions.doctorCreate,
    exact: true,
  },
  {
    path: '/doctor/importer',
    loader: () =>
      import(
        'src/view/doctor/importer/DoctorImporterPage'
      ),
    permissionRequired: permissions.doctorImport,
    exact: true,
  },
  {
    path: '/doctor/:id/edit',
    loader: () =>
      import('src/view/doctor/form/DoctorFormPage'),
    permissionRequired: permissions.doctorEdit,
    exact: true,
  },
  {
    path: '/doctor/:id',
    loader: () =>
      import('src/view/doctor/view/DoctorViewPage'),
    permissionRequired: permissions.doctorRead,
    exact: true,
  },

  {
    path: '/patient-document',
    loader: () =>
      import('src/view/patientDocument/list/PatientDocumentListPage'),
    permissionRequired: permissions.patientDocumentRead,
    exact: true,
  },
  {
    path: '/patient-document/new',
    loader: () =>
      import('src/view/patientDocument/form/PatientDocumentFormPage'),
    permissionRequired: permissions.patientDocumentCreate,
    exact: true,
  },
  {
    path: '/patient-document/importer',
    loader: () =>
      import(
        'src/view/patientDocument/importer/PatientDocumentImporterPage'
      ),
    permissionRequired: permissions.patientDocumentImport,
    exact: true,
  },
  {
    path: '/patient-document/:id/edit',
    loader: () =>
      import('src/view/patientDocument/form/PatientDocumentFormPage'),
    permissionRequired: permissions.patientDocumentEdit,
    exact: true,
  },
  {
    path: '/patient-document/:id',
    loader: () =>
      import('src/view/patientDocument/view/PatientDocumentViewPage'),
    permissionRequired: permissions.patientDocumentRead,
    exact: true,
  },

  {
    path: '/site-inventory',
    loader: () =>
      import('src/view/siteInventory/list/SiteInventoryListPage'),
    permissionRequired: permissions.siteInventoryRead,
    exact: true,
  },
  {
    path: '/site-inventory/new',
    loader: () =>
      import('src/view/siteInventory/form/SiteInventoryFormPage'),
    permissionRequired: permissions.siteInventoryCreate,
    exact: true,
  },
  {
    path: '/site-inventory/importer',
    loader: () =>
      import(
        'src/view/siteInventory/importer/SiteInventoryImporterPage'
      ),
    permissionRequired: permissions.siteInventoryImport,
    exact: true,
  },
  {
    path: '/site-inventory/:id/edit',
    loader: () =>
      import('src/view/siteInventory/form/SiteInventoryFormPage'),
    permissionRequired: permissions.siteInventoryEdit,
    exact: true,
  },
  {
    path: '/site-inventory/:id',
    loader: () =>
      import('src/view/siteInventory/view/SiteInventoryViewPage'),
    permissionRequired: permissions.siteInventoryRead,
    exact: true,
  },

  {
    path: '/symptoms-enum',
    loader: () =>
      import('src/view/symptomsEnum/list/SymptomsEnumListPage'),
    permissionRequired: permissions.symptomsEnumRead,
    exact: true,
  },
  {
    path: '/symptoms-enum/new',
    loader: () =>
      import('src/view/symptomsEnum/form/SymptomsEnumFormPage'),
    permissionRequired: permissions.symptomsEnumCreate,
    exact: true,
  },
  {
    path: '/symptoms-enum/importer',
    loader: () =>
      import(
        'src/view/symptomsEnum/importer/SymptomsEnumImporterPage'
      ),
    permissionRequired: permissions.symptomsEnumImport,
    exact: true,
  },
  {
    path: '/symptoms-enum/:id/edit',
    loader: () =>
      import('src/view/symptomsEnum/form/SymptomsEnumFormPage'),
    permissionRequired: permissions.symptomsEnumEdit,
    exact: true,
  },
  {
    path: '/symptoms-enum/:id',
    loader: () =>
      import('src/view/symptomsEnum/view/SymptomsEnumViewPage'),
    permissionRequired: permissions.symptomsEnumRead,
    exact: true,
  },

  {
    path: '/medical-history',
    loader: () =>
      import('src/view/medicalHistory/list/MedicalHistoryListPage'),
    permissionRequired: permissions.medicalHistoryRead,
    exact: true,
  },
  {
    path: '/medical-history/new',
    loader: () =>
      import('src/view/medicalHistory/form/MedicalHistoryFormPage'),
    permissionRequired: permissions.medicalHistoryCreate,
    exact: true,
  },
  {
    path: '/medical-history/importer',
    loader: () =>
      import(
        'src/view/medicalHistory/importer/MedicalHistoryImporterPage'
      ),
    permissionRequired: permissions.medicalHistoryImport,
    exact: true,
  },
  {
    path: '/medical-history/:id/edit',
    loader: () =>
      import('src/view/medicalHistory/form/MedicalHistoryFormPage'),
    permissionRequired: permissions.medicalHistoryEdit,
    exact: true,
  },
  {
    path: '/medical-history/:id',
    loader: () =>
      import('src/view/medicalHistory/view/MedicalHistoryViewPage'),
    permissionRequired: permissions.medicalHistoryRead,
    exact: true,
  },

  {
    path: '/chronic-disease-enum',
    loader: () =>
      import('src/view/chronicDiseaseEnum/list/ChronicDiseaseEnumListPage'),
    permissionRequired: permissions.chronicDiseaseEnumRead,
    exact: true,
  },
  {
    path: '/chronic-disease-enum/new',
    loader: () =>
      import('src/view/chronicDiseaseEnum/form/ChronicDiseaseEnumFormPage'),
    permissionRequired: permissions.chronicDiseaseEnumCreate,
    exact: true,
  },
  {
    path: '/chronic-disease-enum/importer',
    loader: () =>
      import(
        'src/view/chronicDiseaseEnum/importer/ChronicDiseaseEnumImporterPage'
      ),
    permissionRequired: permissions.chronicDiseaseEnumImport,
    exact: true,
  },
  {
    path: '/chronic-disease-enum/:id/edit',
    loader: () =>
      import('src/view/chronicDiseaseEnum/form/ChronicDiseaseEnumFormPage'),
    permissionRequired: permissions.chronicDiseaseEnumEdit,
    exact: true,
  },
  {
    path: '/chronic-disease-enum/:id',
    loader: () =>
      import('src/view/chronicDiseaseEnum/view/ChronicDiseaseEnumViewPage'),
    permissionRequired: permissions.chronicDiseaseEnumRead,
    exact: true,
  },

  {
    path: '/medicine-category-enum',
    loader: () =>
      import('src/view/medicineCategoryEnum/list/MedicineCategoryEnumListPage'),
    permissionRequired: permissions.medicineCategoryEnumRead,
    exact: true,
  },
  {
    path: '/medicine-category-enum/new',
    loader: () =>
      import('src/view/medicineCategoryEnum/form/MedicineCategoryEnumFormPage'),
    permissionRequired: permissions.medicineCategoryEnumCreate,
    exact: true,
  },
  {
    path: '/medicine-category-enum/importer',
    loader: () =>
      import(
        'src/view/medicineCategoryEnum/importer/MedicineCategoryEnumImporterPage'
      ),
    permissionRequired: permissions.medicineCategoryEnumImport,
    exact: true,
  },
  {
    path: '/medicine-category-enum/:id/edit',
    loader: () =>
      import('src/view/medicineCategoryEnum/form/MedicineCategoryEnumFormPage'),
    permissionRequired: permissions.medicineCategoryEnumEdit,
    exact: true,
  },
  {
    path: '/medicine-category-enum/:id',
    loader: () =>
      import('src/view/medicineCategoryEnum/view/MedicineCategoryEnumViewPage'),
    permissionRequired: permissions.medicineCategoryEnumRead,
    exact: true,
  },

  {
    path: '/vendor',
    loader: () =>
      import('src/view/vendor/list/VendorListPage'),
    permissionRequired: permissions.vendorRead,
    exact: true,
  },
  {
    path: '/vendor/new',
    loader: () =>
      import('src/view/vendor/form/VendorFormPage'),
    permissionRequired: permissions.vendorCreate,
    exact: true,
  },
  {
    path: '/vendor/importer',
    loader: () =>
      import(
        'src/view/vendor/importer/VendorImporterPage'
      ),
    permissionRequired: permissions.vendorImport,
    exact: true,
  },
  {
    path: '/vendor/:id/edit',
    loader: () =>
      import('src/view/vendor/form/VendorFormPage'),
    permissionRequired: permissions.vendorEdit,
    exact: true,
  },
  {
    path: '/vendor/:id',
    loader: () =>
      import('src/view/vendor/view/VendorViewPage'),
    permissionRequired: permissions.vendorRead,
    exact: true,
  },

  {
    path: '/purchase-order',
    loader: () =>
      import('src/view/purchaseOrder/list/PurchaseOrderListPage'),
    permissionRequired: permissions.purchaseOrderRead,
    exact: true,
  },
  {
    path: '/purchase-order/new',
    loader: () =>
      import('src/view/purchaseOrder/form/PurchaseOrderFormPage'),
    permissionRequired: permissions.purchaseOrderCreate,
    exact: true,
  },
  {
    path: '/purchase-order/importer',
    loader: () =>
      import(
        'src/view/purchaseOrder/importer/PurchaseOrderImporterPage'
      ),
    permissionRequired: permissions.purchaseOrderImport,
    exact: true,
  },
  {
    path: '/purchase-order/:id/edit',
    loader: () =>
      import('src/view/purchaseOrder/form/PurchaseOrderFormPage'),
    permissionRequired: permissions.purchaseOrderEdit,
    exact: true,
  },
  {
    path: '/purchase-order/:id',
    loader: () =>
      import('src/view/purchaseOrder/view/PurchaseOrderViewPage'),
    permissionRequired: permissions.purchaseOrderRead,
    exact: true,
  },
  {
    path: '/purchase-order/:id/print',
    loader: () =>
      import('src/view/purchaseOrder/view/PurchaseOrderPrintPage'),
    permissionRequired: permissions.purchaseOrderRead,
    exact: true,
  },

  {
    path: '/purchase-order-entry',
    loader: () =>
      import('src/view/purchaseOrderEntry/list/PurchaseOrderEntryListPage'),
    permissionRequired: permissions.purchaseOrderEntryRead,
    exact: true,
  },
  {
    path: '/purchase-order-entry/new',
    loader: () =>
      import('src/view/purchaseOrderEntry/form/PurchaseOrderEntryFormPage'),
    permissionRequired: permissions.purchaseOrderEntryCreate,
    exact: true,
  },
  {
    path: '/purchase-order-entry/importer',
    loader: () =>
      import(
        'src/view/purchaseOrderEntry/importer/PurchaseOrderEntryImporterPage'
      ),
    permissionRequired: permissions.purchaseOrderEntryImport,
    exact: true,
  },
  {
    path: '/purchase-order-entry/:id/edit',
    loader: () =>
      import('src/view/purchaseOrderEntry/form/PurchaseOrderEntryFormPage'),
    permissionRequired: permissions.purchaseOrderEntryEdit,
    exact: true,
  },
  {
    path: '/purchase-order-entry/:id',
    loader: () =>
      import('src/view/purchaseOrderEntry/view/PurchaseOrderEntryViewPage'),
    permissionRequired: permissions.purchaseOrderEntryRead,
    exact: true,
  },

  {
    path: '/medicine-batch',
    loader: () =>
      import('src/view/medicineBatch/list/MedicineBatchListPage'),
    permissionRequired: permissions.medicineBatchRead,
    exact: true,
  },
  {
    path: '/medicine-batch/new',
    loader: () =>
      import('src/view/medicineBatch/form/MedicineBatchFormPage'),
    permissionRequired: permissions.medicineBatchCreate,
    exact: true,
  },
  {
    path: '/medicine-batch/importer',
    loader: () =>
      import(
        'src/view/medicineBatch/importer/MedicineBatchImporterPage'
      ),
    permissionRequired: permissions.medicineBatchImport,
    exact: true,
  },
  {
    path: '/medicine-batch/:id/edit',
    loader: () =>
      import('src/view/medicineBatch/form/MedicineBatchFormPage'),
    permissionRequired: permissions.medicineBatchEdit,
    exact: true,
  },
  {
    path: '/medicine-batch/:id',
    loader: () =>
      import('src/view/medicineBatch/view/MedicineBatchViewPage'),
    permissionRequired: permissions.medicineBatchRead,
    exact: true,
  },

  {
    path: '/purchase-invoice',
    loader: () =>
      import('src/view/purchaseInvoice/list/PurchaseInvoiceListPage'),
    permissionRequired: permissions.purchaseInvoiceRead,
    exact: true,
  },
  {
    path: '/purchase-invoice/new',
    loader: () =>
      import('src/view/purchaseInvoice/form/PurchaseInvoiceFormPage'),
    permissionRequired: permissions.purchaseInvoiceCreate,
    exact: true,
  },
  {
    path: '/purchase-invoice/new/:purchaseOrderId',
    loader: () =>
      import('src/view/purchaseInvoice/form/PurchaseInvoiceFormPage'),
    permissionRequired: permissions.purchaseInvoiceCreate,
    exact: true,
  },
  {
    path: '/purchase-invoice/importer',
    loader: () =>
      import(
        'src/view/purchaseInvoice/importer/PurchaseInvoiceImporterPage'
      ),
    permissionRequired: permissions.purchaseInvoiceImport,
    exact: true,
  },
  {
    path: '/purchase-invoice/:id/edit',
    loader: () =>
      import('src/view/purchaseInvoice/form/PurchaseInvoiceFormPage'),
    permissionRequired: permissions.purchaseInvoiceEdit,
    exact: true,
  },
  {
    path: '/purchase-invoice/:id',
    loader: () =>
      import('src/view/purchaseInvoice/view/PurchaseInvoiceViewPage'),
    permissionRequired: permissions.purchaseInvoiceRead,
    exact: true,
  },

  {
    path: '/transfer',
    loader: () =>
      import('src/view/transfer/list/TransferListPage'),
    permissionRequired: permissions.transferRead,
    exact: true,
  },
  {
    path: '/transfer/new',
    loader: () =>
      import('src/view/transfer/form/TransferFormPage'),
    permissionRequired: permissions.transferCreate,
    exact: true,
  },
  {
    path: '/transfer/importer',
    loader: () =>
      import(
        'src/view/transfer/importer/TransferImporterPage'
      ),
    permissionRequired: permissions.transferImport,
    exact: true,
  },
  {
    path: '/transfer/:id/edit',
    loader: () =>
      import('src/view/transfer/form/TransferFormPage'),
    permissionRequired: permissions.transferEdit,
    exact: true,
  },
  {
    path: '/transfer/:id',
    loader: () =>
      import('src/view/transfer/view/TransferViewPage'),
    permissionRequired: permissions.transferRead,
    exact: true,
  },

  {
    path: '/prescription-fill',
    loader: () =>
      import('src/view/prescriptionFill/list/PrescriptionFillListPage'),
    permissionRequired: permissions.prescriptionFillRead,
    exact: true,
  },
  {
    path: '/prescription-fill/new',
    loader: () =>
      import('src/view/prescriptionFill/form/PrescriptionFillFormPage'),
    permissionRequired: permissions.prescriptionFillCreate,
    exact: true,
  },
  {
    path: '/prescription-fill/new/:patientVisitId',
    loader: () =>
      import('src/view/prescriptionFill/form/PrescriptionFillFormPage'),
    permissionRequired: permissions.prescriptionFillCreate,
    exact: true,
  },
  {
    path: '/prescription-fill/importer',
    loader: () =>
      import(
        'src/view/prescriptionFill/importer/PrescriptionFillImporterPage'
      ),
    permissionRequired: permissions.prescriptionFillImport,
    exact: true,
  },
  {
    path: '/prescription-fill/:id/edit',
    loader: () =>
      import('src/view/prescriptionFill/form/PrescriptionFillFormPage'),
    permissionRequired: permissions.prescriptionFillEdit,
    exact: true,
  },
  {
    path: '/prescription-fill/:id',
    loader: () =>
      import('src/view/prescriptionFill/view/PrescriptionFillViewPage'),
    permissionRequired: permissions.prescriptionFillRead,
    exact: true,
  },

  {
    path: '/staff',
    loader: () =>
      import('src/view/staff/list/StaffListPage'),
    permissionRequired: permissions.staffRead,
    exact: true,
  },
  {
    path: '/staff/new',
    loader: () =>
      import('src/view/staff/form/StaffFormPage'),
    permissionRequired: permissions.staffCreate,
    exact: true,
  },
  {
    path: '/staff/importer',
    loader: () =>
      import(
        'src/view/staff/importer/StaffImporterPage'
      ),
    permissionRequired: permissions.staffImport,
    exact: true,
  },
  {
    path: '/staff/:id/edit',
    loader: () =>
      import('src/view/staff/form/StaffFormPage'),
    permissionRequired: permissions.staffEdit,
    exact: true,
  },
  {
    path: '/staff/:id',
    loader: () =>
      import('src/view/staff/view/StaffViewPage'),
    permissionRequired: permissions.staffRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () =>
      import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
