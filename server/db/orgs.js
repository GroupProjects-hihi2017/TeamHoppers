const getOrgs = (db) => {
  return (db)('orgs')
    .select('*')
}

module.exports = {
  getOrgs
}
