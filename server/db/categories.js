

const getCategories = (db) => {
  return db('categories').select('*')
}

module.exports = {
  getCategories
}
