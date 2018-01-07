exports.seed = function(knex, Promise) {
  return knex('orgs').del()
    .then(function() {
      return knex('orgs').insert([{
          org_id: 66001,
          org_name: "Southern Landfill and Recycling Center",
          org_address: "Landfill Rd, Owhiro Bay, Wellington 6023",
          org_url: "http://wellington.govt.nz/services/environment-and-waste/landfill",
          org_img: "https://static2.stuff.co.nz/1383797061/879/9374879_600x400.jpg",
          org_info: "At the Southern Landfill and Recycle Centre you can drop off any items for recycling or disposing that cannot be repurposed.",
          org_isDonatable: false
        },
        {
          org_id: 66002,
          org_name: "Wellington Women's Refuge",
          org_address: "Level 1, 264 Cuba Street, Wellington",
          org_url: "https://www.wellingtonwomensrefuge.co.nz/",
          org_img: "https://www.wellingtonwomensrefuge.co.nz/wp-content/themes/womensrefuge/images/newsite/header/womens-refuge-logo.png",
          org_info: "Wellington Women's Refuge provides support and advocacy for women and children who are experiencing domestic violence.",
          org_isDonatable: true
        },
        {
          org_id: 66003,
          org_name: 'Wellington SPCA',
          org_address: "140 Alexandra Road, Newtown, Wellington 6021, New Zealand",
          org_url: "https://www.wellingtonspca.org.nz/",
          org_img: "https://www.wellingtonspca.org.nz/themes/spcawellington/images/logo%20top.png",
          org_info: "Wellington SPCA promotes the humane treatment of animals and prevents cruelty to animals through law enforcement, community education and engagement.",
          org_isDonatable: true
        },
        {
          org_id: 66004,
          org_name: 'Kaibosh Food Rescue',
          org_address: "3 Myrtle Crescent, Mount Cook, Wellington 6021",
          org_url: "http://www.kaibosh.org.nz/",
          org_img: 'http://www.kaibosh.org.nz/wp-content/uploads/2015/10/kaibosh_frh_logo_colour-300x194.png',
          org_info: "Food Rescue organization - Collects surplus food products from all over Wellington to deliver to community groups to feed nutritious meals to those who need it most, reducing food waste and helping people in the community. See website for other Wellington area locations.",
          org_isDonatable: true
        },
        {
          org_id: 66005,
          org_name: "GURGL",
          org_address: "",
          org_url: "http://www.gurgl.nz/",
          org_img: "/images/gurglLogo.svg",
          org_info: "GURGL provides a fun, easy platform for you to recycle your childrens wardrobes, and borrow more! With your help, they can redirect perfectly good clothing out of the landfill waste pile and onto the backs of children who need them.",
          org_isDonatable: true
        },
        {
          org_id: 66006,
          org_name: "Green Council Bags or Wheelie Bin",
          org_address: "101 Wakefield Street, Wellington 6011",
          org_url: "http://wellington.govt.nz/services/environment-and-waste/rubbish-and-recycling/recycling/wheelie-bins-bags-and-crates",
          org_img: "https://www.bindoctor.com/bin-cleaning/wp-content/themes/bindoctor/images/organicbin.png",
          org_info: "Contact Wellington City Council to get your own Wheelie Recycle Bin, or council-approved green recycling bags.",
          org_isDonatable: false
        },
        {
          org_id: 66007,
          org_name: "Council Recycling Bin",
          org_address: "101 Wakefield Street, Wellington 6011",
          org_url: "http://wellington.govt.nz/services/environment-and-waste/rubbish-and-recycling/recycling/wheelie-bins-bags-and-crates",
          org_img: "/images/recycling-bin.png",
          org_info: "Contact Wellington City Council to get your own Green Glass Recycle Bin.",
          org_isDonatable: false
        },
        {
          org_id: 66008,
          org_name: "The Salvation Army Family Stores",
          org_address: '203 Willis St, Te Aro, Wellington 6011',
          org_url: "http://www.salvationarmy.org.nz/centres/nz/lower-north-island/wellington-city",
          org_img: "http://waynetheatre.org/wp-content/uploads/2016/08/salvation-army.png",
          org_info: "The Salvation Army is a Protestant Church and international charity organization. Their stores sell pre-loved items to assist in their fundraising efforts for food distribution, disaster relief, rehabilitation centers, anti-human trafficking efforts, and a wealth of children's programs (for full list of locations in your area, visit the Salvation Army website).",
          org_isDonatable: true
        },
        {
          org_id: 66009,
          org_name: "St. Vincent de Paul's OpShop",
          org_address: "107 Aro Street, Wellington 6021",
          org_url: "https://www.svdp.org.nz/shops",
          org_img: "http://svdppoc.com/wp-content/uploads/2015/03/St-vincent-de-Paul-logo2.gif",
          org_info: "The St Vincent de Paul OpShops sell second-hand clothes, furniture, and more, to assist in their fundraising efforts for local welfare programs. Their sustainability efforts also encourage used items to be recycled, which would otherwise be thrown away.For full list of locations in your area, visit the St. Vincent de Paul's website.",
          org_isDonatable: true
        },
        {
          org_id: 66010,
          org_name: "Sustainability Trust",
          org_address: "2 Forresters Lane, Te Aro, Wellington 6011",
          org_url: "https://www.sustaintrust.org.nz/",
          org_img: "https://pbs.twimg.com/profile_images/686334266079227905/oiCVacan.jpg",
          org_info: "Sustainability Trust helps reduce E-Waste by giving people a place to recycle their old electronics. As the Wellington region's energy experts, they provide workshops and advice on living and working sustainably. They fund their work and our other award-winning community programmes with profits from the sale and installation and energy efficient heating, lighting, ventilation and insulation.",
          org_isDonatable: false
        },
        {
          org_id: 66011,
          org_name: "Kiwi Community Assistance",
          org_address: "5 Cambridge St, Tawa, Wellington 5028",
          org_url: "https://www.kca.org.nz/",
          org_img: "https://www.kca.org.nz/assets/images/logo.jpg",
          org_info: "Kiwi Community Assistance is a registered charity based in Tawa, Wellington that is run by volunteers. As a distribution hub to local schools, foodbanks and other charities we provide fresh produce, non perishable food, clothing, books, toys, through to household goods including furniture and whiteware to families in need in communities throughout Wellington.",
          org_isDonatable: true
        },
        {
          org_id: 66012,
          org_name: "Resene",
          org_address: "74 Cambridge Terrace, Basin Reserve, Wellington",
          org_url: "http://www.resene.co.nz/",
          org_img: "http://www.aspectgroup.co.nz/public/db_images/section/section_image_175.png",
          org_info: "Resene PaintWise collects unused paint to recycle, which would otherwise end up in a landfill. The paint is then donated to schools and other community groups.For full list of Resene locations in your area, visit their website.",
          org_isDonatable: true
        },
        {
          org_id: 66013,
          org_name: "The Free Store",
          org_address: "211 Willis Street, Te Aro, Wellington",
          org_url: "https://www.thefreestore.org.nz/",
          org_img: "https://cdn.neighbourly.co.nz/images/cache/user_profile_page_picture/organisation/56971e03e507d7.47956427.jpeg?170410",
          org_info: "The Free Store collects surplus food from grocery stores and restaurants around Wellington, and redistributes it to people who need it most. Their efforts help to greatly reduce food waste in Wellington, and help make sure that no one needs to go hungry.",
          org_isDonatable: true
        },
        {
          org_id: 66014,
          org_name: "Happy Valley Second Treasures",
          org_address: "Landfill Rd, Owhiro Bay, Wellington 6023",
          org_url: "http://wellington.govt.nz/services/environment-and-waste/landfill/location-and-hours",
          org_img: "https://static2.stuff.co.nz/1383797061/879/9374879_600x400.jpg",
          org_info: "Second Treasures is a salvaged goods shop at the Southern Landfill. You can donate or buy a range of items.",
          org_isDonatable: true
        },
        {
          org_id: 66015,
          org_name: "Dress for Success",
          org_address: "Level 2, 53 Boulcott Street Wellington",
          org_url: "https://wellington.dressforsuccess.org/",
          org_img: "http://www.cleantastic.co.nz/wp-content/uploads/2012/09/DFS__Logo1.png",
          org_info: "Dress for Success helps women pursue their aspirations by providing appropriate clothing for job interviews, a network of support and career development tools. See their website for other Wellington locations.",
          org_isDonatable: true
        },
        {
          org_id: 66016,
          org_name: "The Soup Kitchen",
          org_address: "132 Tory St, Te Aro, Wellington",
          org_url: "https://soupkitchen.org.nz/donate/",
          org_img: "https://www.everydayhero.co.nz/events/downloads/0000/1417/Soup-Kitchen-Logo-Horizontal.jpg",
          org_info: "The Soup Kitchen is a safe place where people can find community, enjoy nutritious meals and participate in meaningful activities, such as learning computer skills and gardening.",
          org_isDonatable: true
        },
        {
          org_id: 66017,
          org_name: "Wellington City Mission",
          org_address: "19 Gordon Place, Newtown",
          org_url: "http://www.wellingtoncitymission.org.nz/index.php/donate-food-or-goods/#Donate%20Food%20and%20Goods",
          org_img: "http://dogoodjobs.co.nz/wp-content/uploads/company_logos/2015/11/WCM-Logo-2014-Short4.jpg",
          org_info: "The Wellington City Mission is a charitable trust affiliated to the Anglican Church. They rely on the generosity of Wellingtonians to operate their Foodbank and Drop-in Centre.",
          org_isDonatable: true
        },
        {
          org_id: 66018,
          org_name: "Wellington Curtain Bank",
          org_address: "2 Forresters Lane, Te Aro, Wellington 6011",
          org_url: "http://www.sustaintrust.org.nz/inyourcommunity/curtainbank/",
          org_img: "https://pbs.twimg.com/profile_images/686334266079227905/oiCVacan.jpg",
          org_info: "Wellington Curtain Bank is open Tuesday, Wednesday and Thursday from 9am to 4.30pm. Each year more than 500 families receive lined, fitted curtains free from the Curtain Bank. Please help by donating your pre-loved curtains, fabric, and tracks.",
          org_isDonatable: true
        },
        {
          org_id: 66019,
          org_name: "DCM",
          org_address: "2 Lukes Lane, Te Aro, Wellington",
          org_url: "https://www.dcm.org.nz/",
          org_img: "http://www.stjohnsinthecity.org.nz/wp-content/uploads/2013/06/dcm_logo.jpg",
          org_info: "DCM works with people who are homeless in Wellington. Drop off unwanted books, CDs, DVDs, vinyl and puzzles for their annual bookfair.",
          org_isDonatable: true
        },
        {
          org_id: 66020,
          org_name: "New Zealand Red Cross",
          org_address: "69 Molesworth Street, Thorndon, Wellington 6011",
          org_url: "https://www.redcross.org.nz/what-we-do/in-new-zealand/refugee-programmes/donating-goods/",
          org_img: "https://upload.wikimedia.org/wikipedia/commons/3/32/New_Zealand_Red_Cross_Logo.gif",
          org_info: "Families from refugee backgrounds often arrive with little more than a suitcase or two. The New Zealand Red Cross relies on the generosity of the community to help them set up their homes.",
          org_isDonatable: true
        },
        {
          org_id: 66021,
          org_name: "New Zealand Pharmacy Network",
          org_address: "",
          org_url: "https://nzpharmacy.wordpress.com/2009/06/09/disposal-of-unwanted-medicines/",
          org_img: "http://itsrecycled.com/wp-includes/SimplePie/Decode/tmp/images/logo.png",
          org_info: "Members of the public should be encouraged to return unused and expired medicines to their local pharmacy for disposal.",
          org_isDonatable: false
        }
      ]);
    });
};
