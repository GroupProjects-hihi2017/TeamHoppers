
const getCategories = (db) => {
  return db('categories').select('*').orderBy('category_name')
}

module.exports = {
  getCategories
}
