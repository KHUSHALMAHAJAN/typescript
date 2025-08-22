var a = 9
var j = "khushal"

//array
let arr = [7,4,56,7,"khushal"]

//tuple
let  tuple : [number,string,object] = [2,"khushla",{
    value : 67
}]


//Enums

enum admin{
    admin = "khushal",
    password = "khushal@2536"
}

admin.admin
admin.password

enum errorstutas{
    showerror = "user not found"
}
errorstutas.showerror


//Any
let b
b = 9
b = "khushal"

// unknown
let c : unknown
c = 90
c ="khushal"
if(typeof c === "string"){
    c.toUpperCase()
}

//void

function abcd(): void{
    console.log(89)
}


//null
let d : null | string
d = "khushal"
d = null


// undefined
let e : undefined

// never
function abc(): never{
    while(true){

    }
}
// abc()
console.log("hj")


let var1 : number | string
var1 = 34
var1 = "khushal"
var1 = 45


// interface
interface user{
    name : string,
    email : string,
    password : string
    gender ?: string
}
function func(obj :user){
    obj.name
    obj.email
    obj.password
    obj.gender
}
func({name : "khushal",email :"khushla@gmail.com",password:"2536",gender : "male"})
