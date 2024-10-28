const a=[1,2,3,4,5,5,6];
const b=[3,4,5,6];
const temp=[];
let j;

const c=a.concat(b);
console.log(c);
let d=c.length;
console.log(d);

for(i=0;i<=d-1;i++)
{
    if(c[i]!=c[i+1])
    {
        temp[j++]=c[i];
    }
}
console.log(temp);
