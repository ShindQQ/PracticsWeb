let array = [];
array.length = 10;

for(let item of array)
{
    item = Math.floor(Math.random() * 100);
    console.log(item);
}
