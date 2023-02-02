var fs=require("fs");
var data=fs.readFileSync("text.txt");
console.log(data.toString());
function product(n)
{
  var res=1;
  for(var i=0;i<n.length;i++)
    {
        res*=Number(n[i]);
    }
    return res;
}
console.log(product([5,9,9]));