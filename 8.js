function sort(arr)
{
   let i,j;
  let temp;
  n=arr.length;
  let v=[];
  v=arr;
  
  for(i=0;i<n-1;i++)
  {
      for(j=0;j<n-1-i;j++)
     {
         if(arr[j]>arr[j+1])
         {
             temp=arr[j];
             arr[j]=arr[j+1];
             arr[j+1]=temp;
         }
     }
  }
  
  
 return arr;
}

let a=[12,45,1,78,90];

let y=[];
y=sort(a);
console.log(y);
for(i=0;i<n-1;i++)
{
    if(a[i]==y[i])
        {
            
        }
    else{
         console.log("it is in ascending order");
        break;
    }
    
}












