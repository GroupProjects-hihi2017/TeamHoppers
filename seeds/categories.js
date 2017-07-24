exports.seed = function(knex, Promise) {
  return knex('categories').del()
    .then(function() {
      return knex('categories').insert([{
          category_id: 88001,
          category_name: 'Glass',
          category_img: 'http://www.countrystylerecycling.co.uk/wp-content/uploads/2014/11/Istock-glass-bottles.jpg',
          category_info: "Glass is 100% recyclable and can be recycled endlessly"
        },
        {
          category_id: 88002,
          category_name: 'Paper & Cardboard',
          category_img: 'http://www.thewordonline.org/wp-content/uploads/2010/07/newspapers.jpg',
          category_info: "Each ton of recycled paper can save 17 trees and 380 gallons of oil"
        },
        {
          category_id: 88003,
          category_name: 'Electronics & eWaste',
          category_img: 'https://correcycling.com/wp-content/uploads/sites/3/2016/08/Large-and-small-TVs-are-recycled-at-CORRecycling-Inc..jpg',
          category_info: "eWaste comprises 70% of our overall toxic waste and signifcantly impacts our waterways"
        },
        {
          category_id: 88004,
          category_name: 'Hazardous Waste',
          category_img: 'http://www.fairfaxva.gov/Home/ShowImage?id=4558&t=635732554814030000',
          category_info: "Average homes can accumulate household wastes in storage areas, garages and sheds"
        },
        {
          category_id: 88005,
          category_name: 'Aluminium & Metals',
          category_img: 'https://static1.squarespace.com/static/52655d9ce4b077de040565fc/t/55dc9817e4b010e13a15e11b/1440507725617/Cans.jpg',
          category_info: "Aluminium is considered a sustainable metal, which means it can be recycled again and again"
        },
        {
          category_id: 88006,
          category_name: 'Plastic',
          category_img: 'http://environment.columbia.edu/files/environmental/content/plastic_metal_glass%20recycling.jpg',
          category_info: "When one ton of plastic bottles is recycled, almost four barrels of oil are saved"
        },
        {
          category_id: 88007,
          category_name: 'Miscellaneous',
          category_img: 'http://i1.wp.com/thedailybrunch.com/wp-content/uploads/2016/05/Use-up-discarded-items-to-create-an-impressive-home.jpg?fit=1322%2C881',
          category_info: "Recycling reduces the need for more landfills and no one wants to live next to a landfill"
        },
        {
          category_id: 88008,
          category_name: 'Green Waste',
          category_img: 'http://www.citrusheights.net/ImageRepository/Document?documentID=572',
          category_info: "Up to 30% of materials put into the rubbish bin can be composted"
        },
        {
          category_id: 88009,
          category_name: 'Clothes & Textiles',
          category_img: 'https://sfenvironment.org/sites/default/files/editor-uploads/zero_waste/image/sfe_th_textiles_graphic_clothes_pile.jpg',
          category_info: "Nearly 100 percent of textiles and clothing are recyclable"
        },
        {
          category_id: 88010,
          category_name: 'Appliances',
          category_img: 'http://www.gorecyclenow.com/Images/services_appliances.jpg',
          category_info: "If disposed of improperly, appliances can become environmentally harmful and poison ecosystems"
        },
        {
          category_id: 88011,
          category_name: 'Furniture',
          category_img: 'http://furniture.inlandempire-junkremoval.com/images/junk-furniture-removal.jpg',
          category_info: "Furniture that cannot be re-used by someone else can often be recycled"
        },
        {
          category_id: 88012,
          category_name: 'Food',
          category_img: 'http://challengeforsustainability.org/wp-content/uploads/2014/07/food-donation.jpg',
          category_info: "Cut your environmental footprint by donating rather than throwing out quality surplus food"
        }
      ]);
    });
};
