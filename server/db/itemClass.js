const getItemClass = (db) => {
  return db('itemClass')
  .join('categories','itemClass.categories_id',"=","categories.categories_id")
  .select('*')
}

module.exports = {
  getItemClass
}
