exports.seed = function(knex, Promise) {
  return knex('orgs').del()
    .then(function() {
      return knex('orgs').insert([{
          org_id: 66001,
          org_name: "Southern Landfill and Recycling Center",
          org_address: "Landfill Rd, Owhiro Bay, Wellington 6023",
          org_url: "http://wellington.govt.nz/services/environment-and-waste/landfill",
          org_img: "https://static2.stuff.co.nz/1383797061/879/9374879_600x400.jpg",
          org_info: "At the Southern Landfill and Recycle Centre you can drop off household and commercial rubbish, and buy recycled goods and compost.",
          org_location: ""
        },
        {
          org_id: 66002,
          org_name: "Wellington Women's Refuge",
          org_address: "Level 1, 264 Cuba Street, Wellington",
          org_url: "https://www.wellingtonwomensrefuge.co.nz/",
          org_img: "https://www.wellingtonwomensrefuge.co.nz/wp-content/themes/womensrefuge/images/newsite/header/womens-refuge-logo.png",
          org_info: "Wellington Women's Refuge provides support and advocacy for women and children who are experiencing domestic violence.",
          org_location: ""
        },
        {
          org_id: 66003,
          org_name: 'Wellington SPCA',
          org_address: "Wellington City: 140 Alexandra Road, Newtown, Wellington 6021, New Zealand",
          org_url: "https://www.wellingtonspca.org.nz/",
          org_img: "https://www.wellingtonspca.org.nz/themes/spcawellington/images/logo%20top.png",
          org_info: "Wellington SPCA promotes the humane treatment of animals and prevents cruelty to animals through law enforcement, community education and engagement.",
          org_location: " "
        },
        {
          org_id: 66004,
          org_name: 'Kaibosh Food Rescue',
          org_address: "Wellington City: 3 Myrtle Crescent, Mount Cook, Wellington 6021, Lower Hutt: 33 Dudley Street, Hutt Central, Lower Hutt 5010",
          org_url: "http://www.kaibosh.org.nz/",
          org_img: 'http://www.kaibosh.org.nz/wp-content/uploads/2015/10/kaibosh_frh_logo_colour-300x194.png',
          org_info: "Food Rescue organization - Collects surplus food products from all over Wellington to deliver to community groups to feed nutritious meals to those who need it most, reducing food waste and helping people in the community.",
          org_location: " "
        },
        {
          org_id: 66005,
          org_name: "GURGL",
          org_address: "",
          org_url: "http://www.gurgl.nz/",
          org_img: "/images/gurglLogo.svg",
          org_info: "GURGL is a community clothes sharing app, based in New Zealand, which allows users to donate or swap clothing items for children and adults.",
          org_location: ""
        },
        {
          org_id: 66006,
          org_name: "Wellington City Council Green Recycling Bags or Wheelie Bin",
          org_address: "101 Wakefield Street, Wellington 6011",
          org_url: "http://wellington.govt.nz/services/environment-and-waste/rubbish-and-recycling/recycling/wheelie-bins-bags-and-crates",
          org_img: "http://wellington.govt.nz/~/media/services/environment-and-waste/rubbish-and-recycling/images/84983_0069_recycling_bin.jpg?mh=320&mw=320",
          org_info: "Contact Wellington City Council to get your own Wheelie Recycle Bin, or council-approved green recycling bags.",
          org_location: ""
        },
        {
          org_id: 66007,
          org_name: "Wellington City Council Green Recycling Bin",
          org_address: "101 Wakefield Street, Wellington 6011",
          org_url: "http://wellington.govt.nz/~/media/services/environment-and-waste/rubbish-and-recycling/images/84983_0069_recycling_bin.jpg?mh=320&mw=320",
          org_img: "http://wellington.govt.nz/~/media/your-council/news/images/2011/06/recycling-lg.jpg?mw=320&mh=320",
          org_info: "Contact Wellington City Council to get your own Green Glass Recycle Bin.",
          org_location: ""
        },
        {
          org_id: 66008,
          org_name: "Salvation Army Family Store",
          org_address: 'Wellington City Location: 203 Willis St, Te Aro, Wellington 6011 (For full list of locations in your area, visit the Salvation Army website).',
          org_url: "http://www.salvationarmy.org.nz/centres/nz/lower-north-island/wellington-city",
          org_img: "http://waynetheatre.org/wp-content/uploads/2016/08/salvation-army.png",
          org_info: "The Salvation Army is a Protestant Church and international charity organization. Their stores sell pre-loved items to assist in their fundraising efforts for food distribution, disaster relief, rehabilitation centers, anti-human trafficking efforts, and a wealth of children's programs.",
          org_location: ""
        },
        {
          org_id: 66009,
          org_name: "St. Vincent dePaul's OpShop",
          org_address: "Wellington City Location: 107 Aro Street, Wellington 6021 (For full list of locations in your area, visit the St. Vincent dePaul's website).",
          org_url: "http://www.svdp.org.nz/'",
          org_img: "http://svdppoc.com/wp-content/uploads/2015/03/St-vincent-de-Paul-logo2.gif",
          org_info: "The St Vincent de Paul OpShops sell second-hand clothes, furniture, and more, to assist in their fundraising efforts for local welfare programs. Their sustainability efforts also encourage used items to be recycled, which would otherwise be thrown away.",
          org_location: ""
        },
        {
          org_id: 66010,
          org_name: "Sustainability Trust",
          org_address: "2 Forresters Lane, Te Aro, Wellington 6011",
          org_url: "https://www.sustaintrust.org.nz/",
          org_img: "https://pbs.twimg.com/profile_images/686334266079227905/oiCVacan.jpg",
          org_info: "Sustainability Trust helps reduce E-Waste by giving people a place to recycle their old electronics. As the Wellington region's energy experts, they provide workshops and advice on living and working sustainably. They fund their work and our other award-winning community programmes with profits from the sale and installation and energy efficient heating, lighting, ventilation and insulation.",
          org_location: ""
        },
        {
          org_id: 66011,
          org_name: "E-Cycle",
          org_address: "Web-Based",
          org_url: "http://www.e-cycle.co.nz/",
          org_img: "./images/EClogo141.jpg",
          org_info: "E-Cycle specialises in responsible, environmentally friendly recycling of end of life electronic products.",
          org_location: ""
        },
        {
          org_id: 66012,
          org_name: "Resene",
          org_address: "Wellington City: 74 Cambridge Terrace, Basin Reserve, Wellington (For full list of Resene locations in your area, visit their website.')",
          org_url: "http://www.resene.co.nz/",
          org_img: "http://www.aspectgroup.co.nz/public/db_images/section/section_image_175.png",
          org_info: "Resene PaintWise collects unused paint to recycle, which would otherwise end up in a landfill. The paint is then donated to schools and other community groups.",
          org_location: ""
        },
        {
          org_id: 66013,
          org_name: "The Free Store",
          org_address: "211 Willis Street, Te Aro, Wellington",
          org_url: "https://www.thefreestore.org.nz/",
          org_img: "https://cdn.neighbourly.co.nz/images/cache/user_profile_page_picture/organisation/56971e03e507d7.47956427.jpeg?170410",
          org_info: "The Free Store collects surplus food from grocery stores and restaurants around Wellington, and redistributes it to people who need it most. Their efforts help to greatly reduce food waste in Wellington, and help make sure that no one needs to go hungry.",
          org_location: ""
        }
      ]);
    });
};
