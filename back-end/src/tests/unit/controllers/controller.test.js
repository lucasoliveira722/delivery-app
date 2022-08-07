const { expect } = require('chai');
const sinon = require('sinon');
const LoginController = require('../../../controllers/login.controller');
const LoginService = require('../../../services/login.service');
const {
  successRequest,
  tokenMock,
  wrongEmailRequest,
  wrongEmailResponse,
} = require('../../database-mock/loginMocks');

describe('Login controller', () => {
  const response = {};
  const request = {};

  describe('em caso de requisição com sucesso', () => {
    before(() => {
      request.body = successRequest;

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(tokenMock);

      sinon.stub(LoginService, 'login').resolves(tokenMock);
    });

    after(() => {
      LoginService.login.restore();
    });

    it('retorna o status com o código 200', async () => {
      await LoginController.login(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('retorna um token', async () => {
      const result = await LoginController.login(request, response);
      expect(result).to.be.equal(tokenMock);
    });
  });
});
