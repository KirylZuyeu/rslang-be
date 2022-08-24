const wordRepo = require('./word.db.repository');

const getAll = async conditions => wordRepo.getAll(conditions);

const getGroupAll = async conditions => wordRepo.getGroupAll(conditions);

const get = async wordId => {
  const word = await wordRepo.get(wordId);

  return word;
};

module.exports = { getAll, get, getGroupAll };
