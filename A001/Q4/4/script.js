UserCart = [{productId:1,productName:"Moblie",price:70000},
{productId:2,productName:"Laptop",price:100000},
{productId:3,productName:"Airpods",price:26900},
{productId:4,productName:"Watch",price:30000},
{productId:5,productName:"Shoes",price:35000},
{productId:6,productName:"Bag",price:10000}]

let sum = 0
for (let i = 0 ; i<UserCart.length;i++){
    for(let j = 0 ; j<UserCart.length;j++){
        if(price[i] >0){
            sum = sum + price[i]
        }
    }
}