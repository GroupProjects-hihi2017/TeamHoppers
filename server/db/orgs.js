const getOrgs = (db) => {
  return (db)('orgs')
    .select('*').orderBy('org_name')
}

module.exports = {
  getOrgs
}
