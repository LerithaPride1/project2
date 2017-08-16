var stmt = db.venue_db("SELECT image FROM venue WHERE id=$id"); // SQL statement
var uarray = stmt.getAsObject({$id:1})['image']; // UInt8Array containing the bytes of the image
// (of course you can use other API methods to query your database
stmt.free(); // Free the memory used by the statement

// The tricky part : create a blob url to your image, that you can use anywhere
var objurl = window.URL.createObjectURL(new Blob([uarray]));
var img = new Image();
img.src = objurl;
img.onload = function() {
	console.log(Image)
  // do something with your image
}