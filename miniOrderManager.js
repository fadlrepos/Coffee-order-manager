const prompt = require('prompt-sync')();


let menu = [
    {name:"Espresso",price:12,category:"Coffee"},
    {name:"Cappuccino",price:18,category:"Coffee"},
    {name:"Croissant",price:10,category:"Pastry"},
]

let orders = [
    {customer:"Yassine",item:"Espresso",qte:2, status:"Pending"},
    {customer:"Sara",item:"Cappuccino",qte:1, status:"Completed"},
    {customer:"Omar",item:"Croissant",qte:2, status:"Pending"},
    {customer:"Nadia",item:"Espresso",qte:1, status:"Completed"},
    {customer:"Imane",item:"Muffin",qte:2, status:"Pending"},
]
function DisplayMen(menu){
    for(let item of menu)
{
    console.log(`${item.name} - ${item.price} , MAD`);
    
}
}


function displayMenuItems(list)
{
    console.log("------- WELCOME TO OUR COFFEE SHOP -------"  )
    let WannaSeeMenu = prompt("Do You wanna see our menu ?:");
    if(WannaSeeMenu==="yes"){
     DisplayMen(menu)
    }
    
     else{
        console.log("Please Enter a Valid Answer ! ")
        let WannaSeeMenu = prompt("Do You wanna see our menu ?:");
        console.log("------- WELCOME TO OUR COFFEE SHOP -------"  )
        DisplayMen(menu)
     }
}
displayMenuItems(menu)

function findMenuItem(list, itemName) {

    while (true) {

        let found = false;

        for (let item of list) {

            if (itemName === item.name) {
                console.log("Your item is: " + itemName + " and it's available");
                found = true;
                break;
            }
        }

        if (found) {
            break;
        }
        
        console.log("Oops...! Couldn't find your item");
        console.log("------- WELCOME TO OUR COFFEE SHOP -------"  )
        DisplayMen(menu);

        itemName = prompt("What item are you looking for?: ");
    }
}
    

let u = prompt("What item are you looking for ?:");

findMenuItem(menu , u)




function OrderFrmMenu(){



    
}





