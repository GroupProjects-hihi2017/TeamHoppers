
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('joinItemToOrgs').del()
    .then(function () {
      // Inserts seed entries
      return knex('joinItemToOrgs').insert([
        {orgRelationships_id: 1, itemClass_id: 77003, org_id: 66002, isDonatable: true},
        {orgRelationships_id: 2, itemClass_id: 77003, org_id: 66001, isDonatable: false},
        {orgRelationships_id: 3, itemClass_id: 77001, org_id: 66001, isDonatable: false},
        {orgRelationships_id: 4, itemClass_id: 77004, org_id: 66001, isDonatable: false},
        {orgRelationships_id: 5, itemClass_id: 77002, org_id: 66001, isDonatable: false}
      ]);
    });
};
