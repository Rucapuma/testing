const express = require("express");
const router = express.Router();
const { referral } = require("../models");
/* const referral = require('../controllers/Referrals');
const  { 
    getAllReferral,
    createReferral,
    getReferralById,
    updateReferral,
    deleteReferral
} = require("../controllers/Referrals"); */

// router.post('/referrals', async (req, res) => {
//     try {
//         await Referral.create(req.body);
//         res.json({
//             "message": "Referral Created"
//         });
//     } catch (error) {
//         res.json({ message: error.message });
//     }  
// });

router.post("/", async (req, res) => {
    const { student_initials, student_agency, student_agency_zip, relation, hr_teacher, grade_level, gender, 
      ethnicity, living_status, living_status_note, background, style_pref, size_type, pant_size, top_size,
    outfit_combo, bottom_color, top_colors, bra_info, underwear, shoe_size, socks, hygiene_kit, hygiene_items,
feminine_hygiene, school_supplies, status, status_note, volunteer, referrer  } = req.body;
      referral.create({
        student_initials: student_initials,
	    student_agency: student_agency,
	    student_agency_zip: student_agency_zip,
	    relation: relation,
        hr_teacher: hr_teacher, 
        grade_level: grade_level,
        gender: gender,
        ethnicity: ethnicity,
        living_status: living_status,
        living_status_note: living_status_note,
        background: background,
        style_pref: style_pref,
        size_type: size_type,
        pant_size: pant_size,
        top_size: top_size,
        outfit_combo: outfit_combo,
        bottom_color: bottom_color,
        top_colors: top_colors,
        bra_info: bra_info,
        underwear:underwear,
        shoe_size: shoe_size,
        socks: socks,
        hygiene_kit: hygiene_kit,
        hygiene_items: hygiene_items,
        feminine_hygiene: feminine_hygiene,
        school_supplies: school_supplies,
        status: status,
        status_note: status_note,
        volunteer: volunteer,
        referrer: referrer,
      });
      res.json("SUCCESS");
  });

  router.get('/', async (req, res) => {
    try {
        const referral = await referral.findAll();
        res.json(referral);
    } catch (error) {
        res.json({ message: error.message });
    }  
});

 
module.exports = router;

/* let express = require('express');
let router = express.Router();
 
const referral = require('../controllers/controller.js');

router.post('/api/referral', referral.createReferral);
router.get('/api/referral/:id', referral.getReferral);
router.get('/api/referral', referral.referral);
router.put('/api/referral', referral.updateReferral);
router.delete('/api/referral/:id', referral.deleteReferral);

module.exports = router; */