const imageService = require('../services/image.service');

module.exports = {
  async getImage(req, res) {
    const imagem = imageService.getImage();
    return res.status(200).json({ imagem });
  },
};
