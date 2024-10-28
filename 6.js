const a=[12,45,12,3,4];
  let j; 
  
 n=a.length;
    for (j = 0; j < n-1; j++) {  
      if (a[j] > a[j + 1]) {  
        let temp = a[j];  
        a[j] = a[j + 1];  
        a[j + 1] = temp;  
      }  
    }  
 
 
  console.log(a);
  