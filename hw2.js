function val(a){
    let inval = a;
    let newinval = inval.split('');
    let sum = newinval.reduce((prev,item)=>{
        prev + item;
    });
    if(a%sum === 0){
        console.log('true')}
        else{
        console.log('false') 
    };
  };
val();


 const compartition = (a) => {
    let ent = a;
    let newent = ent.split('');
    let exp = newent.map((currentValue) => {
        if(currentValue%a[i-1] === 0) {
            console.log('true');
        }else{
            console.log('false')
        };

    });
  };
  compartition();


  const usersInfo = [{  
    id: 'id1',  
     userName: 'Petya',  
     sex: 'male',  
     comments: ['commentId1']  
},  
 {  
    id: 'id2',  
     userName: 'Vasya',  
     sex: 'male',  
     comments: ['commentId2'],  
 },  
 {  
    id: 'id3',  
     userName: 'Olga',  
    sex: 'female',  
    comments: ['commentId4', 'comment5']  
},  
 {  
    id: 'id4',  
     userName: 'Lena',  
     sex: 'female',  
     comments: ['commentId3']  
}];
const commentsInfo = [{  
    id: 'commentId1',  
     title: 'Заголовок 1'  
 },  
 {  
       id: 'commentId2',  
     title: 'Заголовок 2'  
 },  
 {  
    id: 'commentId3',  
     title: 'Заголовок 3'  
 },  
 {  
    id: 'commentId4',  
     title: 'Заголовок 4'  
 },  
 {  
    id: 'commentId5',  
     title: 'Заголовок 5'  
 }];

  const ob = ([id1, id2, id3, id4], userInfo, commentsInfo) => {
    let arrA = [id1, id2, id3, id4];
    let arrB = userInfo;
    let arrC = commentsInfo;
    let newarrA = arrA.map((x) => {
        if (arrA[i] == arrB[i].id){
            arrA[i] = arrB[i];
        };
    });
    let newarrA2 = newarrA.map((x) => {
        if (newarrA[i].comments == arrC[i].id){
            newarrA[i].comments = arrC[i];
        }; 
    });
    return newarrA2;
  };
  