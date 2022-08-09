const sucessCreateUserRequest = {
  name: 'Teste',
  email: 'teste@teste.com',
  password: '123456',
};

const userDataValuesMock = {
  dataValues: {
    id: 1,
    name: 'Teste',
    email: 'teste@teste.com',
    password: '0b4e7a0e5fe84ad35fb5f95b9ceeac79',
    role: 'customer',
  },
};

const shortNameRequest = {
  name: 'Teste',
  email: 'teste@teste.com',
  password: 'teste1',
};

const shortNameRequestBody = {
  body: {
    name: 'Teste',
    email: 'teste@teste.com',
    password: 'teste1',
  },
};

const emptyNameRequest = {
  name: '',
  email: 'teste@teste.com',
  password: 'teste1',
};

const noNameRequest = {
  email: 'teste@teste.com',
  password: 'teste1',
};

const invalidEmailRequest = {
  name: 'Teste teste teste',
  email: 'teste@teste',
  password: 'teste1',
};

const noEmailRequest = {
  name: 'Teste teste teste',
  password: 'teste1',
};

const shortPasswordRequest = {
  name: 'Teste teste teste',
  email: 'teste@teste.com',
  password: 'teste',
};

const emptyPasswordRequest = {
  name: 'Teste teste teste',
  email: 'teste@teste.com',
  password: '',
};

const noPasswordRequest = {
  name: 'Teste teste teste',
  email: 'teste@teste.com',
};

const shortNameError = {
  status: 400,
  message: '"name" length must be at least 12 characters long',
};

module.exports = {
  sucessCreateUserRequest,
  userDataValuesMock,
  shortNameRequest,
  emptyNameRequest,
  noNameRequest,
  invalidEmailRequest,
  noEmailRequest,
  shortPasswordRequest,
  emptyPasswordRequest,
  noPasswordRequest,
  shortNameError,
  shortNameRequestBody,
};
