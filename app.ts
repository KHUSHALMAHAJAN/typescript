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


interface parent {
    speak : boolean
}
interface child extends parent{
    coding : boolean
}
function func1(obj :child){
    obj.coding
    obj.speak
}
func1({speak : true,coding: true})

// type aliases

type sankha = number
let val1 : sankha
val1 = 67

type value = number | string | null
function func2(val2 : value,val3 : value){

}
func2("khushal",78)

// unon
let val4 : number | string

// intersection type
type User = {
    name : string
    email : string
}
type Admin = User & {
    getDetails(val5 : string): void
}
function func3(obj : Admin){
    obj.getDetails
}

// class and object

class Device{
    name = "mouse"
    price = 8000
}
let obj14 = new Device()

// constructor

class bottlemekar{
    constructor(public size : number,public colour : string){

    }
}
let obj2 = new bottlemekar(34,"green")
let obj3 = new bottlemekar(34,"pink")

// this keyword

class penmekar{
    constructor(public size : number,public ink : string = "bule"){
        if(size < 11){
            console.log("less than 11 size is",size)
        }
    }
}
let pen1 = new penmekar(44,"bule")
let pen2 = new penmekar(4,"black")
let pen3 = new penmekar(10)