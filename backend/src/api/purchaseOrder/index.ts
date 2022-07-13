export default (app) => {

  app.get(
    `/tenant/:tenantId/purchase-order/total-counts`,
    require('./purchaseOrderCounts').default,
  );

  app.post(
    `/tenant/:tenantId/purchase-order`,
    require('./purchaseOrderCreate').default,
  );
  app.put(
    `/tenant/:tenantId/purchase-order/:id`,
    require('./purchaseOrderUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/purchase-order/import`,
    require('./purchaseOrderImport').default,
  );
  app.delete(
    `/tenant/:tenantId/purchase-order`,
    require('./purchaseOrderDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/purchase-order/autocomplete`,
    require('./purchaseOrderAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/purchase-order`,
    require('./purchaseOrderList').default,
  );
  app.get(
    `/tenant/:tenantId/purchase-order/:id`,
    require('./purchaseOrderFind').default,
  );
};
