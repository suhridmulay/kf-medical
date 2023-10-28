export type Nullable<T> = T | null;

export type MedicineCategory = {
    id: string;
    categoryName: string;
}

export type Medicine = {
    centralGST: Nullable<number>;
    stateGST: Nullable<number>;
    compositionName: string;
    genericName: string;
    id: string;
    isCommon: boolean;
    keptInStock: boolean;
    medicineCategory: MedicineCategory;
    medicineCategoryId: string;
    medicineName: string;
}

export type PurchaseOrderEntry = {
    centralGST: string;
    createdAt: string;
    createdBydId: string;
    deletedAt: string | null;
    id: string;
    importHash: null;
    medicideId: string;
    purchaseOrderEntryLookup: string;
    purchaseOrderId: string;
    quantity: number;
    stateGST: string;
    substitutionAllowed: boolean;
    tenantId: string;
    totalCost: string;
    unitCost: string;
    updatedAt: string;
    updatedById: string;
};
export type Vendor = unknown;

export type Invoice = unknown;

export type PurchaseOrder = {
    submittedDate: string | null;
    id: string;
    purchaseOrderNumber: number;
    totalGST: number;
    freightAmount: number;
    discount: number;
    netAmount: number;
    notes: string | null;
    createdAt: string | null;
    updatedAt: string | null;
    deletedAt: string | null;
    vendorId: string;
    tenantId: string;
    vendor: Vendor;
    entries: PurchaseOrderEntry[];
    invoices: Invoice[];
}

type PromisePending = {
    state: 'pending'
}
type PromiseResolved<T> = {
    state: 'resolved',
    payload: T
}
type PromiseRejected<E> = {
    state: 'rejected',
    reason: E
}
export type PromiseTracker<T = unknown, E = unknown> = PromisePending | PromiseResolved<T> | PromiseRejected<E>;