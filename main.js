let form = document.getElementById('my-form');
form.addEventListener('submit' , onSubmit);

function onSubmit(e){
    e.preventDefault();
    //setting item in local storage as (name,value) pair.
    localStorage.setItem('User Name: ',''+e.target.name.value);
    localStorage.setItem('User Email: ',''+e.target.email.value);
    
}