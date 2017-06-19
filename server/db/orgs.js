const getOrgs = (db) => {
  return (db)('orgs')
    .select('*').orderBy('org_name')
}

const addOrg = (org, db) => {
  return db('orgs').insert(org)
}


module.exports = {
  getOrgs,
  addOrg
}
