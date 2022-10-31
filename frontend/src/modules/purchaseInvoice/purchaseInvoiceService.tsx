import authAxios from 'src/modules/shared/axios/authAxios';
import AuthCurrentTenant from 'src/modules/auth/authCurrentTenant';

export default class PurchaseInvoiceService {
  static async update(id, data) {
    const body = {
      id,
      data,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.put(
      `/tenant/${tenantId}/purchase-invoice/${id}`,
      body,
    );

    return response.data;
  }

  static async destroyAll(ids) {
    const params = {
      ids,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.delete(
      `/tenant/${tenantId}/purchase-invoice`,
      {
        params,
      },
    );

    return response.data;
  }

  static async createChildBatch(data, tenantId) {

    // Check that the expiryDate is filled in & the BatchNumber is present
    if (data.expiryDate && data.batchNumber) {
      if (data.unit === "Strips") {
         data.qtyInStrips = true;
      };

      const body = {
        data,
      }; 

      const response = await authAxios.post(
          `/tenant/${tenantId}/medicine-batch`,
          body,
      );
      return response.data.id;
    } else {
      return null;
    }
  }

  static async create(data) {
    const body = {
      data,
    };
 
    const tenantId = AuthCurrentTenant.get();

    // First create the child batches
    let newBatches: Array<string> = [];
    for (const batch of data.batches) {
      const response = await PurchaseInvoiceService.createChildBatch(batch, tenantId); 
      if (response != null)
        newBatches.push(response);
    }

    data.batches = newBatches;

    const response = await authAxios.post(
      `/tenant/${tenantId}/purchase-invoice`,
      body,
    );

    return response.data;
  }

  static async import(values, importHash) {
    const body = {
      data: values,
      importHash,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.post(
      `/tenant/${tenantId}/purchase-invoice/import`,
      body,
    );

    return response.data;
  }

  static async find(id) {
    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/purchase-invoice/${id}`,
    );

    return response.data;
  }

  static async list(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/purchase-invoice`,
      {
        params,
      },
    );

    return response.data;
  }

  static async listAutocomplete(query, limit) {
    const params = {
      query,
      limit,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/purchase-invoice/autocomplete`,
      {
        params,
      },
    );

    return response.data;
  }
}
