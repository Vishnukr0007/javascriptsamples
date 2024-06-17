// null, undefined

// undefined
let a;
console.log(a); //undefined
console.log(typeof(a));  //undefined

// null
let b=null;
console.log(b);  //null
console.log(typeof(b));//object

// number

let c=4.5;
console.log(c);
console.log(typeof(c));

// boolean-true or false

let boo=true
console.log(boo);
console.log(typeof(boo));

// bigint
let big=124567890n;
console.log(big);
console.log(typeof(big));

// object

let ob={
    name:"fdf",
    phone:122323,
}
console.log(ob);
console.log(ob.phone);
console.log(typeof(ob));

// string

let s="hello"
console.log(s);
console.log(typeof(s));

let ar=[1,2,3,4,"hello",5];
console.log(ar);
console.log(typeof(ar));




let aa=5
let bb='5'
console.log(aa===bb);


// operators
let x='5'
let y=+x;
console.log(y);
console.log(typeof(y));
