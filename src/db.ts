//
// A mock database without ES6 classes. Implements promise wrappers around
// setTimeout to mimick asyncronous API calls. The response objects are very
// simple abstractions of HTTP responses with the same properties as would be
// expected through the use of axios in production. For example, res.data and
// err.response.data.
//

// In a relational database, Scheme would represent a row in the
// SchemeCollection table.
type Scheme = string[];
type SchemeCollection = string[][];

interface ServerResponse {
  data: Scheme | SchemeCollection, // success
}

interface Api {
  add: (scheme: string[]) => Promise<ServerResponse>,
  get: (index: number) => Promise<ServerResponse>
}

const data: SchemeCollection = [
  ['#EF7674', '#EC5766', '#DA344D', '#D91E36', '#C42348'],
  ['#034748', '#1481BA', '#11B5E4'],
  ['#07393C', '#2C666E']
];

const error = {
  response: {
    data: { status: 400, message: 'Operation failed.'}
  }
}

const operation = (action: () => string) => new Promise<ServerResponse>((resolve, reject) => {
  const result = action();
  setTimeout(() => {
    if (result === 'success') {
      resolve({ data: ['#000000', '#111111'] })
    }
    reject(error);
  }, 1000);
});

const database = ((init: SchemeCollection = data): Api => {
  const db: SchemeCollection = init;
  return {
    add: (scheme: Scheme) => operation(() => 'success'),
    get: (index: number) => operation(() => 'error')
  }
})();

export {
  database
}
