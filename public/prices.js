var commonPrice = {
  distance: 150
}
var alg = {
  "10": Object.assign({}, commonPrice, {
    dj: {
      withoutWorkshop: 500
    },
    design: 450,
    massage: 650,
    sweets: 600,
    workshop: 1100,
    bar: {
      min: 1000,
      max: 1400
    },
    photo: {
      withoutWorkshop: 500
    }
  }),
    
  "20": Object.assign({}, commonPrice, {
    dj: {
      withoutWorkshop: 800
    },
    design: 700,
    massage: 900,
    sweets: 800,
    workshop: 1500,
    bar: {
      min: 1300,
      max: 2300
    },
    photo: {
      withoutWorkshop: 700
    }
  }),

  "40": Object.assign({}, commonPrice, {
    dj: {
      withoutWorkshop: 1000
    },
    design: {
      min: 900,
      max: 1200
    },
    massage: {
      min: 1000,
      max: 1400
    },
    sweets: {
      min: 1000,
      max: 1500
    },
    workshop: {
      min: 1600,
      max: 2800
    },
    bar: {
      min: 2500,
      max: 4000
    },
    photo: {
      withoutWorkshop: {
        min: 900,
        max: 1500
      }
    }
  })
}
