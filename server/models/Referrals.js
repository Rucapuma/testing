module.exports = (sequelize, Sequelize) => {
	const Referral = sequelize.define('referral', {	
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
	student_initials: {
		type: Sequelize.STRING,
        allowNull: false,
	},
	student_agency: {
		type: Sequelize.STRING,
        allowNull: false,
  	},
	student_agency_zip: {
		type: Sequelize.INTEGER,
        allowNull: false,
	},
	relation: {
		type: Sequelize.STRING,
        allowNull: false,
    },
    hr_teacher: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    grade_level: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ethnicity: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    living_status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    living_status_note: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    background: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    style_pref: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    size_type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    pant_size: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    top_size: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    outfit_combo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    bottom_color: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    top_colors: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    bra_info: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    underwear: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    shoe_size: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    socks: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    hygiene_kit: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    hygiene_items: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    feminine_hygiene: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    school_supplies: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultvalue: "1"
    },
    status_note: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    volunteer: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    referrer: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
	});
	
	return Referral;
}
