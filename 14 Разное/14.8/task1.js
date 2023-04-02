let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

// ... ваш код ...
let coll = new Intl.Collator();
animals.sort(function(a, b) {
  return coll.compare(a, b);
});

console.log( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК