
exports.seed = function(knex, Promise) {
  return knex('itemClass').del()
    .then(function () {
      return knex('itemClass').insert([
        {itemClass_id: 77001, category_id: 88001, itemClass_name: 'glass jar', itemClass_info:"Remember to remove lids and washout all glass jars" ,itemClass_img:'https://www.freemanharding.co.uk/5-large/traditional-1lb-jam-jar-pack-of-33.jpg'},
        {itemClass_id: 77002, category_id: 88002, itemClass_name: 'cardboard', itemClass_info:"Be sure to flatten boxes before recycling to save space!",itemClass_img:'https://static1.squarespace.com/static/534db10fe4b095683504776d/t/543f2721e4b0a72b21db3be7/1413424929836/'},
        {itemClass_id: 77003, category_id: 88003, itemClass_name: 'laptop', itemClass_info:"Recycle your old laptop. Don't trash it. According to the EPA recycling 1 million laptops saves the energy equivalent to the electricity used by more than 3,500 homes in a year.",itemClass_img:'http://www.cjdecycling.com/wp-content/uploads/2013/08/laptop_recycling.png'},
        {itemClass_id: 77004, category_id: 88004, itemClass_name: 'house paint', itemClass_info:"On average New Zealander's dump 10 percent of the paint they purchase, which could be recycled" ,itemClass_img:'http://hq.recyclist.co/wp-content/uploads/2015/02/oil-paint-300x300.jpg'},
        {itemClass_id: 77005, category_id: 88002, itemClass_name: 'newspapers & magazines', itemClass_info:"" ,itemClass_img:''},
        {itemClass_id: 77006, category_id: 88002, itemClass_name: 'egg cartons', itemClass_info:"" ,itemClass_img:''},
        {itemClass_id: 77007, category_id: 88005, itemClass_name: 'food tins', itemClass_info:"" ,itemClass_img:''},
        {itemClass_id: 77008, category_id: 88005, itemClass_name: 'beverage cans', itemClass_info:"" ,itemClass_img:''},
        {itemClass_id: 77009, category_id: 88006, itemClass_name: 'drink bottle', itemClass_info:"" ,itemClass_img:''},
        {itemClass_id: 77010, category_id: 88006, itemClass_name: 'food containers', itemClass_info:"" ,itemClass_img:''},
        {itemClass_id: 77011, category_id: 88001, itemClass_name: 'wine bottle', itemClass_info:"" ,itemClass_img:''},
        {itemClass_id: 77012, category_id: 88008, itemClass_name: 'lawn clippings', itemClass_info:"" ,itemClass_img:''},
        {itemClass_id: 77013, category_id: 88008, itemClass_name: 'weeds', itemClass_info:"Not including bamboo or flax." ,itemClass_img:''},
        {itemClass_id: 77014, category_id: 88009, itemClass_name: 'baby & child clothing', itemClass_info:"" ,itemClass_img:''},
        {itemClass_id: 77015, category_id: 88009, itemClass_name: 'cloth', itemClass_info:"" ,itemClass_img:''},
        {itemClass_id: 77016, category_id: 88009, itemClass_name: 'adult clothing', itemClass_info:"" ,itemClass_img:''},
        {itemClass_id: 77017, category_id: 88003, itemClass_name: 'cellphone', itemClass_info:"" ,itemClass_img:''},
        {itemClass_id: 77018, category_id: 88003, itemClass_name: 'computer accessories', itemClass_info:"This can include keyboards, speakers, mice, cords." ,itemClass_img:''},
        {itemClass_id: 77019, category_id: 88003, itemClass_name: 'DVD player', itemClass_info:"" ,itemClass_img:''},
        {itemClass_id: 77020, category_id: 88003, itemClass_name: 'camera', itemClass_info:"" ,itemClass_img:''},
        {itemClass_id: 77021, category_id: 88010, itemClass_name: 'dishwasher', itemClass_info:"" ,itemClass_img:''},
        {itemClass_id: 77022, category_id: 88010, itemClass_name: 'refrigerator', itemClass_info:"" ,itemClass_img:''},
        {itemClass_id: 77023, category_id: 88010, itemClass_name: 'heater', itemClass_info:"" ,itemClass_img:''},
        {itemClass_id: 77024, category_id: 88010, itemClass_name: 'vacuum cleaner', itemClass_info:"" ,itemClass_img:''},
        {itemClass_id: 77025, category_id: 88011, itemClass_name: 'couch', itemClass_info:"" ,itemClass_img:''},
        {itemClass_id: 77026, category_id: 88011, itemClass_name: 'bed', itemClass_info:"" ,itemClass_img:''},
        {itemClass_id: 77027, category_id: 88011, itemClass_name: 'desk', itemClass_info:"" ,itemClass_img:''},

      ]);
    });
};
