const chai = require('chai');
const sinon = require('sinon');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../../api/app');
const UserService = require('../../../services/user.service');
const { tokenMock } = require('../../database-mock/loginMocks');
const {
  shortNameRequest,
  emptyNameRequest,
  noNameRequest,
  invalidEmailRequest,
  noEmailRequest,
  shortPasswordRequest,
  emptyPasswordRequest,
  noPasswordRequest,
  invalidRoleRequest,
  sucessCreateUserRequest,
} = require('../../database-mock/userMocks');

chai.use(chaiHttp);

describe('Integração - Testa requisição na rota /users/create', () => {
  describe('1 - Caso com requisição válida', () => {
    before(() => {
      sinon.stub(UserService, 'create').resolves(tokenMock);
    });

    after(() => {
      sinon.restore();
    });
    it('1.1 - Retorna status 201 e um token', async () => {
      return chai
        .request(app)
        .post('/users/create')
        .send(sucessCreateUserRequest)
        .then((res) => {
          expect(res).to.have.status(201);
          expect(res.body.token).to.be.eql(tokenMock);
        });
    });
  });

  describe('2 - Casos com chave "name" inválida', () => {
    it('2.1 - "name" com menos de 12 caracteres retorna status 400 e message: "name" length must be at least 12 characters long', async () => {
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

    it('2.2 - "name" string vazia retorna status 400 e message: "name" is not allowed to be empty', async () => {
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

    it('2.3 - Requisição sem campo "name" retorna status 400 e message: "name" is required', async () => {
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

  describe('3 - Casos com chave "email" inválida', () => {
    it('3.1 - "email" com formatação inválida retorna status 400 e message: "email" must be a valid email', async () => {
      return chai
        .request(app)
        .post('/users/create')
        .send(invalidEmailRequest)
        .then((res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.be.eql('"email" must be a valid email');
        });
    });

    it('3.2 - Requisição sem campo "email" retorna status 400 e message: "email" is required', async () => {
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

  describe('4 - Caso com chave "password" inválida', () => {
    it('4.1 - "password" com menos de 6 caracteres retorna status 400 e message: "password" length must be at least 6 characters long', async () => {
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

    it('4.2 - "password" string vazia retorna status 400 e message: "password" is not allowed to be empty', async () => {
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

    it('4.3 - Requisição sem campo "password" retorna status 400 e message: "password" is required', async () => {
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

  describe('5 - Caso com chave "role" inválida', () => {
    it('5.1 - Retorna status 400 e message: Invalid role option', async () => {
      return chai
        .request(app)
        .post('/users/create')
        .send(invalidRoleRequest)
        .then((res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.be.eql('Invalid role option');
        });
    });
  });
});
