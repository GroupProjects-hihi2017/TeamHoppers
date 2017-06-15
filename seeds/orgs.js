exports.seed = function (knex, Promise) {
  return knex('orgs').del()
    .then(function () {
      return knex('orgs').insert([
        {org_id:66001, org_name: "Southern Landfill and Recycling Center", org_address: "Landfill Rd, Owhiro Bay, Wellington 6023", org_url: "http://wellington.govt.nz/services/environment-and-waste/landfill", org_img: "https://static2.stuff.co.nz/1383797061/879/9374879_600x400.jpg", org_info: "At the Southern Landfill and Recycle Centre you can drop off household and commercial rubbish, and buy recycled goods and compost.", org_location:""},
        {org_id:66002, org_name: "Wellington Women's Refuge", org_address: "Level 1, 264 Cuba Street, Wellington", org_url: "https://www.wellingtonwomensrefuge.co.nz/", org_img: "https://www.wellingtonwomensrefuge.co.nz/wp-content/themes/womensrefuge/images/newsite/header/womens-refuge-logo.png", org_info: "Wellington Women's Refuge provides support and advocacy for women and children who are experiencing domestic violence.", org_location: ""},
        {org_id:66003, org_name: 'Wellington SPCA', org_address: "Wellington City: 140 Alexandra Road, Newtown, Wellington 6021, New Zealand", org_url: "https://www.wellingtonspca.org.nz/", org_img: "https://www.wellingtonspca.org.nz/themes/spcawellington/images/logo%20top.png", org_info: "Wellington SPCA promotes the humane treatment of animals and prevents cruelty to animals through law enforcement, community education and engagement.", org_location: " "},
        {org_id:66004, org_name: 'Kaibosh Food Rescue', org_address: "Wellington City: 3 Myrtle Crescent, Mount Cook, Wellington 6021, Lower Hutt: 33 Dudley Street, Hutt Central, Lower Hutt 5010", org_url: "http://www.kaibosh.org.nz/", org_img: 'http://www.kaibosh.org.nz/wp-content/uploads/2015/10/kaibosh_frh_logo_colour-300x194.png', org_info: "Food Rescue organzation - Collects surplus food products from all over Wellington to deliver to community groups to feed nutritious meals to those who need it most, reducing food waste and helping people in the community.", org_location: " "},
        {org_id:66005, org_name: "GURGL", org_address: "", org_url: "", org_img: "", org_info: "", org_location:""},
        {org_id:66006, org_name: "Wellington City Council green recycling bags or bin", org_address: "", org_url: "", org_img: "", org_info: "", org_location:""},
        {org_id:66007, org_name: "Salvation Army", org_address: "", org_url: "", org_img: "", org_info: "", org_location:""},
        {org_id:66008, org_name: "St. Vincent dePaul's OpShop", org_address: "", org_url: "", org_img: "", org_info: "", org_location:""},
        {org_id:66009, org_name: "Sustainability Trust", org_address: "", org_url: "", org_img: "", org_info: "", org_location:""},
        {org_id:66010, org_name: "E-Cycle", org_address: "", org_url: "", org_img: "", org_info: "", org_location:""},
        {org_id:66011, org_name: "Resene", org_address: "", org_url: "", org_img: "", org_info: "", org_location:""},
        {org_id:66012, org_name: "local egg supplier", org_address: "", org_url: "", org_img: "", org_info: "", org_location:""},
        {org_id:66013, org_name: "clothing bin", org_address: "", org_url: "", org_img: "", org_info: "", org_location:""},
        {org_id:66014, org_name: "", org_address: "", org_url: "", org_img: "", org_info: "", org_location:""},
        {org_id:66015, org_name: "", org_address: "", org_url: "", org_img: "", org_info: "", org_location:""}
      ]);
    });
};
