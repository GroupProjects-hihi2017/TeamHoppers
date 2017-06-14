
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('itemClass').del()
    .then(function () {
      // Inserts seed entries
      return knex('itemClass').insert([
        {itemClass_id: 77001, category_id: 88001, itemClass_name: 'Glass Jar', itemClass_info:"Remember to remove lids and washout all glass jars" ,itemClass_img:'https://www.freemanharding.co.uk/5-large/traditional-1lb-jam-jar-pack-of-33.jpg'},
        {itemClass_id: 77002, category_id: 88002, itemClass_name: 'Cardboard Box', itemClass_info:"Be sure to flatten boxes before recycling to save space!",itemClass_img:'https://static1.squarespace.com/static/534db10fe4b095683504776d/t/543f2721e4b0a72b21db3be7/1413424929836/'},
        {itemClass_id: 77003, category_id: 88003, itemClass_name: 'Laptop', itemClass_info:"Recycle your old laptop. Don't trash it. According to the EPA recycling 1 million laptops saves the energy equivalent to the electricity used by more than 3,500 homes in a year.",itemClass_img:'http://www.cjdecycling.com/wp-content/uploads/2013/08/laptop_recycling.png'},
        {itemClass_id: 77004, category_id: 88004, itemClass_name: 'House Paint', itemClass_info:"On average New Zealander's dump 10 percent of the paint they purchase, which could be recycled" ,itemClass_img:'http://hq.recyclist.co/wp-content/uploads/2015/02/oil-paint-300x300.jpg'},

      ]);
    });
};
