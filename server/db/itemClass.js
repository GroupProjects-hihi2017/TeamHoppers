const getItemClass = (db) => {
  return db('itemClass')
    .join('categories', 'itemClass.category_id', '=', 'categories.category_id')
    .select('*').orderBy('itemClass_name')
}

const addItemClass = (itemClass, db) => {
  return db('itemClass').insert(itemClass)
}

const getItemById = (itemClassId, db) => {
  return db('itemClass')
    .where('itemClass_id', itemClassId)
    .first()
}

module.exports = {
  getItemClass,
  addItemClass,
  getItemById
}
