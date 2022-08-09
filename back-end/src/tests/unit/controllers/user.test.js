const { expect } = require('chai');
const sinon = require('sinon');
const UserController = require('../../../controllers/user.controller');
const UserService = require('../../../services/user.service');
const { tokenMock } = require('../../database-mock/loginMocks');
const { sucessCreateUserRequest } = require('../../database-mock/userMocks');

describe('User controller', () => {
  const response = {};
  const request = {};

  describe('1 - Caso de requisição com sucesso', () => {
    before(() => {
      request.body = sucessCreateUserRequest;

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(tokenMock);

      sinon.stub(UserService, 'create').resolves(tokenMock);
    });

    after(() => {
      UserService.create.restore();
    });

    it('1.1 - Retorna o status com o código 200', async () => {
      await UserController.create(request, response);
      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('1.2 - Retorna um token', async () => {
      const result = await UserController.create(request, response);
      expect(result).to.be.equal(tokenMock);
    });
  });
});
