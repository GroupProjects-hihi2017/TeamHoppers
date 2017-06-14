exports.seed = function (knex, Promise) {
  return knex('orgs').del()
    .then(function () {
      return knex('orgs').insert([
        {org_id:66001, name: "Southern Landfill and Recycling Center", address: "Landfill Rd, Owhiro Bay, Wellington 6023", url: "http://wellington.govt.nz/services/environment-and-waste/landfill", img: "https://static2.stuff.co.nz/1383797061/879/9374879_600x400.jpg", info: "At the Southern Landfill and Recycle Centre you can drop off household and commercial rubbish, and buy recycled goods and compost.", location:""},
        {org_id:66002, name: "Wellington Women's Refuge", address: "Level 1, 264 Cuba Street, Wellington", url: "https://www.wellingtonwomensrefuge.co.nz/", img: "https://www.wellingtonwomensrefuge.co.nz/wp-content/themes/womensrefuge/images/newsite/header/womens-refuge-logo.png", info: "Wellington Women's Refuge provides support and advocacy for women and children who are experiencing domestic violence.", location: ""},
        {org_id:66003, name: 'Wellington SPCA', address: "Wellington City: 140 Alexandra Road, Newtown, Wellington 6021, New Zealand", url: "https://www.wellingtonspca.org.nz/", img: "https://www.wellingtonspca.org.nz/themes/spcawellington/images/logo%20top.png", info: "Wellington SPCA promotes the humane treatment of animals and prevents cruelty to animals through law enforcement, community education and engagement.", location: " "},
        {org_id:66004, name: 'Kaibosh Food Rescue', address: "Wellington City: 3 Myrtle Crescent, Mount Cook, Wellington 6021, Lower Hutt: 33 Dudley Street, Hutt Central, Lower Hutt 5010", url: "http://www.kaibosh.org.nz/", img: 'http://www.kaibosh.org.nz/wp-content/uploads/2015/10/kaibosh_frh_logo_colour-300x194.png', info: "Food Rescue organzation - Collects surplus food products from all over Wellington to deliver to community groups to feed nutritious meals to those who need it most, reducing food waste and helping people in the community.", location: " "}
      ]);
    });
};
