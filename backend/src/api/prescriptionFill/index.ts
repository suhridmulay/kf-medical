export default (app) => {
  app.post(
    `/tenant/:tenantId/prescription-fill`,
    require('./prescriptionFillCreate').default,
  );
  app.put(
    `/tenant/:tenantId/prescription-fill/:id`,
    require('./prescriptionFillUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/prescription-fill/import`,
    require('./prescriptionFillImport').default,
  );
  app.delete(
    `/tenant/:tenantId/prescription-fill`,
    require('./prescriptionFillDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/prescription-fill/autocomplete`,
    require('./prescriptionFillAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/prescription-fill`,
    require('./prescriptionFillList').default,
  );
  app.get(
    `/tenant/:tenantId/prescription-fill/:id`,
    require('./prescriptionFillFind').default,
  );
};
