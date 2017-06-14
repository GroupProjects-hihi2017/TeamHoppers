const getItemClass = (db) => {
  return db('itemClass')
  .join('categories','itemClass.category_id',"=","categories.category_id")
  .select('*')
}

module.exports = {
  getItemClass
}
