
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
        {orgRelationships_id: 5, itemClass_id: 77002, org_id: 66001, isDonatable: false},
        {orgRelationships_id: 6, itemClass_id: 77006, org_id: 66006, isDonatable: false},
        {orgRelationships_id: 7, itemClass_id: 77006, org_id: 66012, isDonatable: true},
        {orgRelationships_id: 8, itemClass_id: 77007, org_id: 66006, isDonatable: false},
        {orgRelationships_id: 9, itemClass_id: 77008, org_id: 66006, isDonatable: false},
        {orgRelationships_id: 10, itemClass_id: 77009, org_id: 66006, isDonatable: false},
        {orgRelationships_id: 11, itemClass_id: 77010, org_id: 66006, isDonatable: false},
        {orgRelationships_id: 12, itemClass_id: 77011, org_id: 66006, isDonatable: false},
        {orgRelationships_id: 13, itemClass_id: 77012, org_id: 66006, isDonatable: false},
        {orgRelationships_id: 14, itemClass_id: 77013, org_id: 66006, isDonatable: false},
        {orgRelationships_id: 15, itemClass_id: 77014, org_id: 66005, isDonatable: true},
        {orgRelationships_id: 16, itemClass_id: 77015, org_id: 66013, isDonatable: false},
        {orgRelationships_id: 17, itemClass_id: 77016, org_id: 66007, isDonatable: true},
        {orgRelationships_id: 18, itemClass_id: 77016, org_id: 66008, isDonatable: true},
        {orgRelationships_id: 19, itemClass_id: 77017, org_id: 66009, isDonatable: false},
        {orgRelationships_id: 20, itemClass_id: 77017, org_id: 66010, isDonatable: false},
        {orgRelationships_id: 21, itemClass_id: 77018, org_id: 66009, isDonatable: false},
        {orgRelationships_id: 22, itemClass_id: 77018, org_id: 66010, isDonatable: false},
        {orgRelationships_id: 23, itemClass_id: 77019, org_id: 66009, isDonatable: false},
        {orgRelationships_id: 24, itemClass_id: 77019, org_id: 66010, isDonatable: false},
        {orgRelationships_id: 25, itemClass_id: 77020, org_id: 66009, isDonatable: false},
        {orgRelationships_id: 26, itemClass_id: 77020, org_id: 66010, isDonatable: false},
        {orgRelationships_id: 27, itemClass_id: 77021, org_id: 66001, isDonatable: false},
        {orgRelationships_id: 28, itemClass_id: 77021, org_id: 66007, isDonatable: true},
        {orgRelationships_id: 29, itemClass_id: 77022, org_id: 66007, isDonatable: true},
        {orgRelationships_id: 30, itemClass_id: 77022, org_id: 66001, isDonatable: false},
        {orgRelationships_id: 31, itemClass_id: 77023, org_id: 66001, isDonatable: false},
        {orgRelationships_id: 32, itemClass_id: 77023, org_id: 66007, isDonatable: true},
        {orgRelationships_id: 33, itemClass_id: 77024, org_id: 66001, isDonatable: false},
        {orgRelationships_id: 34, itemClass_id: 77025, org_id: 66008, isDonatable: true},
        {orgRelationships_id: 35, itemClass_id: 77025, org_id: 66001, isDonatable: false},
        {orgRelationships_id: 36, itemClass_id: 77026, org_id: 66001, isDonatable: false},
        {orgRelationships_id: 37, itemClass_id: 77026, org_id: 66008, isDonatable: true},
        {orgRelationships_id: 38, itemClass_id: 77027, org_id: 66001, isDonatable: false},
        {orgRelationships_id: 39, itemClass_id: 77027, org_id: 66008, isDonatable: true},
        {orgRelationships_id: 40, itemClass_id: 77004, org_id: 66011, isDonatable: false}
      ]);
    });
};
