const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const app = require('../../../api/app');
const { User } = require('../../../database/models');
const {
  wrongEmailRequest,
  invalidEmailRequest,
  shortPasswordRequest,
  wrongPasswordRequest,
  userRequest,
  userDataValuesMock,
  tokenMock,
  noPasswordRequest,
} = require('../../database-mock/loginMocks');

chai.use(chaiHttp);

describe('Testa requisição na rota /login', () => {
  describe('em caso com e-mail não cadastrado no banco', () => {
    before(async () => {
      sinon.stub(User, 'findOne').resolves(null);
    });

    after(() => {
      User.findOne.restore();
    });

    it('retorna status 404 e objeto com message "E-mail não cadastrado"', async () => {
      return chai
        .request(app)
        .post('/login')
        .send(wrongEmailRequest)
        .then((res) => {
          expect(res).to.have.status(404);
          expect(res.body.message).to.be.eql('E-mail não cadastrado');
        });
    });
  });

  describe('em caso com e-mail com formatação inválida', () => {
    it('retorna status 400 e objeto com message "Formatação do e-mail inválida"', async () => {
      return chai
        .request(app)
        .post('/login')
        .send(invalidEmailRequest)
        .then((res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.be.eql('Formatação do e-mail inválida');
        });
    });
  });

  describe('em caso com senha com menos de 06 caracteres', () => {
    it('retorna status 400 e objeto com message "Senha deve ter ao menos 06 caracteres"', async () => {
      return chai
        .request(app)
        .post('/login')
        .send(shortPasswordRequest)
        .then((res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.be.eql(
            'Senha deve ter ao menos 06 caracteres'
          );
        });
    });
  });

  describe('em caso com senha incorreta', () => {
    it('retorna status 401 e objeto com message "E-mail ou senha incorretos"', async () => {
      return chai
        .request(app)
        .post('/login')
        .send(wrongPasswordRequest)
        .then((res) => {
          expect(res).to.have.status(401);
          expect(res.body.message).to.be.eql('E-mail ou senha incorretos');
        });
    });
  });

  describe('em caso de erro não tratado', () => {
    before(async () => {
      sinon.stub(User, 'findOne').resolves(null);
    });

    after(() => {
      User.findOne.restore();
    });

    it('se retorna status 500 e objeto com message "Internal server error"', async () => {
      return chai
        .request(app)
        .post('/login')
        .send(noPasswordRequest)
        .then((res) => {
          expect(res).to.have.status(500);
          expect(res.body.message).to.be.eql('Internal server error');
        });
    });
  });
});
