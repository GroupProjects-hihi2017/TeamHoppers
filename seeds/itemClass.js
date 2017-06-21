exports.seed = function(knex, Promise) {
  return knex('itemClass').del()
    .then(function() {
      return knex('itemClass').insert([{
          itemClass_id: 77001,
          category_id: 88001,
          itemClass_name: 'Glass Jars',
          itemClass_info: "Remember to remove lids and washout all glass jars.",
          itemClass_img: 'https://www.freemanharding.co.uk/5-large/traditional-1lb-jam-jar-pack-of-33.jpg'
        },
        {
          itemClass_id: 77002,
          category_id: 88002,
          itemClass_name: 'Cardboard Materials',
          itemClass_info: "Be sure to flatten boxes before recycling to save space!",
          itemClass_img: 'https://static1.squarespace.com/static/534db10fe4b095683504776d/t/543f2721e4b0a72b21db3be7/1413424929836/'
        },
        {
          itemClass_id: 77003,
          category_id: 88003,
          itemClass_name: 'Laptops',
          itemClass_info: "Recycle your old laptop. Don't trash it. According to the EPA recycling 1 million laptops saves the energy equivalent to the electricity used by more than 3,500 homes in a year.",
          itemClass_img: 'http://www.cjdecycling.com/wp-content/uploads/2013/08/laptop_recycling.png'
        },
        {
          itemClass_id: 77004,
          category_id: 88004,
          itemClass_name: 'Paint',
          itemClass_info: "On average New Zealander's dump 10 percent of the paint they purchase, which could be recycled",
          itemClass_img: 'http://hq.recyclist.co/wp-content/uploads/2015/02/oil-paint-300x300.jpg'
        },
        {
          itemClass_id: 77005,
          category_id: 88002,
          itemClass_name: 'Newspapers & Magazines',
          itemClass_info: 'Random fact, pollution is also reduced by 95 percent when used paper is made into new sheets. So please recycle those old newspapers.',
          itemClass_img: 'http://www.plavnica.sk/resources/App/large/201704241033520.vykup-papiera.jpg'
        },
        {
          itemClass_id: 77006,
          category_id: 88002,
          itemClass_name: 'Egg Cartons',
          itemClass_info: 'More and more people are keeping chickens in their backyards for fresh eggs. Ask around your community and you may find people who are on the lookout for egg cartons.',
          itemClass_img: 'https://i.ebayimg.com/00/s/MjQzWDI4MA==/z/dZIAAOSw3ydVzp9m/'
        },
        {
          itemClass_id: 77007,
          category_id: 88005,
          itemClass_name: 'Food Tins',
          itemClass_info: "Remember to clean out your food tins. They can be recycled in the plastic in wheelie bins or green recycling plastic bags.",
          itemClass_img: 'http://www.recycleforscotland.com/sites/files/recyclenow/styles/custom_main/public/images/main/Food-cans.jpg?itok=7Hm4dRlP'
        },
        {
          itemClass_id: 77008,
          category_id: 88005,
          itemClass_name: 'Beverage Cans',
          itemClass_info: "Random fact, making beverage cans from recycled aluminum cuts air pollution by about 95%. So please recycle to keep our air clean.",
          itemClass_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZkmh5dkqHAZwNxXEGZBLNFap0xipwB4n0CszeH74qt-LxBuRacw'
        },
        {
          itemClass_id: 77009,
          category_id: 88006,
          itemClass_name: 'Drink Bottles',
          itemClass_info: "",
          itemClass_img: ''
        },
        {
          itemClass_id: 77010,
          category_id: 88006,
          itemClass_name: 'Food Containers',
          itemClass_info: "Random fact, it requires 3 times the amount of water to produce a plastic bottle than it does to fill it.",
          itemClass_img: 'https://thumbs.dreamstime.com/z/water-plastic-bottle-21279974.jpg'
        },
        {
          itemClass_id: 77011,
          category_id: 88001,
          itemClass_name: 'Wine & Beer Bottles',
          itemClass_info: "Good news! All glass, including wine bottles, can be recycled endlessly without any loss in purity or quality.",
          itemClass_img: 'http://packagingoptionsdirect.com/content/images/thumbs/0000453_750-ml-antique-green-glass-burgundy-wine-bottle.jpeg'
        },
        {
          itemClass_id: 77012,
          category_id: 88008,
          itemClass_name: 'Lawn Clippings',
          itemClass_info: "One of the easiest ways to recycle your leaves and grass clippings is simply by leaving them on your lawn. This practice is called grasscycling!",
          itemClass_img: 'http://www.naturallivingideas.com/wp-content/uploads/2016/03/grass-clippings.jpg'
        },
        {
          itemClass_id: 77013,
          category_id: 88008,
          itemClass_name: 'Weeds',
          itemClass_info: "Using a simple compost heap you can recycle most of your organic household and garden.",
          itemClass_img: 'http://www.educationquizzes.com/library/Gardening/Weeds/Groundsel-C.jpg'
        },
        {
          itemClass_id: 77014,
          category_id: 88009,
          itemClass_name: 'Baby & Child Clothing',
          itemClass_info: "There a plenty of non-profit organisations willing to take your unwanted baby clothes for families in need.",
          itemClass_img: 'http://cf.fitnessista.com/wp-content/uploads//2012/04/outfits.jpg'
        },
        {
          itemClass_id: 77015,
          category_id: 88009,
          itemClass_name: 'Cloth and Textiles',
          itemClass_info: "Recycling unwanted cloth reduces landfill waste as well as the amount of resources needed to produce new clothing.",
          itemClass_img: 'http://www.lanzaroteinformation.com/files/ClothingRecycling.jpg'
        },
        {
          itemClass_id: 77016,
          category_id: 88009,
          itemClass_name: 'Adult Clothing',
          itemClass_info: "Recycling your used clothing, keeps extra waste out of the landfills.",
          itemClass_img: 'http://clothingcollectors.com/wp-content/uploads/2014/08/textile-heart.jpg'
        },
        {
          itemClass_id: 77017,
          category_id: 88003,
          itemClass_name: 'Cellphones',
          itemClass_info: "For every one million cell phones that are recycled, the EPA states that 35,274 lbs of copper, 772 lbs of silver, 75 lbs of gold, and 33 lbs of palladium can be recovered.",
          itemClass_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpTFty_2zaUa3iGvUuUD-lCVuUMS7JkIhvxQzTTXFMkWNHicbL'
        },
        {
          itemClass_id: 77018,
          category_id: 88003,
          itemClass_name: 'Computer Accessories',
          itemClass_info: "This can include keyboards, speakers, mice, cords.",
          itemClass_img: 'http://img.olx.com.br/images/87/8796904223.jpg'
        },
        {
          itemClass_id: 77019,
          category_id: 88003,
          itemClass_name: 'DVD players',
          itemClass_info: "E-waste also contains toxic and hazardous materials including mercury, lead, cadmium, beryllium, chromium, and chemical flame retardants, which have the potential to leach into our soil and water ways.",
          itemClass_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXUBm0McXuC5ajq_f6x2THJyAsS5_vf3BI3YB6lXrhhFoNoM_n'
        },
        {
          itemClass_id: 77020,
          category_id: 88003,
          itemClass_name: 'Cameras',
          itemClass_info: "E-waste also contains toxic and hazardous materials including mercury, lead, cadmium, beryllium, chromium, and chemical flame retardants, which have the potential to leach into our soil and water ways.",
          itemClass_img: 'http://ewasterecyclingindia.com/wp-content/uploads/2015/09/camera.png'
        },
        {
          itemClass_id: 77021,
          category_id: 88010,
          itemClass_name: 'Dishwashers',
          itemClass_info: "Recycling old appliances can save tons of energy and materials.",
          itemClass_img: 'http://lifestyle.euronics.co.uk/wp-content/uploads/2016/02/dishwasher-recycling.jpg'
        },
        {
          itemClass_id: 77022,
          category_id: 88010,
          itemClass_name: 'Refrigerators',
          itemClass_info: "Recycling old appliances can save tons of energy and materials.",
          itemClass_img: 'http://members.questline.com/images/Content/IndyMich_ApplianceRecycling_Mar13.jpg'
        },
        {
          itemClass_id: 77023,
          category_id: 88010,
          itemClass_name: 'Heaters',
          itemClass_info: "Recycling old appliances can save tons of energy and materials.",
          itemClass_img: 'http://trustwaymetal.com/wp-content/uploads/2016/11/scrap-metal-in-air-conditioner-e1478980601570.jpg'
        },
        {
          itemClass_id: 77024,
          category_id: 88010,
          itemClass_name: 'Vacuum Cleaners',
          itemClass_info: "We generate around 40 million tons of electronic waste every year, worldwide. That’s like throwing 800 vacuum every second.",
          itemClass_img: 'https://sellyourdyson.co.uk/wp-content/uploads/2016/03/Dyson-DC01-De-Stijl-Vacuum-Cleaner-1.jpg'
        },
        {
          itemClass_id: 77025,
          category_id: 88011,
          itemClass_name: 'Couches',
          itemClass_info: "There are plenty of ways to find or get rid of second-hand furniture, charity Stores, second-hand furniture shops, antique store and trademe to name a few.",
          itemClass_img: 'https://thumbs.dreamstime.com/t/antique-old-vintage-brown-leather-studded-cushioned-couch-sofa-61505949.jpg'
        },
        {
          itemClass_id: 77026,
          category_id: 88011,
          itemClass_name: 'Beds',
          itemClass_info: "There are plenty of ways to find or get rid of second-hand furniture, charity Stores, second-hand furniture shops, antique store and trademe to name a few.",
          itemClass_img: 'https://www.pkfurniture.co.nz/cdn/images/products/main/Silverstrike_BedFrame01_636264852017449765.jpg'
        },
        {
          itemClass_id: 77027,
          category_id: 88011,
          itemClass_name: 'Desks',
          itemClass_info: "There are plenty of ways to find or get rid of second-hand furniture, charity Stores, second-hand furniture shops, antique store and trademe to name a few.",
          itemClass_img: 'http://www.antiquehuntingsecrets.com/wp-content/themes/NicheProfitPressV2/images/antique-secretary-desk.png'
        },
        {
          itemClass_id: 77028,
          category_id: 88004,
          itemClass_name: 'Batteries',
          itemClass_info: "You can't put batteries out with your household recycling as some contain hazardous materials like lead and lithium.",
          itemClass_img: 'http://www.ecotechservices.co.nz/wp-content/uploads/2014/01/Battery-Recycling.jpg'
        },
        {
          itemClass_id: 77029,
          category_id: 88004,
          itemClass_name: 'Light Bulbs',
          itemClass_info: "Energy saver light bulbs contain mercury, which is hazardous, so they need to be disposed of properly. ",
          itemClass_img: 'https://goodguideblog.files.wordpress.com/2011/02/lightbulbs.jpg'
        },
        {
          itemClass_id: 77030,
          category_id: 88004,
          itemClass_name: 'Smoke Alarms',
          itemClass_info: "You can't put smoke alarms out with your household recycling and they shouldn’t go out in your rubbish either, as they can contain radioactive materials.",
          itemClass_img: 'http://www.stalbansvt.com/vertical/Sites/%7B6057F00C-4FBC-4942-B5A5-C142459B1038%7D/uploads/%7B30D695A3-04D3-4239-9033-ED7B2B9BA64A%7D.JPG'
        },
        {
          itemClass_id: 77031,
          category_id: 88004,
          itemClass_name: 'Household Chemicals',
          itemClass_info: "You can't put chemicals out with your household recycling or rubbish as they are hazardous waste.",
          itemClass_img: 'http://greencleanmaidsweb.com/wp-content/uploads/2015/02/DSC_2422_blog_ready.jpg'
        },
        {
          itemClass_id: 77032,
          category_id: 88007,
          itemClass_name: 'Chopsticks',
          itemClass_info: "Wooded chopsticks are treated like green waste.",
          itemClass_img: 'http://919seafm.com.au/wp-content/uploads/2017/03/chopsticks-628.png'
        },
        {
          itemClass_id: 77033,
          category_id: 88007,
          itemClass_name: 'Corks',
          itemClass_info: "Cork is a 100 percent natural, biodegradable and renewable resource.",
          itemClass_img: 'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2015/corkssealawi.jpg'
        },
        {
          itemClass_id: 77034,
          category_id: 88003,
          itemClass_name: 'Video Cassettes',
          itemClass_info: "If the tapes are still usable, you could also donate them, otherwise they will need to go in your yellow rubbish bag if they’re no longer usable.",
          itemClass_img: 'https://s-media-cache-ak0.pinimg.com/originals/77/15/7b/77157bc0a9985f9dca6fe6ddd7d44093.jpg'
        },
        {
          itemClass_id: 77035,
          category_id: 88007,
          itemClass_name: 'Medicine',
          itemClass_info: "Return any unused medicines (including medicines that are past their expiry date) to your pharmacist for safe disposal.",
          itemClass_img: 'http://www.roberthowells.com.au/wp-content/uploads/2016/05/medication1.jpg'
        },
        {
          itemClass_id: 77036,
          category_id: 88010,
          itemClass_name: 'Sewing Machines',
          itemClass_info: "",
          itemClass_img: 'http://www.hobbycraft.co.uk/SupplyImages/587409_1000_1_800.jpg'
        },
        {
          itemClass_id: 77037,
          category_id: 88010,
          itemClass_name: 'Lamps',
          itemClass_info: "",
          itemClass_img: 'http://www.apnlightings.com/images/lamps/contemporary-table-lamps.jpg'
        },
        {
          itemClass_id: 77038,
          category_id: 88006,
          itemClass_name: 'Supermarket Bags',
          itemClass_info: "You can't put plastic bags in your recycling bag or wheelie bin.",
          itemClass_img: 'http://media.gizmodo.co.uk/wp-content/uploads/2015/10/plastic-bag-620x349.jpg'
        },
        {
          itemClass_id: 77039,
          category_id: 88006,
          itemClass_name: 'Coathangers',
          itemClass_info: "Everyone needs coathangers, so if you have some you don't need, consider donating them.",
          itemClass_img: 'https://cdn.shopify.com/s/files/1/2029/9329/products/24_57_22efc8b0-bdb8-483a-bf79-8657d907ecd6_530x@2x.jpg?v=1495675249'
        },
        {
          itemClass_id: 77040,
          category_id: 88006,
          itemClass_name: 'Bubble wrap',
          itemClass_info: "You can't put bubble wrap out with your household recycling. Instead of throwing it away, you could give it to someone who is moving house.",
           itemClass_img: 'http://www.tigerpak.co.uk/wp-content/uploads/2013/11/foto-bubble-wrap.jpg'
        },
        {
          itemClass_id: 77041,
          category_id: 88007,
          itemClass_name: 'Polystyrene',
          itemClass_info: "You can't put polystyrene out with your household recycling.",
          itemClass_img: 'https://www.plasticstoday.com/sites/default/files/images/polystyrene.jpg'
        },
        {
          itemClass_id: 77042,
          category_id: 88011,
          itemClass_name: 'Mattresses',
          itemClass_info: "Please don’t just leave them on the side of the road – they get wet, heavy and then they are no use to anybody.",
          itemClass_img: 'http://www.mattressdepartmentutah.com/wp-content/uploads/2012/12/Old_Mattresses-448x2671.jpg'
        },
        {
          itemClass_id: 77043,
          category_id: 88011,
          itemClass_name: 'Office Chairs',
          itemClass_info: "",
          itemClass_img: 'https://sits-pod43.demandware.net/dw/image/v2/AAWO_PRD/on/demandware.static/-/Sites-wsl-master-catalog/default/dw9cf3da82/d4/b1/B79657_00.jpg?sw=232&sh=232&sm=fit'
        },
        {
          itemClass_id: 77044,
          category_id: 88011,
          itemClass_name: 'Chest of Drawers',
          itemClass_info: "",
          itemClass_img: 'http://www.ikea.com/au/en/images/products/koppang-chest-of-drawers-white__0430428_PE584633_S4.JPG'
        },
        {
          itemClass_id: 77045,
          category_id: 88002,
          itemClass_name: 'Phone Books',
          itemClass_info: "Did you know you can opt out getting the White and Yellow Pages.",
          itemClass_img: 'https://media.licdn.com/mpr/mpr/p/7/005/084/1f1/2d8701c.jpg'
        },
        {
          itemClass_id: 77046,
          category_id: 88002,
          itemClass_name: 'Hardback & Paperback Books',
          itemClass_info: "You can't put books out with your household recycling. There are lots of places that accept second-hand books.",
          itemClass_img: 'http://faithandheritage.com/wp-content/uploads/2016/12/Best-of-2016-books-Tim-Challies-Al-Mohler-Russell-Moore-John-Piper-The-Gospel-Coalition-J.D.-Vance-Hillbilly-Elegy-Yuval-Levin-The-Fractured-Republic-anti-white.jpg'
        },
        {
          itemClass_id: 77047,
          category_id: 88002,
          itemClass_name: 'Shredded Paper',
          itemClass_info: "When you shred paper, it is much more difficult to get recycling centers to accept it.",
          itemClass_img: 'http://movers.pulseight.com/wp-content/uploads/sites/16/2013/05/packingpaper.jpg'
        },
        {
          itemClass_id: 77048,
          category_id: 88012,
          itemClass_name: 'Household Perishable Food',
          itemClass_info: "New Zealanders throw away about $872 million worth of food each year ($560 per household).",
          itemClass_img: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/FN_Leftovers-Thanksgiving-Opener_s4x3.jpg.rend.hgtvcom.966.725.jpeg'
        },
        {
          itemClass_id: 77049,
          category_id: 88012,
          itemClass_name: 'Household Non-Perishable Food',
          itemClass_info: "Non-perishable foods have a long shelf life and don’t require refrigeration.",
          itemClass_img: 'http://i.ebayimg.com/00/s/MjgyWDQyNQ==/z/T20AAOxyF0pThiGK/$_1.JPG?set_id=2'
        },
        {
          itemClass_id: 77050,
          category_id: 88012,
          itemClass_name: 'Retail Food',
          itemClass_info: "",
          itemClass_img: 'https://s-media-cache-ak0.pinimg.com/originals/51/a1/e9/51a1e94f26adcd2af4597b1cf2669ec3.jpg'
        },
        {
          itemClass_id: 77051,
          category_id: 88008,
          itemClass_name: 'Flower Bouquets',
          itemClass_info: "Once they’re dried, flowers make for ah-mazing aromatherapy. Consider making potpourri with.",
          itemClass_img: 'https://s-media-cache-ak0.pinimg.com/736x/14/1d/32/141d32a41797f63edb9658be13202d96.jpg'
        },
        {
          itemClass_id: 77052,
          category_id: 88008,
          itemClass_name: 'Branches',
          itemClass_info: "",
          itemClass_img: 'https://previews.123rf.com/images/valda/valda0911/valda091100006/5863677-Pile-of-branches-in-wood-Stock-Photo.jpg'
        },
        {
          itemClass_id: 77053,
          category_id: 88008,
          itemClass_name: 'Christmas Trees',
          itemClass_info: "",
          itemClass_img: 'https://jerrymabbott.files.wordpress.com/2014/12/wpid-screenshot_2014-12-16-08-56-18-1.png'
        },
        {
          itemClass_id: 77054,
          category_id: 88008,
          itemClass_name: 'Pot Plants',
          itemClass_info: "",
          itemClass_img: 'http://www.ikea.com/PIAimages/67453_PE181294_S5.JPG'
        },
        {
          itemClass_id: 77055,
          category_id: 88009,
          itemClass_name: 'Curtains',
          itemClass_info: "",
          itemClass_img: 'http://www.ikea.com/gb/en/images/products/teresia-sheer-curtains-1-pair-white__0191200_pe345233_s5.jpg'
        },
        {
          itemClass_id: 77056,
          category_id: 88009,
          itemClass_name: 'Shoes',
          itemClass_info: "",
          itemClass_img: 'https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=146587788'
        },
        {
          itemClass_id: 77057,
          category_id: 88009,
          itemClass_name: 'Blankets',
          itemClass_info: "",
          itemClass_img: 'http://www.everythingsummercamp.com/common/images/products/large/Bunkhouse%20Plaid%20Wool%20Blanket-grey-blue.jpg'
        },
        {
          itemClass_id: 77058,
          category_id: 88001,
          itemClass_name: 'Broken Glass',
          itemClass_info: "",
          itemClass_img: 'http://examinetheglass.com/wp-content/uploads/2011/11/broken_glass1.jpg'
        },
        {
          itemClass_id: 77059,
          category_id: 88001,
          itemClass_name: 'Pyrex',
          itemClass_info: "",
          itemClass_img: 'http://www.pyrexuk.com/media/catalog/product/cache/9/thumbnail/9df78eab33525d08d6e5fb8d27136e95/r/e/rectangular_-_three-quarters_view_1.jpg'
        },
        {
          itemClass_id: 77060,
          category_id: 88001,
          itemClass_name: 'Drinking Glasses',
          itemClass_info: "Unfortunately we can't recycle these items because they are made from a toughened glass which contains certain chemicals, it is best to donate them.",
          itemClass_img: 'http://thesweethome.com/wp-content/uploads/sites/3/2015/11/01-widget-our-pick-drinking-glasses-6301.jpg'
        },
        {
          itemClass_id: 77061,
          category_id: 88001,
          itemClass_name: 'Windows',
          itemClass_info: "Don't throughout your old windows. Most buliding recyclers will take them to be reused on other projects. ",
          itemClass_img: 'http://colorado.momentumrecycling.com/wp-content/uploads/2016/04/Old-Windows1-1000x430.jpg'
        },
        {
          itemClass_id: 77062,
          category_id: 88005,
          itemClass_name: 'Aluminium Foil & Baking Trays',
          itemClass_info: "Although aluminum foil is 100 percent recyclable, used foil isn’t often accepted by recycling centers.",
          itemClass_img: 'http://img.chineseea.com/nimg/99/8f/4b1a3e1acadc0ac4e0855bfa24dc-300x300-0/custom_food_packaging_aluminium_foil_baking_trays_disposable_aluminum_pans.jpg'
        },
        {
          itemClass_id: 77063,
          category_id: 88005,
          itemClass_name: 'Aerosol Cans',
          itemClass_info: "If empty, aerosol cans are recyclable. If partially full, they are treated as household hazardous waste. ",
          itemClass_img: 'http://www.wastenet.org.nz/~/media/WasteNet/Images/Common/Aerosol%20cansShutterstock83991775%20Small.ashx'
        },
        {
          itemClass_id: 77064,
          category_id: 88005,
          itemClass_name: 'Metal Pots, Pans & Lids',
          itemClass_info: "Most landfills that accept metal will be happy to take your old nonstick pans, which they will recycle along with other scrap metal.",
          itemClass_img: 'http://static3.olympus-ims.com/data/Image/appnotes/clad_cookware.jpg?rev=3219'
        }
      ]);
    });
};
