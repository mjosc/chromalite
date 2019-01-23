//
// A mock database without ES6 class syntax. Implements promise wrappers around
// setTimeout to mimick asyncronous API calls. The response objects are very
// simple abstractions of HTTP responses with the same properties as would be
// expected through the use of axios in production. For example, res.data and
// err.response.data objects are accessible from a resolved or rejected promise,
// respectively.
//

import { cloneDeep } from 'lodash';

// -----------------------------------------------------------------------------
// Database Schema & Type Definitions
// -----------------------------------------------------------------------------

type Scheme = string[];
type SchemeCollection = string[][];
type HttpMethod = 'get' | 'post';

interface InternalResult {
  status: 'success' | 'error',
  description?: string,               // Error
  data?: SchemeCollection | Scheme,   // Success
}

interface SuccessResult extends InternalResult {
  // Not implemented.
}

interface ErrorResult extends InternalResult {
  // Not implemented.
}

interface ServerResponse {
  data: Scheme | SchemeCollection, // success
}

/**
 * Describes the external API for this module.
 */
interface PublicAPI {
  init: (data: SchemeCollection) => void,
  get: (url: string) => Promise<ServerResponse>,
  post: (url: string, data: any) => Promise<ServerResponse>
}

// -----------------------------------------------------------------------------
// Implementation
// -----------------------------------------------------------------------------

/**
 * Represents the in-memory database.
 */
let db: SchemeCollection = [
  ['#EF7674', '#EC5766', '#DA344D', '#D91E36', '#C42348'],
  ['#034748', '#1481BA', '#11B5E4'],
  ['#07393C', '#2C666E']
];

/**
 * All actionable endpoints. In other words, all endpoints having been mapped to
 * a function returning a Promise<ServerResponse> object.
 */
const endpoints = {
  schemes: 'api/schemes'
}

/**
 * Performs the database operation specified by the 'action' argument. In order to
 * modify the asyncronous response time, the optional 'delay' parameter is
 * provided.
 * 
 * @param {callback} action   Database operation returning an InternalResult object.
 * @param {number} delay      The number of milliseconds to wait before returning
 *                            the result.
 */
const execute = (action: () => InternalResult, delay = 1000) => 
    new Promise<ServerResponse>((resolve, reject) => {

  const result = action();
  setTimeout(() => {
    if (result.status === 'error') {
      reject({
        response: {
          data: { status: 400, message: result.description! }
        }
      })
    }
    resolve({ data: result.data! })
  }, delay);
});

/**
 * Maps the provided url and HTTP method to the desired database operation. Also
 * performs that operation via database.execute.
 * 
 * @param {string} url      Desired endpoint.
 * @param {string} method   HTTP method (e.g. 'post')
 * @param {object} data     Object representing the body of the HTTP request.
 */
const route = (url: string, method: HttpMethod, data: Scheme = []): Promise<ServerResponse> => {
  
  if (url.startsWith(endpoints.schemes)) {
    if (url.length === endpoints.schemes.length) {
      if (method === 'get') {
        return execute(() => ({ status: 'success', data: db }));
      } else if (method === 'post') {
        return execute(() => {
          db.push(data);
          return { status: 'success', data };
        })
      } // ... Add alternate HTTP methods here. 
    } // ... Add extensions to endpoints.scheme here.
  } // ... Add additional endpoints here.
  return execute(() => ({ status: 'error', description: 'Unknown path.' }));
};

/**
 * Implementation wrapper of this module's API.
 */
const database: PublicAPI = {
  init: data => db = cloneDeep(data),
  get: url => route(url, 'get'),
  post: (url, data) => route(url, 'post', data)
}

export {
  database,
  Scheme,
  SchemeCollection
}
