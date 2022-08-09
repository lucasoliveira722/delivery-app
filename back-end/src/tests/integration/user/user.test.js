const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../../api/app');
const {
  shortNameRequest,
  emptyNameRequest,
  noNameRequest,
  invalidEmailRequest,
  noEmailRequest,
  shortPasswordRequest,
  emptyPasswordRequest,
  noPasswordRequest,
} = require('../../database-mock/userMocks');

chai.use(chaiHttp);

describe('Integração - Testa requisição na rota /users/create', () => {
  describe('1 - Casos com chave "name" inválida', () => {
    it('1.1 - "name" com menos de 12 caracteres retorna status 400 e message: "name" length must be at least 12 characters long', async () => {
      return chai
        .request(app)
        .post('/users/create')
        .send(shortNameRequest)
        .then((res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.be.eql(
            '"name" length must be at least 12 characters long'
          );
        });
    });

    it('1.2 - "name" string vazia retorna status 400 e message: "name" is not allowed to be empty', async () => {
      return chai
        .request(app)
        .post('/users/create')
        .send(emptyNameRequest)
        .then((res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.be.eql(
            '"name" is not allowed to be empty'
          );
        });
    });

    it('1.3 - Requisição sem campo "name" retorna status 400 e message: "name" is required', async () => {
      return chai
        .request(app)
        .post('/users/create')
        .send(noNameRequest)
        .then((res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.be.eql('"name" is required');
        });
    });
  });

  describe('2 - Casos com chave "email" inválida', () => {
    it('2.1 - "email" com formatação inválida retorna status 400 e message: "email" must be a valid email', async () => {
      return chai
        .request(app)
        .post('/users/create')
        .send(invalidEmailRequest)
        .then((res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.be.eql('"email" must be a valid email');
        });
    });

    it('2.2 - Requisição sem campo "email" retorna status 400 e message: "email" is required', async () => {
      return chai
        .request(app)
        .post('/users/create')
        .send(noEmailRequest)
        .then((res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.be.eql('"email" is required');
        });
    });
  });

  describe('3 - Caso com chave "password" inválida', () => {
    it('3.1 - "password" com menos de 6 caracteres retorna status 400 e message: "password" length must be at least 6 characters long', async () => {
      return chai
        .request(app)
        .post('/users/create')
        .send(shortPasswordRequest)
        .then((res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.be.eql(
            '"password" length must be at least 6 characters long'
          );
        });
    });

    it('3.2 - "password" string vazia retorna status 400 e message: "password" is not allowed to be empty', async () => {
      return chai
        .request(app)
        .post('/users/create')
        .send(emptyPasswordRequest)
        .then((res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.be.eql(
            '"password" is not allowed to be empty'
          );
        });
    });

    it('3.3 - Requisição sem campo "password" retorna status 400 e message: "password" is required', async () => {
      return chai
        .request(app)
        .post('/users/create')
        .send(noPasswordRequest)
        .then((res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.be.eql('"password" is required');
        });
    });
  });
});
