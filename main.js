let form = document.getElementById('my-form');
form.addEventListener('submit' , onSubmit);
let users=[];
let i=0;
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

    localStorage.setItem(''+e.target.email.value,JSON.stringify(users[i]));
    i++;
    //console.log(users);
    //JSON.parse - to revert back to object form
    e.target.name.value='';
    e.target.email.value='';
    e.target.phone.value='';
}