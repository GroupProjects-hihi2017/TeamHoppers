const joinItemToOrgs = (db) => {
  return db('joinItemToOrgs')
    .join('itemClass', 'itemClass.itemClass_id', '=', 'joinItemToOrgs.itemClass_id')
    .join('orgs', 'orgs.org_id', '=', 'joinItemToOrgs.org_id')
    .select('*')
}

module.exports = {
  joinItemToOrgs
}
