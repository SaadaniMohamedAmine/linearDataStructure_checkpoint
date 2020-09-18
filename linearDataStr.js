//first problem with array
var set1=[3, 1, 7, 9];
var set2=[2, 4, 1, 9, 3];
var verif=true;
var s=0;
for(var i=0;i<set1.length;i++) {
  verif=true;
  for(var j=0;j<set2.length;j++) {
    if(set1[i]===set2[j]) {
      verif=false;
    }
  }
  if(verif==true) {
    s+=set1[i];
  }
}
for(var k=0;k<set2.length;k++) {
  verif=true;
  for(var l=0;l<set2.length;l++) {
      if(set2[k]==set1[l]) {
        verif=false;
      }
  }
  if(verif==true) {
    s+=set2[k];
  }
}
console.log("Sum of different element :",s); 
//expected 13

//first problem with hash table 
var set1=[3, 1, 7, 9];
var set2=[2, 4, 1, 9, 3];
var array=[...set1,...set2];
console.log("array",array);
var map=new Map();
var count=0;
var s=0;
for(var i=0;i<array.length;i++) {
  if(map.has(array[i])==true) {
    count=map.get(array[i]);
    map.set(array[i],count+1);
  }
  else {
    map.set(array[i],1)
  }
}
for(var i=0;i<map.size;i++) {
  if(map.get(array[i])==1) {
    s+=array[i];
  }
}
console.log("The sum of the different elements in two sets is :",s);
//expected 13

//second problem with array
var set1=[12, 13, 6, 10];
var set2=[13, 10, 16, 15];
var verif=true;
var s=0;
for(var i=0;i<set1.length;i++) {
   verif=true;
  for(var j=0;j<set2.length;j++) {
    if(set1[i]===set2[j]) {
      verif=false;
    }
    
  }
  if(verif==false) {
    s+=set1[i];
  }
}
console.log(s);
for(var l=0;l<set2.length;l++) {
  verif=true;
  for(var k=0;k<set1.length;k++) {
    if(set2[l]===set1[k]) {
      verif=false;
    }
  }
  if(verif==false) {
    s+=set2[l];
  }
}
console.log("The sum of the overlapping elements is :",s);
//expected 46

//second problem with hash table
var set1=[12, 13, 6, 10];
var set2=[13, 10, 16, 15];
var array=[...set1,...set2];
var map=new Map();
var s2=0;
var count2=0;
for(var i=0;i<array.length;i++) {
  if(map.has(array[i])) {
    count2=map.get(array[i]);
    map.set(array[i],count2+1) ;
  }
  else {
    map.set(array[i],1);
  }
}
for(var i=0;i<=map.size;i++) {
  if(map.get(array[i])!==1) {
    s2+=array[i];
  }
}
console.log("The sum of the overlapping elements is",s2);
