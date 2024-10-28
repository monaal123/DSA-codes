const movies=["joker","gone girl","dark knight","aquaman","munabhai"]
movies.push("demons2323");
movies.push("last of us");
console.log(movies);
const a=movies.slice(0,1);
console.log(a);
const b=movies.slice(2);
console.log(b);
const c=a.concat(b);
console.log(c);
let d=c.length;
console.log(d);

