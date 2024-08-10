 function register() {
    document.getElementById('register').disabled = true
    const username = document.getElementById('username').value
    const email    = document.getElementById('email').value

    console.log(username, email)

    fetch("http://localhost:2233/data-show",{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        username:username,
        email:email
      })
    })
 }

 function reset() {
  document.getElementById('register').disabled = false
  document.getElementById('username').value =''
  document.getElementById('email').value =''
  document.getElementById('password').value =''
  document.getElementById('rePassword').value =''
  document.getElementById('agreeTerms').checked = false
 }