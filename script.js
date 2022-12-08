const btn = document.querySelector('.click');
const nom = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('#message');


 btn.addEventListener('click', function(e){
    e.preventDefault();
    alert(`Merci M. ${nom.value} nous avons bien enregistré votre mail ${email.value} et nous allons transmettre votre message : "${msg.value}"`)
    //console.log(nom.value)
 })

 addEventListener();