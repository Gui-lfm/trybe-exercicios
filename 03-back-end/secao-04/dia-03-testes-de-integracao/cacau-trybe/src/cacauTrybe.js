const fs = require('fs/promises');
const { join } = require('path');

const readCacauTrybeFile = async () => {
  const path = '/files/cacauTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const writeCacauTrybeFile = async (content) => {
  const path = '/files/cacauTrybeFile.json';
  try {
    await fs.writeFile(join(__dirname, path), JSON.stringify(content));
  } catch (error) {
    console.log('erro ao salvar as modificações', error.message);
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.filter(
    (chocolate) => chocolate.brandId === brandId
  );
};

const getChocolatesByName = async (query) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.filter((chocolate) =>
    chocolate.name.toLowerCase().includes(query.toLowerCase())
  );
};

const UpdateChocolate = async (id, name, brandId) => {
  const cacauTrybe = await readCacauTrybeFile();

  const chocolateToUpdate = cacauTrybe.find((chocolate) => chocolate.id === id);

  chocolateToUpdate.name = name;
  chocolateToUpdate.brandId = brandId;
  
  await writeCacauTrybeFile(cacauTrybe)
};

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  getChocolatesByName,
  UpdateChocolate,
};
