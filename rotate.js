function rotate(a,k)
{
    const l=a.splice(0,k+1);
    console.log(l);
    const r=[];
    for(i=0;i<k;i++)
    {
        r[i]=a.pop();
    }
    
    console.log(r);
    
    const e=r.concat(l);
    
    console.log(e);
    
}
   const a=[1,2,3,4,5];
   rotate(a,2);
