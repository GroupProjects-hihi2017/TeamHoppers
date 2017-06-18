const getItemClass = (db) => {
  return db('itemClass')
    .join('categories', 'itemClass.category_id', '=', 'categories.category_id')
    .select('*').orderBy('itemClass_name')
}

module.exports = {
  getItemClass
}
