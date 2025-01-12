const fs = require('node:fs/promises');

async function getStoredItems() {
  // const rawFileContent = await fs.readFile('./data/items.json', { encoding: 'utf-8' });

  //for deployment 
  const rawFileContent = await fs.readFile('./2-actual-backend/data/items.json', { encoding: 'utf-8' });


  const data = JSON.parse(rawFileContent);
  const storedItems = data.items ?? [];
  return storedItems;
}

function storeItems(items) {

  //for deployment 
  return fs.writeFile('./2-actual-backend/data/items.json', JSON.stringify({ items: items || [] }));

  // return fs.writeFile('./data/items.json', JSON.stringify({ items: items || [] }));
}

// function storeItems(items) {
//   return fs.writeFile('./data/items.json', JSON.stringify({ items: items || [] }));
// }

exports.getStoredItems = getStoredItems;
exports.storeItems = storeItems;