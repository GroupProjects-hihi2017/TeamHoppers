const getOrgs = (db) => {
  return (db)('orgs')
    .select('*').orderBy('org_name')
}

const addOrg = (org, db) => {
  return db('orgs').insert(org)
}

const getOrgById = (org_id, db) => {
  return db('orgs')
    .where('org_id', org_id)
    .first()
}

module.exports = {
  getOrgs,
  addOrg,
  getOrgById
}
