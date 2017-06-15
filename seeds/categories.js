exports.seed = function(knex, Promise) {
  return knex('categories').del()
    .then(function() {
      return knex('categories').insert([{
          category_id: 88001,
          category_name: 'glass',
          category_img: 'http://www.countrystylerecycling.co.uk/wp-content/uploads/2014/11/Istock-glass-bottles.jpg',
          category_info: "Recycling glass is easy, and glass containers returned for recycling help to make new glass bottles and jars. Recycling glass has big environmental pay offs. It saves raw materials, lessens demand for energy, and cuts CO2 emissions."
        },
        {
          category_id: 88002,
          category_name: 'paper & cardboard',
          category_img: 'http://www.thewordonline.org/wp-content/uploads/2010/07/newspapers.jpg',
          category_info: "Recycling paper conserves natural resources, saves energy, reduces greenhouse gas emissions, and keeps landfill space free for other types of trash that can't be recycled."
        },
        {
          category_id: 88003,
          category_name: 'electronics',
          category_img: 'https://correcycling.com/wp-content/uploads/sites/3/2016/08/Large-and-small-TVs-are-recycled-at-CORRecycling-Inc..jpg',
          category_info: "E-waste contains many valuable, recoverable materials such as aluminum, copper, gold, silver, plastics, and ferrous metals. In order to conserve natural resources and the energy needed to produce new electronic equipment from virgin resources, electronic equipment can be refurbished, reused, and recycled instead of being landfilled. E-waste also contains toxic and hazardous materials including mercury, lead, cadmium, beryllium, chromium, and chemical flame retardants, which have the potential to leach into our soil and water."
        },
        {
          category_id: 88004,
          category_name: 'chemicals',
          category_img: 'https://www.riversideca.gov/publicworks/trash/images/HHW-main.jpg',
          category_info: "Separate from your regular rubbish to keep chemicals out of our waterways! Many commonly used chemicals and liquids such as pesticides, paints and solvents, coolants and motor oil are toxic if not disposed of properly. In landfill, these chemicals can leach into the environment and waterways causing contamination. Safe chemical disposal options exist for a large range of everyday chemicals. Commercial recycling services are also available for those chemicals that can be reused such as motor oil."
        },
        {
          category_id: 88005,
          category_name: 'aluminium',
          category_img: 'http://www.alupro.org.uk/wp-content/uploads/2013/12/ALU-CANS-cropped.jpg',
          category_info: ""
        },
        {
          category_id: 88006,
          category_name: 'plastic',
          category_img: 'http://environment.columbia.edu/files/environmental/content/plastic_metal_glass%20recycling.jpg',
          category_info: "The majority of plastics going to landfill are consumer-based products which aren’t or cannot be recycled."
        },
        {
          category_id: 88007,
          category_name: 'paint',
          category_img: 'https://www.recyclenow.com/sites/files/recyclenow/styles/custom_main/public/images/main/paint_cans.jpg?itok=X2z332_K',
          category_info: "Responsibly disposing of paint and paint packaging has become increasingly difficult in many areas with these items often not accepted in the kerbside rubbish collections or at many transfer stations."
        },
        {
          category_id: 88008,
          category_name: 'green waste',
          category_img: 'http://www.citrusheights.net/ImageRepository/Document?documentID=572',
          category_info: ""
        },
        {
          category_id: 88009,
          category_name: 'clothes & textiles',
          category_img: 'https://sfenvironment.org/sites/default/files/editor-uploads/zero_waste/image/sfe_th_textiles_graphic_clothes_pile.jpg',
          category_info: "Clothes and textiles - even old underwear, damaged clothing and faded curtains - that aren’t suitable to be passed onto someone else can be recycled and made into new items, such as padding for chairs and car seats, cleaning cloths and industrial blankets. "
        },
        {
          category_id: 88010,
          category_name: 'appliances',
          category_img: 'http://www.gorecyclenow.com/Images/services_appliances.jpg',
          category_info: "The rate at which appliances are discarded has increased with technological advancement. When appliances are recycled, they can be looked upon as valuable resources. If disposed of improperly, appliances can become environmentally harmful and poison ecosystems."
        },
        {
          category_id: 88011,
          category_name: 'furniture',
          category_img: 'http://furniture.inlandempire-junkremoval.com/images/junk-furniture-removal.jpg',
          category_info: "Donating used furniture and and fixtures from offices and facilities can help companies avoid both monetary and environmental costs. "
        }
      ]);
    });
};
