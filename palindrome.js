let a="koli";
n=a.length;
a=a.split("");
console.log(a);
k=[];

for(i=0;i<n;i++)
{
    k[i]=a.pop();
    
    
}
console.log(k);
for (let i = 0; i < n.length; i++) {
        if (a[i] !== v[i]) return console.log("not an palindroem");
    }
    return console.log("its an palindrome");
