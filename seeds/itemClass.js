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
          itemClass_img: 'http://www.guide-to-laptops.com/images/laptop-wide-screen.jpg'
        },
        {
          itemClass_id: 77004,
          category_id: 88004,
          itemClass_name: 'Paint',
          itemClass_info: "On average New Zealander's dump 10 percent of the paint they purchase, which could be recycled",
          itemClass_img: 'http://www.keepcarrollbeautiful.org/wp-content/uploads/2012/07/3-Coloured-paint-cans.jpg'
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
          itemClass_img: 'http://www.megasantacecilia.com/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/t/l/tlmd_tlmd_013112_huevosjpg_bim.jpg'
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
          itemClass_img: 'https://userscontent2.emaze.com/images/de25feb7-7440-4f10-8a0f-5900e19b83b9/cc488e24b6dccc7514bbf3fac5279076.jpeg'
        },
        {
          itemClass_id: 77010,
          category_id: 88006,
          itemClass_name: 'Food Containers',
          itemClass_info: "Random fact, it requires 3 times the amount of water to produce a plastic bottle than it does to fill it.",
          itemClass_img: 'http://www.supplycity.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/T/S/TS64L.jpg'
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
          itemClass_img: 'http://www.gubba.co.nz/ic/2017661660/giant_garden_bag.jpg'
        },
        {
          itemClass_id: 77013,
          category_id: 88008,
          itemClass_name: 'Weeds',
          itemClass_info: "Using a simple compost heap you can recycle most of your organic household and garden.",
          itemClass_img: 'https://2ecffd01e1ab3e9383f0-07db7b9624bbdf022e3b5395236d5cf8.ssl.cf4.rackcdn.com/Product-800x800/ab298f2f-38d5-4eb9-9b30-bcd86e8ef7b5.png'
        },
        {
          itemClass_id: 77014,
          category_id: 88009,
          itemClass_name: 'Baby & Child Clothing',
          itemClass_info: "There a plenty of non-profit organisations willing to take your unwanted baby clothes for families in need.",
          itemClass_img: 'https://ae01.alicdn.com/kf/HTB1MHppOpXXXXbxXFXXq6xXFXXXl/-font-b-Newborn-b-font-font-b-Baby-b-font-Boy-Clothes-Sleeveless-Square-Collar.jpg'
        },
        {
          itemClass_id: 77015,
          category_id: 88009,
          itemClass_name: 'Cloth and Textiles',
          itemClass_info: "Recycling unwanted cloth reduces landfill waste as well as the amount of resources needed to produce new clothing.",
          itemClass_img: 'https://www.boscovs.com/wcsstore/boscovs/images/store/product/images/523756631m56886.jpg'
        },
        {
          itemClass_id: 77016,
          category_id: 88009,
          itemClass_name: 'Adult Clothing',
          itemClass_info: "Recycling your used clothing, keeps extra waste out of the landfills.",
          itemClass_img: 'https://t4.ftcdn.net/jpg/00/72/77/37/240_F_72773780_C2fAOtqEL48etWvn61GMaY7ZopeRG37I.jpg'
        },
        {
          itemClass_id: 77017,
          category_id: 88003,
          itemClass_name: 'Cellphones',
          itemClass_info: "For every one million cell phones that are recycled, the EPA states that 35,274 lbs of copper, 772 lbs of silver, 75 lbs of gold, and 33 lbs of palladium can be recovered.",
          itemClass_img: 'https://whatcanyoudowithanthropology.files.wordpress.com/2015/05/cell-phones.jpg'
        },
        {
          itemClass_id: 77018,
          category_id: 88003,
          itemClass_name: 'Computer Accessories',
          itemClass_info: "This can include keyboards, speakers, mice, cords.",
          itemClass_img: 'https://computeraccessoriessydney.files.wordpress.com/2015/04/cropped-computer-accessories-sydney1.png'
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
          itemClass_img: 'https://img.newatlas.com/canon-powershot-n-4.jpeg?auto=format%2Ccompress&fit=max&h=670&q=60&w=1000&s=ba686d58aaf3a5f40b7495040b4a3e5a'
        },
        {
          itemClass_id: 77021,
          category_id: 88010,
          itemClass_name: 'Dishwashers',
          itemClass_info: "Recycling old appliances can save tons of energy and materials.",
          itemClass_img: 'http://www.vendeglatoipari-berendezesek.hu/_data/PR_10aad4ea89eaf5161196bd098757b634.jpg'
        },
        {
          itemClass_id: 77022,
          category_id: 88010,
          itemClass_name: 'Refrigerators',
          itemClass_info: "Recycling old appliances can save tons of energy and materials.",
          itemClass_img: 'http://best3reviews.com/wp-content/uploads/2011/09/mini-fridge.jpg'
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
          itemClass_img: 'http://www.germes-online.com/direct/dbimage/50142041/Vacuum_Cleaner.jpg'
        },
        {
          itemClass_id: 77025,
          category_id: 88011,
          itemClass_name: 'Couches',
          itemClass_info: "There are plenty of ways to find or get rid of second-hand furniture, charity Stores, second-hand furniture shops, antique store and trademe to name a few.",
          itemClass_img: 'http://www.ikea.com/PIAimages/0376655_PE558933_S5.JPG'
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
          itemClass_img: 'http://www.securrtrashcans.com/wp-content/uploads/2014/03/shutterstock_164995049.jpg'
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
          itemClass_img: 'https://www.planetnatural.com/wp-content/uploads/2013/04/household-chemicals.jpg'
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
          itemClass_img: 'https://t4.ftcdn.net/jpg/01/07/13/19/240_F_107131939_nfKZATDUMe2ZAHOzzyfEtnQEZIiDRjV5.jpg'
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
          itemClass_img: 'http://static.dnaindia.com/sites/default/files/styles/half/public/2016/03/21/440269-drugs-dnaedited.jpg?itok=HYgMUYWx'
        },
        {
          itemClass_id: 77036,
          category_id: 88010,
          itemClass_name: 'Sewing Machines',
          itemClass_info: "Donate old working sewing machines for further use.",
          itemClass_img: 'http://www.hobbycraft.co.uk/SupplyImages/587409_1000_1_800.jpg'
        },
        {
          itemClass_id: 77037,
          category_id: 88010,
          itemClass_name: 'Lamps',
          itemClass_info: "Improper disposal of lamps leads to environmental pollution and this may in turn harm human health. Click here to find out how to dispose your old lamps sustainably.",
          itemClass_img: 'http://images.prod.meredith.com/product/a84a6aba5fd5c84e79961f92604f4041/6af05c9fd732a6f311b646bf1251fb6bf6ed87fc410a99c4cb147d5c81acfe39/l/square-ginger-jar-lamp-vintage-teal'
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
          itemClass_info: "No longer need your office chair? Consider donating these to an op shop or to a not for profit organisation that might need furniture for their offices.",
          itemClass_img: 'https://sits-pod43.demandware.net/dw/image/v2/AAWO_PRD/on/demandware.static/-/Sites-wsl-master-catalog/default/dw9cf3da82/d4/b1/B79657_00.jpg?sw=232&sh=232&sm=fit'
        },
        {
          itemClass_id: 77044,
          category_id: 88011,
          itemClass_name: 'Chest of Drawers',
          itemClass_info: "Spare set of drawers taking up space in your home? Consider donating them to an organisation that will ensure they are given to someone in need.",
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
          itemClass_info: "There are lots of organisations that rescue surplus food from retailers and ensure that this food is redistributed to those in need.",
          itemClass_img: 'https://s-media-cache-ak0.pinimg.com/originals/51/a1/e9/51a1e94f26adcd2af4597b1cf2669ec3.jpg'
        },
        {
          itemClass_id: 77051,
          category_id: 88008,
          itemClass_name: 'Flower Bouquets',
          itemClass_info: "Once they’re dried, flowers make for ah-mazing aromatherapy. Consider making potpourri with.",
          itemClass_img: 'https://cdn.shopify.com/s/files/1/1478/2480/products/The_Hamptons_-_square4_1200x.png?v=1494304116'
        },
        {
          itemClass_id: 77052,
          category_id: 88008,
          itemClass_name: 'Branches',
          itemClass_info: "If they are big branches, someone in your neighbourhood might want them for firewood.",
          itemClass_img: 'http://www.gardenshoponline.com/catalog/images/96926.jpg'
        },
        {
          itemClass_id: 77053,
          category_id: 88008,
          itemClass_name: 'Christmas Trees',
          itemClass_info: "Consider an artificial tree and use a pine scented candle to imitate the smell!",
          itemClass_img: 'https://jerrymabbott.files.wordpress.com/2014/12/wpid-screenshot_2014-12-16-08-56-18-1.png'
        },
        {
          itemClass_id: 77054,
          category_id: 88008,
          itemClass_name: 'Pot Plants',
          itemClass_info: "",
          itemClass_info: "Try your local garden shop to see whether they might be interested in taking your pot plants.",
          itemClass_img: 'https://us.123rf.com/450wm/firina/firina1205/firina120500032/13724067-flower-pot-with-fresh-thyme-thymus-citriodorus-on-white-background.jpg?ver=6'
        },
        {
          itemClass_id: 77055,
          category_id: 88009,
          itemClass_name: 'Curtains',
          itemClass_info: "Curtains provide insulation from the cold. Donate yours so that they can help make someone else's house warmer.",
          itemClass_img: 'http://www.ikea.com/gb/en/images/products/teresia-sheer-curtains-1-pair-white__0191200_pe345233_s5.jpg'
        },
        {
          itemClass_id: 77056,
          category_id: 88009,
          itemClass_name: 'Shoes',
          itemClass_info: "You can't put shoes out with your household recycling. There are lots of places that accept second-hand shoes in good condition.",
          itemClass_img: 'https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=146587788'
        },
        {
          itemClass_id: 77057,
          category_id: 88009,
          itemClass_name: 'Blankets',
          itemClass_info: "If you have piles of blankets taking up space in your cupboards, consider donating these.",
          itemClass_img: 'http://www.everythingsummercamp.com/common/images/products/large/Bunkhouse%20Plaid%20Wool%20Blanket-grey-blue.jpg'
        },
        {
          itemClass_id: 77058,
          category_id: 88001,
          itemClass_name: 'Broken Glass',
          itemClass_info: "You can't put broken glass out in your green recycling crate. Glass crates are sorted by hand at the kerbside and broken glass is a major safety risk.",
          itemClass_img: 'http://examinetheglass.com/wp-content/uploads/2011/11/broken_glass1.jpg'
        },
        {
          itemClass_id: 77059,
          category_id: 88001,
          itemClass_name: 'Pyrex',
          itemClass_info: "You can't put Pyrex glass out in your green recycling crate. This kind of glass can't be recycled with other glass because it is chemically treated to withstand high temperatures, which changes the composition of the glass.",
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
          itemClass_img: 'https://s-media-cache-ak0.pinimg.com/736x/70/74/18/70741890265bb3ab20b1a0b81369b223.jpg'
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
