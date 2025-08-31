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


// extends
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
        console.log(colour)
    }
}
let obj2 = new bottlemekar(34,"green")
let obj3 = new bottlemekar(34,"pink")


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



// this keyword
class changename{
    name = "khushal"
    changenamefunc(){
        this.name = "kunal"
        console.log(this.name)
    }
}
let obj4 = new changename()
obj4.changenamefunc()



// private protected public
class parent1{
    constructor(private name :string){

    }
    changename():void{
        console.log(this.name)
    }
}
let obj5 = new parent1("khushal")

class parent2{
    constructor(protected name :string){

    }
    protected show(){
        console.log(this.name)
    }
}
class child2 extends parent2{
    constructor(protected name :string){
        super(name)
    }
    showname(){
        console.log(this.name)
        this.show()
    }
}
let obj6 = new child2("khushal")


// readonly

class parent3{
    constructor(private readonly name :string){

    }
}
let obj7 = new parent3("khushal")

// option parameter
class parent4{
    constructor(private name : string ,private age? : number){

    }
}
let obj8 = new parent4("khushal",90)
let obj9 = new parent4("kunal")

// parameter property
class parent5{
    public name
    constructor(name : string){
        this.name = name 
    }
}
let obj10 = new parent5("khushal")

// setter and getter
class parent6{
    constructor(private name :string){

    }
    set setname(nam:string){
        this.name = nam
    }
    get getname(){
        return this.name
    }
}
let obj11 = new parent6("kunal")


// static
class parent7{
    static getradomnumber(){
        return Math.floor(Math.random()*40)
    }
}

// abstract class and method
// it is threy of abstract class :- it use only base class

// function type
function func4(name : string,cb : (arg : string) => void){
    cb("payal")
}
func4("khushal",(arg : string) => {
    console.log(arg)
})


// Option parameter
function func5(name : string,email : string, age? : number){
    console.log(name)
    console.log(age)
    console.log(email)
}
func5("khushal","khushal@")


// default parameter
function func6(name :string,age : number = 20){
    console.log(name)
    console.log(age)
}
func6("payal")

// rest parameter
function func7(... argus:number[]){
    console.log(argus)
}
func7(1,2,3,4,5,6,7,8,9,10)

// overloding

function func8(name : string,age : number): void 
function func8(name : string):void

function func8(name : string ,age ?: number){
    if(typeof name === "string" && typeof age === "number"){
        console.log("first function call")
    }
    else if(typeof name === "string" && typeof age === "undefined"){
        console.log("second function call")
    }
    else throw new Error("pagal ahe ka")    
}

func8("kunal",19)
func8("khushal")
// func8()


// generics
// generics function

function func9<T>(val6 : T){
    console.log(typeof val6)
}
// console.log("breake")
func9("payal")
func9<number>(45)

// generics interface
interface base<K>{
    value1 : K
    value2 : number
}
function func11(obj : base<string>){
    console.log(typeof obj.value1)
    console.log(typeof obj.value2)
}
func11({value1 :"khushal",value2 : 90})


// generics class
class parent8<T>{
    constructor(public key : T){ 
        console.log(key)
        console.log(typeof key)
    }
}
let obj12 = new parent8<string>("payal")


// exporting and importing module

// import module from "./payment";
// let obj13 = new module("payal")

// type Assertion  

let val7 : any = "payal"
val7 as string
console.log("jhd")
console.log(typeof val7)

// type casting
let val8 = Number("90")
console.log(typeof val8)

// Non-null asserting operator
let val9 = null
if(val9!){
    console.log("correct")
}
else{
    console.log("worng")
}

// type guard
function func12(val10 : string | number ){
    if(typeof val10 === "number"){
        console.log("number")
    }
    else if(typeof val10 === "string"){
        console.log("string")
    }
    else{
        throw new Error("error hai bhai")
    }
}
func12("kunal")

class parent9{
    parenet9func(){
        console.log("parent 9 khushal")
    }
}

class parent10{
    parenet10func(){
        console.log("parent 10 kunal")
    }
}

let obj15 = new parent9()
let obj16 = new parent10()

function func13(device : parent9 | parent10){
    if(device instanceof parent9){
        device.parenet9func()
    }
    else if(device instanceof parent10){
        device.parenet10func()
    }
}
func13(obj15)