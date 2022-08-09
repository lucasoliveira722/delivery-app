const { expect, assert } = require('chai');
const sinon = require('sinon');
const { User } = require('../../../database/models');
const UserService = require('../../../services/user.service');
const jwt = require('jsonwebtoken');
const {
  sucessCreateUserRequest,
  userDataValuesMock,
} = require('../../database-mock/userMocks');
const { tokenMock } = require('../../database-mock/loginMocks');
const errorObj = require('../../../helpers/errorObj');

describe('User service', () => {
  before(() => {
    sinon
      .stub(User, 'findAll')
      .onCall(0)
      .resolves([])
      .onCall(1)
      .resolves([userDataValuesMock]);
    sinon.stub(User, 'create').resolves(userDataValuesMock);
    sinon.stub(jwt, 'sign').resolves(tokenMock.token);
  });

  after(() => {
    sinon.restore();
  });

  describe('1 - Caso de requisição com sucesso', () => {
    it('1.1 - Retorna um token', async () => {
      const result = await UserService.create(sucessCreateUserRequest);
      expect(result).to.be.deep.equal(tokenMock.token);
    });
  });

  describe('2 - Caso de usuário já cadastrado', () => {
    it('2.1 - Lança erro com status 409 e com mensagem "Usuário já cadastrado"', async () => {
      try {
        await UserService.create(sucessCreateUserRequest);
      } catch (err) {
        expect(err).to.eql(errorObj(409, 'Usuário já cadastrado'));
      }
    });
  });
});
