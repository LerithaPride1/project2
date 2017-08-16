
module.exports = function(sequelize, DataTypes) {

    var Photographer = sequelize.define("Photographer", {
        company: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true,

            validate: {
                len: [1]
            }
        },

        email: {
            type: DataTypes.STRING,
            isUnique :true,
            allowNull:false,
            
            validate:{
                isEmail : true
            }
        },

        phone: {
            type: DataTypes.STRING,
            isNumeric: true,
            allowNull: false,
            notEmpty: true


        },

        description: {
            type: DataTypes.TEXT
        },

        price: {
            type: DataTypes.INTEGER
        }
    });
    return Photographer;
};

// Florist.sync().then(function() {
//         // Table created
//         return Florist.create({
//             company: 'RP Printing',
//             email: 'mwqeyoi@yahoo.com',
//             phone: 89286757,
//             // ZipCode: 67890,
//             price: 400

//         });
//     return Florist;
// });

