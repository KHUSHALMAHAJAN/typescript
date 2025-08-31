let from = document.querySelector("form")
from?.addEventListener("submit",function(val){
    val.preventDefault()
})
let people = []
// let username : string[]
let i = 0
let sumbit = document.querySelector("submit")
let input = document.querySelectorAll("input")
let cardconatiner = document.querySelector("#cardconatiner")
let search = document.querySelector("#search") as HTMLInputElement | null
let addconatin = ""
class cratetemplet{
    constructor(public username :string,private name : string,private age : number){
        this.display()
    }
    public display(): void{
        addconatin += `<div class="card">
            <div>Username :- ${this.username}</div>
            <div>Name :- ${this.name}</div>
            <div>Age :- ${this.age}</div>
        </div>` 
        cardconatiner!.innerHTML = addconatin

    }
}
from?.addEventListener("submit",function(){
    // console.log("hu")
    let username : any
    username = input[0].value
    username = new cratetemplet(input[0].value,input[1].value,Number(input[2].value))
    people.push(username)
    // console.log(people)
    // people[0].display()
})
search?.addEventListener("input", (e) => {
    let target = (e.target as HTMLInputElement).value;
    target as string

    let find = people.filter(person => 
        person.username.toLowerCase().startsWith(target.toLowerCase())
    );

    console.log(find);
});


