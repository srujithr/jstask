// products=[
//     {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
//     {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
//     {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
//     {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
//     {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
// ]
// console.log('-------------------------------------------------------------')


// products.map(p=>p.pName).forEach(p=> console.log(p))


// products.filter(p=>p.display='lcd').forEach(p=>console.log(p))

// products.filter(p=>p.band=='5g').forEach(item=>console.log(item.pName))

// products.sort((p1,p2)=>p2.price-p1.price).forEach(p=>console.log(p.pName))

// coslty=products.reduce((p1,p2)=>p1.price>p2.price?p1:p2)
// console.log(coslty.pName);

// cheap=products.reduce((p1,p2)=>p1.price<p2.price?p1:p2)
// console.log(cheap.pName);



//[ no,district,+ve cases,death rate,curred rate,1st dose vaccine,2nd dose vaccine]
covid_data = [
    [1,'Ernakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]
]

//1. district having Highest +ve case - 

// a=covid_data.reduce((x1,x2)=>x1[2]>x2[2]?x1:x2);
// let b=a[1];
// console.log(b);




// let arr=[1,2,3,4,5]
//     console.log(arr.length());


//2. district having Highest 1st dose vaccine - 
// a=covid_data.reduse(c1=>c2)


// a=covid_data.reduce((x1,x5)=>x1[5]>x5[5]?x1:x5);
// let c=a[1];
// console.log(c);


console.log('-------------------------------------------');
    

//3. district having lowest death rate - 
console.log('-------------------------------------------');
  
// a=covid_data.reduce((x1,x5)=>x1[5]<x5[5]?x1:x5);
// let d=a[1];
// console.log(c);

//4. sort data with +ve case in descending order - 
console.log('-------------------------------------------');

covid_data.sort((x1,x2)=>x1[2]-x2[2]?x1:x2).forEach(x=>console.log(x[1]));
    

    
//5. is district with +ve cases > 15000 - 
console.log('-------------------------------------------');

//6. sort data with 1st dose vaccine - 
console.log('-------------------------------------------');

//7. Print Thrissur details - 
console.log('-------------------------------------------');