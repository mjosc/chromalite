//
// A mock database without ES6 classes. Implements promise wrappers around
// setTimeout to mimick asyncronous API calls. The response objects are very
// simple abstractions of HTTP responses with the same properties as would be
// expected through the use of axios in production. For example, res.data and
// err.response.data.
//

import { cloneDeep } from 'lodash';

// Schema declaration. Schema != Scheme.
type Scheme = string[];
type SchemeCollection = string[][];

interface ServerResponse {
  data: Scheme | SchemeCollection, // success
}

interface PublicAPI {
  init: (data: SchemeCollection) => void,
  get: (url: string) => Promise<ServerResponse>,
  post: (url: string, data: any) => Promise<ServerResponse>
}

interface Result {
  status: 'success' | 'error',
  description?: string,               // Error
  data?: SchemeCollection | Scheme,   // Success
}

interface SuccessResult extends Result {
  
}

interface ErrorResult extends Result {
}

// not const - user might decide to initialize with other values
let db: SchemeCollection = [
  ['#EF7674', '#EC5766', '#DA344D', '#D91E36', '#C42348'],
  ['#034748', '#1481BA', '#11B5E4'],
  ['#07393C', '#2C666E']
];

const execute = (action: (args: Scheme | void) => Result) => new Promise<ServerResponse>((resolve, reject) => {
  const result = action();
  setTimeout(() => {
    if (result.status === 'error') {
      reject({
        response: {
          data: { status: 400, message: result.description! }
        }
      })
    }
    // resolve({ data: ['#000000', '#111111'] });
    resolve({ data: result.data! })
  }, 1000);
});

const endpoints = {
  schemes: 'api/schemes'
}

const dispatch = (url: string, method: string, data: any = {}) => {
  
  if (url.startsWith(endpoints.schemes)) {
    if (url.length === endpoints.schemes.length) {
      if (method === 'get') {
        return execute(() => ({ status: 'success', data: ['#000000', '#111111'] }));
      } else if (method === 'post') {
        return execute(() => {
          db.push(data);
          return { status: 'success' };
        })
      } // ... Add alternate HTTP methods here. 
    } // ... Add extensions to endpoints.scheme here.
  } // ... Add additional endpoints here.
  return execute(() => ({ status: 'error', description: 'Unknown path.' }));
};

const database: PublicAPI = {
  init: (data: SchemeCollection) => db = cloneDeep(data),
  get: (url: string) => dispatch(url, 'get'),
  post: (url: string, data: any) => dispatch(url, 'post', data)
}

export {
  database
}
