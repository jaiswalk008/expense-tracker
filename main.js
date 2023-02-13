let form = document.getElementById('my-form');
form.addEventListener('submit' , onSubmit);
let users=[];
let i=0;
const list =document.getElementById('user-list');
list.addEventListener('click',onDelete);
function onSubmit(e){
    e.preventDefault();
    //setting item in local storage as (name,value) pair.
    //
    localStorage.setItem('User Name: ',''+e.target.name.value,'User Email: ',''+e.target.email.value);
    //localStorage.setItem('User Email: ',''+e.target.email.value);
    // console.log(typeof localStorage.getItem('User Name: '));
    let userData = {
        userName : e.target.name.value,
        userEmail : e.target.email.value,
        userPhone : e.target.phone.value
    };
    users.push(userData);
    let info = userData.userName +' - '+userData.userEmail+' - '+userData.userPhone;
    let newLi = document.createElement('li');
    let btn = document.createElement('button');
    //btn.addEventListener('click',onDelete)
    btn.textContent='delete';
    newLi.style.margin='5px';
    btn.style.marginLeft='5px';
    btn.className='delete';
    newLi.appendChild(document.createTextNode(info));
    newLi.appendChild(btn);
    list.appendChild(newLi);
    localStorage.setItem(''+e.target.email.value,JSON.stringify(users[i]));
    i++;
    //console.log(users);
    //JSON.parse - to revert back to object form
    e.target.name.value='';
    e.target.email.value='';
    e.target.phone.value='';
}
function onDelete(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure to delete?')){
            var li = e.target.parentElement;
            list.removeChild(li);
        }
    }
}