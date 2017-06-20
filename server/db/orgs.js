const getOrgs = (db) => {
  return (db)('orgs')
    .select('*').orderBy('org_name')
}

const addOrg = (org, db) => {
  return db('orgs').insert(org)
}

const getOrgById = (orgId, db) => {
  return db('orgs')
    .where('org_id', orgId)
    .first()
}

module.exports = {
  getOrgs,
  addOrg,
  getOrgById
}
