
exports.seed = function(knex, Promise) {
  return knex('categories').del()
    .then(function () {
      return knex('categories').insert([
        {category_id: 88001, category_name: 'glass', category_img: 'http://www.countrystylerecycling.co.uk/wp-content/uploads/2014/11/Istock-glass-bottles.jpg', category_info: "Recycling glass is easy, and glass containers returned for recycling help to make new glass bottles and jars. Recycling glass has big environmental pay offs. It saves raw materials, lessens demand for energy, and cuts CO2 emissions."},
        {category_id: 88002, category_name: 'paper', category_img: 'http://www.thewordonline.org/wp-content/uploads/2010/07/newspapers.jpg', category_info: "Recycling paper conserves natural resources, saves energy, reduces greenhouse gas emissions, and keeps landfill space free for other types of trash that can't be recycled."},
        {category_id: 88003, category_name: 'electronics', category_img: 'https://correcycling.com/wp-content/uploads/sites/3/2016/08/Large-and-small-TVs-are-recycled-at-CORRecycling-Inc..jpg', category_info: "E-waste contains many valuable, recoverable materials such as aluminum, copper, gold, silver, plastics, and ferrous metals. In order to conserve natural resources and the energy needed to produce new electronic equipment from virgin resources, electronic equipment can be refurbished, reused, and recycled instead of being landfilled. E-waste also contains toxic and hazardous materials including mercury, lead, cadmium, beryllium, chromium, and chemical flame retardants, which have the potential to leach into our soil and water."},
        {category_id: 88004, category_name: 'chemicals', category_img: 'https://www.riversideca.gov/publicworks/trash/images/HHW-main.jpg', category_info: "Many commonly used chemicals and liquids such as pesticides, paints and solvents, coolants and motor oil are toxic if not disposed of properly. In landfill, these chemicals can leach into the environment and waterways causing contamination. Safe chemical disposal options exist for a large range of everyday chemicals. Commercial recycling services are also available for those chemicals that can be reused such as motor oil."}
      ]);
    });
};
