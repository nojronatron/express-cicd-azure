const request = require('supertest');
const app = require('../src/serverApp');

// check out [how-to-test-expressjs-with-jest-and-supertest](https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/)

// handle database connection for the tests
// describe('Test the database connection', () => {
//   beforeAll(() => {
//     mogoDB.connect();
//   });
//   afterAll((done) => {
//     mongoDB.disconnect(done);
//   });
// });

describe('Test the root path', () => {
  test('It should respond 200 to the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
  test('GET method should return the correct message', async () => {
    const response = await request(app)
      .get('/')
      .then((response) => {
        expect(response.text).toBe('Ello Werld!');
      });
  });
});

describe('Test the POST /:id path', () => {
  test('It should respond 200 to the POST method', async () => {
    const response = await request(app)
      .post('/testInput')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
  test('POST method should return the correct message', async () => {
    const response = await request(app)
      .post('/testInput')
      .then((response) => {
        expect(response.body.message).toBe('Added testInput');
      });
  });
});

// module.exports = {
//   mongoose,
//   connect: () => {
//     this.mongoose.Promise = Promise;
//     this.mongoose.connect(config.database[process.env.NODE_ENV]);
//   },
//   disconnect: (done) => {
//     this.mongoose.disconnect(done);
//   },
// };
