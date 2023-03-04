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