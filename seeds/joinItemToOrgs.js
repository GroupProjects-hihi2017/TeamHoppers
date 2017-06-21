exports.seed = function (knex, Promise) {
  return knex('joinItemToOrgs').del()
    .then(function () {
      return knex('joinItemToOrgs').insert([{
        orgRelationships_id: 1,
        itemClass_id: 77001,
        org_id: 66001
      },
      {
        orgRelationships_id: 2,
        itemClass_id: 77001,
        org_id: 66006
      },
      {
        orgRelationships_id: 3,
        itemClass_id: 77001,
        org_id: 66007
      },
      {
        orgRelationships_id: 4,
        itemClass_id: 77002,
        org_id: 66001
      },
      {
        orgRelationships_id: 5,
        itemClass_id: 77002,
        org_id: 66006
      },
      {
        orgRelationships_id: 6,
        itemClass_id: 77002,
        org_id: 66007
      },
      {
        orgRelationships_id: 7,
        itemClass_id: 77003,
        org_id: 66010
      },
      {
        orgRelationships_id: 8,
        itemClass_id: 77003,
        org_id: 66020
      },
      {
        orgRelationships_id: 9,
        itemClass_id: 77004,
        org_id: 66012
      },
      {
        orgRelationships_id: 10,
        itemClass_id: 77005,
        org_id: 66006
      },
      {
        orgRelationships_id: 11,
        itemClass_id: 77005,
        org_id: 66007
      },
      {
        orgRelationships_id: 12,
        itemClass_id: 77006,
        org_id: 66006
      },
      {
        orgRelationships_id: 13,
        itemClass_id: 77006,
        org_id: 66007
      },
      {
        orgRelationships_id: 14,
        itemClass_id: 77007,
        org_id: 66006
      },
      {
        orgRelationships_id: 15,
        itemClass_id: 77007,
        org_id: 66007
      },
      {
        orgRelationships_id: 16,
        itemClass_id: 77008,
        org_id: 66006
      },
      {
        orgRelationships_id: 17,
        itemClass_id: 77008,
        org_id: 66007
      },
      {
        orgRelationships_id: 18,
        itemClass_id: 77009,
        org_id: 66006
      },
      {
        orgRelationships_id: 19,
        itemClass_id: 77009,
        org_id: 66007
      },
      {
        orgRelationships_id: 20,
        itemClass_id: 77010,
        org_id: 66006
      },
      {
        orgRelationships_id: 21,
        itemClass_id: 77010,
        org_id: 66007
      },
      {
        orgRelationships_id: 22,
        itemClass_id: 77011,
        org_id: 66006
      },
      {
        orgRelationships_id: 23,
        itemClass_id: 77011,
        org_id: 66007
      },
      {
        orgRelationships_id: 24,
        itemClass_id: 77012,
        org_id: 66001
      },
      {
        orgRelationships_id: 25,
        itemClass_id: 77013,
        org_id: 66001
      },
      {
        orgRelationships_id: 26,
        itemClass_id: 77014,
        org_id: 66005
      },
      {
        orgRelationships_id: 27,
        itemClass_id: 77014,
        org_id: 66008
      },
      {
        orgRelationships_id: 28,
        itemClass_id: 77014,
        org_id: 66009
      },
      {
        orgRelationships_id: 29,
        itemClass_id: 77014,
        org_id: 66020
      },
      {
        orgRelationships_id: 30,
        itemClass_id: 77015,
        org_id: 66001
      },
      {
        orgRelationships_id: 31,
        itemClass_id: 77016,
        org_id: 66002
      },
      {
        orgRelationships_id: 32,
        itemClass_id: 77016,
        org_id: 66008
      },
      {
        orgRelationships_id: 33,
        itemClass_id: 77016,
        org_id: 66009
      },
      {
        orgRelationships_id: 34,
        itemClass_id: 77016,
        org_id: 66011
      },
      {
        orgRelationships_id: 35,
        itemClass_id: 77016,
        org_id: 66015
      },
      {
        orgRelationships_id: 36,
        itemClass_id: 77016,
        org_id: 66017
      },
      {
        orgRelationships_id: 37,
        itemClass_id: 77017,
        org_id: 66010
      },
      {
        orgRelationships_id: 38,
        itemClass_id: 77018,
        org_id: 66010
      },
      {
        orgRelationships_id: 39,
        itemClass_id: 77019,
        org_id: 66010
      },
      {
        orgRelationships_id: 40,
        itemClass_id: 77019,
        org_id: 66008
      },
      {
        orgRelationships_id: 41,
        itemClass_id: 77019,
        org_id: 66009
      },
      {
        orgRelationships_id: 42,
        itemClass_id: 77020,
        org_id: 66010
      },
      {
        orgRelationships_id: 43,
        itemClass_id: 77020,
        org_id: 66009
      },
      {
        orgRelationships_id: 44,
        itemClass_id: 77020,
        org_id: 66008
      },
      {
        orgRelationships_id: 45,
        itemClass_id: 77021,
        org_id: 66014
      },
      {
        orgRelationships_id: 46,
        itemClass_id: 77021,
        org_id: 66008
      },
      {
        orgRelationships_id: 47,
        itemClass_id: 77021,
        org_id: 66009
      },
      {
        orgRelationships_id: 48,
        itemClass_id: 77022,
        org_id: 66008
      },
      {
        orgRelationships_id: 49,
        itemClass_id: 77022,
        org_id: 66009
      },
      {
        orgRelationships_id: 50,
        itemClass_id: 77022,
        org_id: 66014
      },
      {
        orgRelationships_id: 51,
        itemClass_id: 77023,
        org_id: 66008
      },
      {
        orgRelationships_id: 52,
        itemClass_id: 77023,
        org_id: 66009
      },
      {
        orgRelationships_id: 53,
        itemClass_id: 77023,
        org_id: 66014
      },
      {
        orgRelationships_id: 54,
        itemClass_id: 77024,
        org_id: 66001
      },
      {
        orgRelationships_id: 55,
        itemClass_id: 77025,
        org_id: 66008
      },
      {
        orgRelationships_id: 56,
        itemClass_id: 77025,
        org_id: 66009
      },
      {
        orgRelationships_id: 57,
        itemClass_id: 77025,
        org_id: 66014
      },
      {
        orgRelationships_id: 58,
        itemClass_id: 77025,
        org_id: 66020
      },
      {
        orgRelationships_id: 59,
        itemClass_id: 77026,
        org_id: 66008
      },
      {
        orgRelationships_id: 60,
        itemClass_id: 77026,
        org_id: 66009
      },
      {
        orgRelationships_id: 61,
        itemClass_id: 77026,
        org_id: 66014
      },
      {
        orgRelationships_id: 62,
        itemClass_id: 77026,
        org_id: 66020
      },
      {
        orgRelationships_id: 63,
        itemClass_id: 77027,
        org_id: 66008
      },
      {
        orgRelationships_id: 64,
        itemClass_id: 77027,
        org_id: 66009
      },
      {
        orgRelationships_id: 65,
        itemClass_id: 77027,
        org_id: 66014
      },
      {
        orgRelationships_id: 66,
        itemClass_id: 77027,
        org_id: 66020
      },
      {
        orgRelationships_id: 67,
        itemClass_id: 77028,
        org_id: 66010
      },
      {
        orgRelationships_id: 68,
        itemClass_id: 77028,
        org_id: 66001
      },
      {
        orgRelationships_id: 69,
        itemClass_id: 77029,
        org_id: 66001
      },
      {
        orgRelationships_id: 70,
        itemClass_id: 77029,
        org_id: 66010
      },
      {
        orgRelationships_id: 71,
        itemClass_id: 77030,
        org_id: 66001
      },
      {
        orgRelationships_id: 72,
        itemClass_id: 77031,
        org_id: 66001
      },
      {
        orgRelationships_id: 73,
        itemClass_id: 77032,
        org_id: 66006
      },
      {
        orgRelationships_id: 74,
        itemClass_id: 77032,
        org_id: 66007
      },
      {
        orgRelationships_id: 75,
        itemClass_id: 77033,
        org_id: 66006
      },
      {
        orgRelationships_id: 76,
        itemClass_id: 77033,
        org_id: 66007
      },
      {
        orgRelationships_id: 77,
        itemClass_id: 77034,
        org_id: 66008
      },
      {
        orgRelationships_id: 78,
        itemClass_id: 77034,
        org_id: 66009
      },
      {
        orgRelationships_id: 79,
        itemClass_id: 77035,
        org_id: 66021
      },
      {
        orgRelationships_id: 80,
        itemClass_id: 77036,
        org_id: 66008
      },
      {
        orgRelationships_id: 81,
        itemClass_id: 77036,
        org_id: 66009
      },
      {
        orgRelationships_id: 82,
        itemClass_id: 77036,
        org_id: 66014
      },
      {
        orgRelationships_id: 83,
        itemClass_id: 77037,
        org_id: 66008
      },
      {
        orgRelationships_id: 84,
        itemClass_id: 77037,
        org_id: 66009
      },
      {
        orgRelationships_id: 85,
        itemClass_id: 77037,
        org_id: 66014
      },
      {
        orgRelationships_id: 86,
        itemClass_id: 77038,
        org_id: 66006
      },
      {
        orgRelationships_id: 87,
        itemClass_id: 77038,
        org_id: 66007
      },
      {
        orgRelationships_id: 88,
        itemClass_id: 77039,
        org_id: 66008
      },
      {
        orgRelationships_id: 89,
        itemClass_id: 77039,
        org_id: 66009
      },
      {
        orgRelationships_id: 90,
        itemClass_id: 77040,
        org_id: 66001
      },
      {
        orgRelationships_id: 91,
        itemClass_id: 77041,
        org_id: 66001
      },
      {
        orgRelationships_id: 92,
        itemClass_id: 77042,
        org_id: 66008
      },
      {
        orgRelationships_id: 93,
        itemClass_id: 77042,
        org_id: 66009
      },
      {
        orgRelationships_id: 94,
        itemClass_id: 77042,
        org_id: 66014
      },
      {
        orgRelationships_id: 95,
        itemClass_id: 77043,
        org_id: 66008
      },
      {
        orgRelationships_id: 96,
        itemClass_id: 77043,
        org_id: 66009
      },
      {
        orgRelationships_id: 97,
        itemClass_id: 77044,
        org_id: 66008
      },
      {
        orgRelationships_id: 98,
        itemClass_id: 77044,
        org_id: 66009
      },
      {
        orgRelationships_id: 100,
        itemClass_id: 77045,
        org_id: 66001
      },
      {
        orgRelationships_id: 101,
        itemClass_id: 77046,
        org_id: 66008
      },
      {
        orgRelationships_id: 102,
        itemClass_id: 77046,
        org_id: 66009
      },
      {
        orgRelationships_id: 103,
        itemClass_id: 77046,
        org_id: 66014
      },
      {
        orgRelationships_id: 104,
        itemClass_id: 77046,
        org_id: 66019
      },
      {
        orgRelationships_id: 105,
        itemClass_id: 77047,
        org_id: 66001
      },
      {
        orgRelationships_id: 106,
        itemClass_id: 77048,
        org_id: 66001
      },
      {
        orgRelationships_id: 107,
        itemClass_id: 77049,
        org_id: 66002
      },
      {
        orgRelationships_id: 108,
        itemClass_id: 77015,
        org_id: 66003
      },
      {
        orgRelationships_id: 109,
        itemClass_id: 77049,
        org_id: 66011
      },
      {
        orgRelationships_id: 110,
        itemClass_id: 77049,
        org_id: 66016
      },
      {
        orgRelationships_id: 111,
        itemClass_id: 77049,
        org_id: 66017
      },
      {
        orgRelationships_id: 112,
        itemClass_id: 77050,
        org_id: 66004
      },
      {
        orgRelationships_id: 113,
        itemClass_id: 77050,
        org_id: 66013
      },
      {
        orgRelationships_id: 114,
        itemClass_id: 77051,
        org_id: 66001
      },
      {
        orgRelationships_id: 115,
        itemClass_id: 77052,
        org_id: 66001
      },
      {
        orgRelationships_id: 116,
        itemClass_id: 77053,
        org_id: 66001
      },
      {
        orgRelationships_id: 117,
        itemClass_id: 77053,
        org_id: 66001
      },
      {
        orgRelationships_id: 118,
        itemClass_id: 77055,
        org_id: 66018
      },
      {
        orgRelationships_id: 119,
        itemClass_id: 77055,
        org_id: 66008
      },
      {
        orgRelationships_id: 120,
        itemClass_id: 77055,
        org_id: 66009
      },
      {
        orgRelationships_id: 121,
        itemClass_id: 77056,
        org_id: 66015
      },
      {
        orgRelationships_id: 122,
        itemClass_id: 77056,
        org_id: 66008
      },
      {
        orgRelationships_id: 123,
        itemClass_id: 77056,
        org_id: 66009
      },
      {
        orgRelationships_id: 124,
        itemClass_id: 77057,
        org_id: 66003
      },
      {
        orgRelationships_id: 125,
        itemClass_id: 77057,
        org_id: 66008
      },
      {
        orgRelationships_id: 126,
        itemClass_id: 77057,
        org_id: 66009
      },
      {
        orgRelationships_id: 127,
        itemClass_id: 77058,
        org_id: 66001
      },
      {
        orgRelationships_id: 128,
        itemClass_id: 77059,
        org_id: 66001
      },
      {
        orgRelationships_id: 129,
        itemClass_id: 77060,
        org_id: 66008
      },
      {
        orgRelationships_id: 130,
        itemClass_id: 77060,
        org_id: 66009
      },
      {
        orgRelationships_id: 131,
        itemClass_id: 77061,
        org_id: 66001
      },
      {
        orgRelationships_id: 132,
        itemClass_id: 77062,
        org_id: 66006
      },
      {
        orgRelationships_id: 133,
        itemClass_id: 77062,
        org_id: 66007
      },
      {
        orgRelationships_id: 134,
        itemClass_id: 77063,
        org_id: 66001
      },
      {
        orgRelationships_id: 135,
        itemClass_id: 77064,
        org_id: 66011
      },
      {
        orgRelationships_id: 136,
        itemClass_id: 77064,
        org_id: 66008
      },
      {
        orgRelationships_id: 137,
        itemClass_id: 77064,
        org_id: 66009
      },
      {
        orgRelationships_id: 138,
        itemClass_id: 77064,
        org_id: 66020
      }
      ]);
    });
  };
