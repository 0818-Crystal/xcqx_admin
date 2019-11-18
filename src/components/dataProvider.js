import {
  GET_LIST,
  GET_ONE,
  GET_MANY,
  GET_MANY_REFERENCE,
  CREATE,
  UPDATE,
  DELETE,
  fetchUtils
} from "react-admin";
import { stringify } from "query-string";
import { DELETE_MANY } from "ra-core";
import humps from "humps";
const API_URL = "http://203.195.230.234:8080";

/**
 * @param {String} type One of the constants appearing at the top of this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The Data Provider request params, depending on the type
 * @returns {Object} { url, options } The HTTP request parameters
 */
const convertDataProviderRequestToHTTP = (type, resource, params) => {
  switch (type) {
    case GET_LIST: {
      var filter = params.filter;
      console.log(filter);
      if (filter.length === 0) filter = humps.decamelize(filter);

      if (
        params.filter.hasOwnProperty("time_start") &&
        params.filter.hasOwnProperty("time_end")
      ) {
        filter["createTime"] = JSON.stringify([
          `${params.filter.time_start}`,
          `${params.filter.time_end}`
        ]);
        delete filter.time_start;
        delete filter.time_end;
      }
      const { page, perPage } = params.pagination;
      const { field, order } = params.sort;
      var camelField = humps.decamelize(field);
      const query = {
        sort: JSON.stringify([camelField, order]),
        range: JSON.stringify([page, perPage]),

        filter: JSON.stringify(filter)
      };
      console.log(`${API_URL}/${resource}?${stringify(query)}`);

      return { url: `${API_URL}/${resource}?${stringify(query)}` };
    }
    case GET_ONE:
      console.log("get-one");
      console.log(`${API_URL}/${resource}/${params.id}`);

      return { url: `${API_URL}/${resource}/${params.id}` };
    case GET_MANY: {
      console.log(params);
      const query = {
        filter: JSON.stringify({ id: params.ids })
      };
      if (resource === "user") {
        const query = {
          column: "open_id",
          value: JSON.stringify(params.ids)
        };
        console.log(`${API_URL}/${resource}/many?${stringify(query)}`);
        return { url: `${API_URL}/${resource}/many?${stringify(query)}` };
      }
      return { url: `${API_URL}/${resource}?${stringify(query)}` };
    }
    case GET_MANY_REFERENCE: {
      console.log("get-refer");
      console.log(params);
      const { page, perPage } = params.pagination;
      const { field, order } = params.sort;
      const query = {
        sort: JSON.stringify([field, order]),
        range: JSON.stringify([page, perPage]),
        filter: JSON.stringify({ ...params.filter, [params.target]: params.id })
      };
      console.log(query);
      return { url: `${API_URL}/${resource}?${stringify(query)}` };
    }
    case UPDATE:
      console.log(params.data);
      if (resource === "essay" || resource === "goods") {
        let formData = new FormData();
        for (let key in params.data) {
          if (key === "file") {
            formData.append(key, params.data[key].rawFile);
          } else {
            formData.append(key, params.data[key]);
          }
        }
        return {
          url: `${API_URL}/${resource}/${params.id}`,
          options: {
            method: "PUT",
            headers: new Headers({
              //    'Content-Type': 'multipart/form-data;boundary=ASD;charset=UTF-8',
            }),
            body: formData
          }
        };
      }
      return {
        url: `${API_URL}/${resource}/${params.id}`,
        options: { method: "PUT", body: JSON.stringify(params.data) }
      };
    case CREATE:
      console.log(params.data);
      if (resource === "essay" || resource === "goods") {
        let formData = new FormData();
        for (let key in params.data) {
          if (key === "file") {
            formData.append(key, params.data[key].rawFile);
          } else {
            formData.append(key, params.data[key]);
          }
        }
        return {
          url: `${API_URL}/${resource}`,
          options: {
            method: "POST",
            headers: new Headers({
              //    'Content-Type': 'multipart/form-data;boundary=ASD;charset=UTF-8',
            }),
            body: formData
          }
        };
      }
      return {
        url: `${API_URL}/${resource}`,
        options: { method: "POST", body: JSON.stringify(params.data) }
      };
    case DELETE:
      return {
        url: `${API_URL}/${resource}/${params.id}`,
        options: { method: "DELETE" }
      };
    case DELETE_MANY:
      const query = {
        ids: JSON.stringify(params.ids)
      };
      return {
        url: `${API_URL}/${resource}?${stringify(query)}`,
        options: { method: "DELETE" }
      };
    default:
      throw new Error(`Unsupported fetch action type ${type}`);
  }
};

/**
 * @param {Object} response HTTP response from fetch()
 * @param {String} type One of the constants appearing at the top of this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The Data Provider request params, depending on the type
 * @returns {Object} Data Provider response
 */
const convertHTTPResponseToDataProvider = (
  response,
  type,
  resource,
  params
) => {
  const { headers, json } = response;
  console.log(json);
  switch (type) {
    case GET_LIST:
      return {
        data: json.resultBody.records.map(x => x),
        total: json.resultBody.total
      };
    case CREATE:
      return { data: { ...params.data, id: json.resultBody.id } };
    case DELETE_MANY:
      return { data: params.ids };
    case GET_MANY:
      console.log(json.resultBody);
      return { data: json.resultBody };
    default:
      return { data: json.resultBody };
  }
};

/**
 * @param {string} type Request type, e.g GET_LIST
 * @param {string} resource Resource name, e.g. "posts"
 * @param {Object} payload Request parameters. Depends on the request type
 * @returns {Promise} the Promise for response
 */
export default (type, resource, params) => {
  const { fetchJson } = fetchUtils;
  const { url, options } = convertDataProviderRequestToHTTP(
    type,
    resource,
    params
  );
  return fetchJson(url, options).then(response =>
    convertHTTPResponseToDataProvider(response, type, resource, params)
  );
};
