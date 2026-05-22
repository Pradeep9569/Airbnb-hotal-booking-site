//core Module
const db = require("../utils/databaseUtil");
module.exports = class Home {
    constructor(houseName, price,location, rating, photoUrl, discrition, id) {
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl;
        this.discrition = discrition;
        this.id = id;
    }

    save() {
        if(this.id) { //update
         return db.execute(
  'UPDATE homes SET houseName=?, price=?, location=?, rating=?, photoUrl=?, discrition=? WHERE id=?',
  [
    this.houseName,
    this.price,
    this.location,
    this.rating,
    this.photoUrl,
    this.discrition,
    this.id   // ✅ FIX
  ]
);
        } else {  //insert
          return db.execute('INSERT INTO homes (houseName, price, location, rating, photoUrl, discrition) VALUES (?, ?, ?, ?, ?, ?)', [this.houseName, this.price, this.location, this.rating, this.photoUrl, this.discrition]);

        }
           
   
  }

    static fetchAll() {
    return  db.execute('SELECT * FROM homes');
        
       

    }

    static findById( homeId) {
    return  db.execute('SELECT * FROM homes WHERE id=?', [homeId]);
       
        
    }
   static deleteById(homeId ) {
    return  db.execute('DELETE FROM homes WHERE id=?', [homeId]);
       
       
        
}

 

};
