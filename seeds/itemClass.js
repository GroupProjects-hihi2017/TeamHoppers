exports.seed = function(knex, Promise) {
  return knex('itemClass').del()
    .then(function() {
      return knex('itemClass').insert([{
          itemClass_id: 77001,
          category_id: 88001,
          itemClass_name: 'glass jar',
          itemClass_info: "Remember to remove lids and washout all glass jars",
          itemClass_img: 'https://www.freemanharding.co.uk/5-large/traditional-1lb-jam-jar-pack-of-33.jpg'
        },
        {
          itemClass_id: 77002,
          category_id: 88002,
          itemClass_name: 'cardboard',
          itemClass_info: "Be sure to flatten boxes before recycling to save space!",
          itemClass_img: 'https://static1.squarespace.com/static/534db10fe4b095683504776d/t/543f2721e4b0a72b21db3be7/1413424929836/'
        },
        {
          itemClass_id: 77003,
          category_id: 88003,
          itemClass_name: 'laptop',
          itemClass_info: "Recycle your old laptop. Don't trash it. According to the EPA recycling 1 million laptops saves the energy equivalent to the electricity used by more than 3,500 homes in a year.",
          itemClass_img: 'http://www.cjdecycling.com/wp-content/uploads/2013/08/laptop_recycling.png'
        },
        {
          itemClass_id: 77004,
          category_id: 88004,
          itemClass_name: 'house paint',
          itemClass_info: "On average New Zealander's dump 10 percent of the paint they purchase, which could be recycled",
          itemClass_img: 'http://hq.recyclist.co/wp-content/uploads/2015/02/oil-paint-300x300.jpg'
        },
        {
          itemClass_id: 77005,
          category_id: 88002,
          itemClass_name: 'newspapers & magazines',
          itemClass_info: 'Random fact, pollution is also reduced by 95 percent when used paper is made into new sheets. So please recycle those old newspapers.',
          itemClass_img: 'http://www.plavnica.sk/resources/App/large/201704241033520.vykup-papiera.jpg'
        },
        {
          itemClass_id: 77006,
          category_id: 88002,
          itemClass_name: 'egg cartons',
          itemClass_info: 'More and more people are keeping chickens in their backyards for fresh eggs. Ask around your community and you may find people who are on the lookout for egg cartons.',
          itemClass_img: 'https://i.ebayimg.com/00/s/MjQzWDI4MA==/z/dZIAAOSw3ydVzp9m/'
        },
        {
          itemClass_id: 77007,
          category_id: 88005,
          itemClass_name: 'food tins',
          itemClass_info: "Remember to clean out your food tins. They can be recycled in the plastic in wheelie bins or green recycling plastic bags.",
          itemClass_img: 'http://www.recycleforscotland.com/sites/files/recyclenow/styles/custom_main/public/images/main/Food-cans.jpg?itok=7Hm4dRlP'
        },
        {
          itemClass_id: 77008,
          category_id: 88005,
          itemClass_name: 'beverage cans',
          itemClass_info: "Random fact, making beverage cans from recycled aluminum cuts air pollution by about 95%. So please recycle to keep our air clean.",
          itemClass_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZkmh5dkqHAZwNxXEGZBLNFap0xipwB4n0CszeH74qt-LxBuRacw'
        },
        {
          itemClass_id: 77009,
          category_id: 88006,
          itemClass_name: 'drink bottle',
          itemClass_info: "",
          itemClass_img: ''
        },
        {
          itemClass_id: 77010,
          category_id: 88006,
          itemClass_name: 'food containers',
          itemClass_info: "Random fact, it requires 3 times the amount of water to produce a plastic bottle than it does to fill it.",
          itemClass_img: 'https://thumbs.dreamstime.com/z/water-plastic-bottle-21279974.jpg'
        },
        {
          itemClass_id: 77011,
          category_id: 88001,
          itemClass_name: 'wine bottle',
          itemClass_info: "Good news! All glass, including wine bottles, can be recycled endlessly without any loss in purity or quality.",
          itemClass_img: 'http://packagingoptionsdirect.com/content/images/thumbs/0000453_750-ml-antique-green-glass-burgundy-wine-bottle.jpeg'
        },
        {
          itemClass_id: 77012,
          category_id: 88008,
          itemClass_name: 'lawn clippings',
          itemClass_info: "One of the easiest ways to recycle your leaves and grass clippings is simply by leaving them on your lawn. This practice is called grasscycling!",
          itemClass_img: 'http://www.naturallivingideas.com/wp-content/uploads/2016/03/grass-clippings.jpg'
        },
        {
          itemClass_id: 77013,
          category_id: 88008,
          itemClass_name: 'weeds',
          itemClass_info: "Using a simple compost heap you can recycle most of your organic household and garden.",
          itemClass_img: 'http://www.educationquizzes.com/library/Gardening/Weeds/Groundsel-C.jpg'
        },
        {
          itemClass_id: 77014,
          category_id: 88009,
          itemClass_name: 'baby & child clothing',
          itemClass_info: "There a plenty of non-profit organisations willing to take your unwanted baby clothes for families in need.",
          itemClass_img: 'http://cf.fitnessista.com/wp-content/uploads//2012/04/outfits.jpg'
        },
        {
          itemClass_id: 77015,
          category_id: 88009,
          itemClass_name: 'cloth',
          itemClass_info: "Recycling unwanted cloth reduces landfill waste as well as the amount of resources needed to produce new clothing.",
          itemClass_img: 'http://www.lanzaroteinformation.com/files/ClothingRecycling.jpg'
        },
        {
          itemClass_id: 77016,
          category_id: 88009,
          itemClass_name: 'adult clothing',
          itemClass_info: "Recycling your used clothing, keeps extra waste out of the landfills.",
          itemClass_img: 'http://clothingcollectors.com/wp-content/uploads/2014/08/textile-heart.jpg'
        },
        {
          itemClass_id: 77017,
          category_id: 88003,
          itemClass_name: 'cellphone',
          itemClass_info: "For every one million cell phones that are recycled, the EPA states that 35,274 lbs of copper, 772 lbs of silver, 75 lbs of gold, and 33 lbs of palladium can be recovered.",
          itemClass_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpTFty_2zaUa3iGvUuUD-lCVuUMS7JkIhvxQzTTXFMkWNHicbL'
        },
        {
          itemClass_id: 77018,
          category_id: 88003,
          itemClass_name: 'computer accessories',
          itemClass_info: "This can include keyboards, speakers, mice, cords.",
          itemClass_img: 'http://img.olx.com.br/images/87/8796904223.jpg'
        },
        {
          itemClass_id: 77019,
          category_id: 88003,
          itemClass_name: 'DVD player',
          itemClass_info: "E-waste also contains toxic and hazardous materials including mercury, lead, cadmium, beryllium, chromium, and chemical flame retardants, which have the potential to leach into our soil and water ways.",
          itemClass_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXUBm0McXuC5ajq_f6x2THJyAsS5_vf3BI3YB6lXrhhFoNoM_n'
        },
        {
          itemClass_id: 77020,
          category_id: 88003,
          itemClass_name: 'camera',
          itemClass_info: "E-waste also contains toxic and hazardous materials including mercury, lead, cadmium, beryllium, chromium, and chemical flame retardants, which have the potential to leach into our soil and water ways.",
          itemClass_img: 'http://ewasterecyclingindia.com/wp-content/uploads/2015/09/camera.png'
        },
        {
          itemClass_id: 77021,
          category_id: 88010,
          itemClass_name: 'dishwasher',
          itemClass_info: "Recycling old appliances can save tons of energy and materials.",
          itemClass_img: 'http://lifestyle.euronics.co.uk/wp-content/uploads/2016/02/dishwasher-recycling.jpg'
        },
        {
          itemClass_id: 77022,
          category_id: 88010,
          itemClass_name: 'refrigerator',
          itemClass_info: "Recycling old appliances can save tons of energy and materials.",
          itemClass_img: 'http://members.questline.com/images/Content/IndyMich_ApplianceRecycling_Mar13.jpg'
        },
        {
          itemClass_id: 77023,
          category_id: 88010,
          itemClass_name: 'heater',
          itemClass_info: "Recycling old appliances can save tons of energy and materials.",
          itemClass_img: 'http://trustwaymetal.com/wp-content/uploads/2016/11/scrap-metal-in-air-conditioner-e1478980601570.jpg'
        },
        {
          itemClass_id: 77024,
          category_id: 88010,
          itemClass_name: 'vacuum cleaner',
          itemClass_info: "We generate around 40 million tons of electronic waste every year, worldwide. That’s like throwing 800 vacuum every second.",
          itemClass_img: 'https://sellyourdyson.co.uk/wp-content/uploads/2016/03/Dyson-DC01-De-Stijl-Vacuum-Cleaner-1.jpg'
        },
        {
          itemClass_id: 77025,
          category_id: 88011,
          itemClass_name: 'couch',
          itemClass_info: "There are plenty of ways to find or get rid of second-hand furniture, charity Stores, second-hand furniture shops, antique store and trademe to name a few.",
          itemClass_img: 'https://thumbs.dreamstime.com/t/antique-old-vintage-brown-leather-studded-cushioned-couch-sofa-61505949.jpg'
        },
        {
          itemClass_id: 77026,
          category_id: 88011,
          itemClass_name: 'bed',
          itemClass_info: "There are plenty of ways to find or get rid of second-hand furniture, charity Stores, second-hand furniture shops, antique store and trademe to name a few.",
          itemClass_img: 'https://www.pkfurniture.co.nz/cdn/images/products/main/Silverstrike_BedFrame01_636264852017449765.jpg'
        },
        {
          itemClass_id: 77027,
          category_id: 88011,
          itemClass_name: 'desk',
          itemClass_info: "There are plenty of ways to find or get rid of second-hand furniture, charity Stores, second-hand furniture shops, antique store and trademe to name a few.",
          itemClass_img: 'http://www.antiquehuntingsecrets.com/wp-content/themes/NicheProfitPressV2/images/antique-secretary-desk.png'
        },

      ]);
    });
};
