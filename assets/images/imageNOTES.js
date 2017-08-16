const Sequelize = require("sequelize")
const config = require("./config")

const connection = new Sequelize("venue_db", "root", "@bb33449966");
const venue = connection.define("venue", {
	name: Sequelize.STRING,
	address: Sequelize.STRING,
	price: Sequelize.INTEGER,
	image: Sequelize.define('Image', {data: Sequelize.TEXT})

// 	image.sync({force.true}).on('sucess', function() {
// 		console.log("reading image")
// 		var image = fs.readFileSync(_dirname + '/birchhaven.png)')toString("venue1")
// 		console.log("done\n")

// 		console.log("creating database entry")
// 		Image.create({data: image}).on('success', function(img) {
// 			console.log("done\n")

// 		console.log("writing file")
//     	fs.writeFileSync(__dirname + '/birchhaven.png', img.data, "venue1")
//     	console.log("done\n")

//     	console.log("you might open the file ./birchhaven.png")
//   })
// })

//***npm install imagemagick in gitbash  https://www.npmjs.com/package/sequelize-file
//npm install sequelize-file

// /*models/attachment.js*/


import SequelizeFile from 'sequelize-file';
 
export const picture = SequelizeFile({
   attribute: 'picture',
   mimetype: /^image/,
   crop: true,
   sizes: {
     small: 64, //width 64 
     big: 150, //width 150 
   }
});
 
export const backgroundImage = SequelizeFile({
  attribute: 'backgroundImage',
  mimetype: /^image/,
  crop: true,
  sizes: {
    preview: "x350" // height 350 
  }
});

// /*models/User.js*/

import sequelize from './db';
import { STRING } from 'sequelize';
import { picture, backgroundImage } from './attachments';
 
let User = sequelize.define('user', {
  name: STRING,
  /* And all of your plain sequelize attributes... */
});
 
picture.addTo(User);
backgroundImage.addTo(User);
 
export default User;

sequelize.sync({ force: true }).then(() => {
 
  // If you set url, file will be downloaded and saved 
  let user1 = User.build({
    picture: "http://example.com/somepic.jpg"
  });
 
  user1.save();
 
  // Or you can pass multer-style File object, for example 
  let user2 = User.build({
    picture: "http://example.com/somepic2.jpg",
    backgroundImage: {
      path: '/uploads/tmp/somepic.jpg',
      mimetype: 'image/jpeg'
    }
  });
 
  user2.save()
 
  // Deleting file(s) 
  user2.update({ picture: null });
 
});

User.findById(1)
.then(user => {
  console.log(user.picture.small);
  console.log(user.picture.big);
  console.log(user.picture.original);
});
