
function getViewBox (t, d) {
  var id = t + '_' + d
  var sex = c.choices.sex
  if (sex === 'm') {
    var idDict = {
      armband_bandage_right: '181 235 81 81',
      armband_bandage_left: '296 239 81 81',
      body_athletic: '65 130 430 430',
      coat_biker: '160 124 230 230',
      coat_varsity: '160 124 230 230',
      coat_snowboard: '160 124 230 230',
      coat_fall_long: '130 124 290 290',
      coat_lab: '130 124 290 290',
      coat_trench: '130 124 290 290',
      earings_gold_rings: '258 113 46 46',
      earings_gold_ring_right: '258 130 11 11',
      earings_gold_ring_left: '292 130 11 11',
      earpiece_neurolink: '257 107 40 40',
      earpiece_scouter: '252 117 30 30',
      ears_plugged: '254 122 20 20',
      ears_unplugged: '254 121 20 20',
      glasses_fpv: '250 97 64 64',
      hat_football: '243 86 80 80',
      hat_helmet_vietnam: '243 86 80 80',
      hat_jester: '208 54 140 140',
      hat_motorcycle: '243 86 80 80',
      hat_tuque: '243 85 80 80',
      hair_mohawk: '243 45 80 80',
      holster_revolver_hip: '220 240 130 130',
      horns_large: '235 58 90 90',
      mask_horse: '233 80 100 100',
      mask_robin: '261 108 40 40',
      necklace_chain: '241 140 80 80',
      pet_canine: '82 403 150 150',
      pet_chicken: '45 403 150 150',
      pet_doge: '341 349 200 200',
      pet_feline: '381 439 128 128',
      pet_fox: '42 393 150 150',
      pet_gerbil: '125 475 64 64',
      pet_parrot: '203 116 80 80',
      pet_raven: '50 439 128 128',
      pet_rat: '300 439 128 128',
      pet_siamese_cat: '42 393 150 150',
      pet_vulture: '281 349 180 180',
      scar_horizontal_neck: '265 139 32 32',
      scar_horizontal_nose: '264 115 32 32',
      scar_vertical_heart: '249 164 64 64',
      scar_vertical_left: '264 110 32 32',
      scar_vertical_right: '264 110 32 32',
      scarf_drape: '185 140 190 190',
      shirt_kurta: '120 134 310 310',
      suit_borat: '189 150 181 181',
      tatoo_aum_chest: '248 165 64 64',
      tatoo_aum_left: '298 157 64 64',
      tatoo_aum_right: '198 154 64 64',
      tatoo_chaos_chest: '248 169 64 64',
      tatoo_chaos_left: '298 164 64 64',
      tatoo_chaos_right: '198 164 64 64',
      underwear_boxers: '224 258 120 120'
    }
    var sectionDict = {
      age: '261 109 40 40',
      belt: '185 135 190 190',
      body: '65 130 430 430',
      body_head: '249 95 64 64',
      button: '295 187 23 23',
      cloak: '0 0 560 560',
      coat: '95 134 360 360',
      earpiece: '280 125 25 25',
      ears: '254 120 20 20',
      earings: '256 87 50 50',
      emotion: '259 113 42 42',
      eyepatch: '261 109 40 40',
      facialhair: '261 124 40 40',
      freckles: '261 109 40 40',
      glasses: '261 109 40 40',
      gloves: '206 308 40 40',
      hat: '241 70 80 80',
      hair: '243 80 80 80',
      headband: '241 90 80 80',
      holster: '215 150 130 130',
      horns: '256 87 50 50',
      iris: '271.72 125.05 4 4',
      jacket: '170 130 220 220',
      mask: '243 93 80 80',
      necklace: '241 140 80 80',
      nose: '265 115 32 32',
      pants: '130 244 290 290',
      pupils: '271.72 125.05 4 4',
      scarf: '185 120 190 190',
      shirt: '190 140 190 190',
      shoes: '210 442 120 120',
      shoulderpads: '207 120 150 150',
      smoke: '252 132 32 32',
      socks: '210 442 120 120',
      suit: '65 130 430 430',
      tie: '241 140 80 80',
      underwear: '228 238 120 120',
      veil: '207 97 150 150',
      vest: '185 135 190 190',
      watch: '331 302 25 25',
      warpaint: '261 109 40 40',
      wings: '110 -30 350 350'
    }
  } else if (sex === 'f') {
    var idDict = {
      armband_bandage_right: '186 238 81 81',
      armband_bandage_left: '301 229 81 81',
      armband_egyptian_right: '221 205 38 38',
      armband_egyptian_left: '313 206 38 38',
      body_athletic: '65 130 430 430',
      bracelet_wonder_right: '190 258 58 58',
      bracelet_wonder_left: '313 234 58 58',
      bracelet_band_right: '198 299 24 24',
      bracelet_band_left: '322 272 24 24',
      bracelet_egyptian_right: '190 258 58 58',
      bracelet_egyptian_left: '313 234 58 58',
      bracelet_ornamental_right: '200 294 24 24',
      bracelet_ornamental_left: '326 270 24 24',
      bracelet_perl_right: '198 299 24 24',
      bracelet_perl_left: '322 272 24 24',
      bracelet_rings_right: '192 271 43 43',
      bracelet_rings_left: '318 254 43 43',
      coat_lab: '125 140 280 280',
      coat_winter_tubecollar: '125 120 280 280',
      dress_bobafett: '160 165 230 230',
      dress_corset: '175 180 200 200',
      dress_japanese_pleat: '105 140 340 340',
      dress_parisian_fall: '105 160 340 340',
      dress_german_expression: '75 160 400 400',
      dress_short: '175 180 200 200',
      dress_suit: '175 140 200 200',
      dress_waitress: '160 140 230 230',
      earings_gold_ring_left: '289 141 20 20',
      earpiece_neurolink: '253 126 30 30',
      earpiece_scouter: '253 126 30 30',
      glasses_fpv: '252 109 64 64',
      hat_football: '243 98 80 80',
      hat_helmet_vietnam: '243 98 80 80',
      hat_motorcycle: '243 98 80 80',
      hat_tiara: '262 98 40 40',
      hat_tuque: '243 97 80 80',
      hair_afro: '243 80 80 80',
      hair_mohawk: '243 57 80 80',
      holster_revolver_hip: '213 245 130 130',
      holster_revolver_thigh: '213 285 130 130',
      mask_horse: '233 92 100 100',
      mask_robin: '261 120 40 40',
      pet_canine: '82 403 150 150',
      pet_chicken: '45 403 150 150',
      pet_doge: '341 349 200 200',
      pet_feline: '381 439 128 128',
      pet_fox: '42 393 150 150',
      pet_gerbil: '125 475 64 64',
      pet_parrot: '275 126 80 80',
      pet_raven: '50 439 128 128',
      pet_rat: '300 439 128 128',
      pet_siamese_cat: '42 393 150 150',
      pet_vulture: '281 349 180 180',
      scar_horizontal_neck: '265 139 32 32',
      scar_horizontal_nose: '264 115 32 32',
      scar_vertical_heart: '249 164 64 64',
      scar_vertical_left: '264 110 32 32',
      scar_vertical_right: '264 110 32 32',
      scarf_drape: '185 140 190 190',
      suit_asymetric: '175 140 200 200',
      suit_onepiece: '175 140 200 200',
      tatoo_archeopteryx_left: '282 173 64 64',
      tatoo_aum_chest: '248 165 64 64',
      tatoo_aum_left: '298 157 64 64',
      tatoo_aum_right: '198 154 64 64',
      tatoo_chaos_chest: '248 175 48 48',
      tatoo_chaos_left: '298 170 48 48',
      tatoo_chaos_right: '210 164 48 48',
      tatoo_tribal_face: '258 105 50 50',
      top_tank: '215 165 120 120',
      top_tube_v: '223 170 120 120',
      underwear_boxers: '224 258 120 120'
    }
    var sectionDict = {
      age: '261 121 40 40',
      armband: '313 206 38 38',
      belt: '175 185 190 190',
      body: '65 130 430 430',
      body_head: '249 107 64 64',
      bra: '220 160 100 100',
      bracelet: '316 252 48 48',
      button: '281 198 23 23',
      coat: '125 79 280 280',
      collar: '255 160 48 48',
      dress: '160 150 230 230',
      earpiece: '280 137 25 25',
      earings: '257 141 20 20',
      ears: '254 130 20 20',
      emotion: '261 125 42 42',
      eyepatch: '261 121 40 40',
      facialhair: '261 124 40 40',
      glasses: '263 121 40 40',
      gloves: '206 308 40 40',
      hat: '241 82 80 80',
      hair: '243 92 80 80',
      headband: '241 102 80 80',
      holster: '215 150 130 130',
      horns: '257 99 50 50',
      iris: '274.125 137.55 3.2 3.2',
      jacket: '170 130 220 220',
      leggings: '136 305 260 260',
      makeup: '267.5 123 30 30',
      mask: '243 105 80 80',
      nails: '200 327 25 25',
      necklace: '255 160 48 48',
      nose: '265 127 32 32',
      pants: '130 244 290 290',
      pupils: '274.125 137.55 3.2 3.2',
      scarf: '185 120 190 190',
      shirt: '190 140 190 190',
      shoes: '225 442 120 120',
      shorts: '215 245 120 120',
      skirt: '190 220 180 180',
      shoulderpads: '207 100 150 150',
      smoke: '255 144 32 32',
      socks: '225 442 120 120',
      suit: '80 130 400 400',
      tie: '241 140 80 80',
      top: '225 160 100 100',
      underwear: '232 258 90 90',
      veil: '207 97 150 150',
      vest: '185 135 190 190',
      wings: '110 -30 350 350'
    }
  }
  if (idDict[id] && d != '') {
    return idDict[id]
  } else if (sectionDict[t] && d != '') {
    return sectionDict[t]
  } else {
    return '0 0 560 560'
  }
}
