export default (app) => {
  app.post(
    `/tenant/:tenantId/purchase-order-entry`,
    require('./purchaseOrderEntryCreate').default,
  );
  app.put(
    `/tenant/:tenantId/purchase-order-entry/:id`,
    require('./purchaseOrderEntryUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/purchase-order-entry/import`,
    require('./purchaseOrderEntryImport').default,
  );
  app.delete(
    `/tenant/:tenantId/purchase-order-entry`,
    require('./purchaseOrderEntryDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/purchase-order-entry/autocomplete`,
    require('./purchaseOrderEntryAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/purchase-order-entry`,
    require('./purchaseOrderEntryList').default,
  );
  app.get(
    `/tenant/:tenantId/purchase-order-entry/:id`,
    require('./purchaseOrderEntryFind').default,
  );
};
