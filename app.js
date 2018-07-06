document.addEventListener("DOMContentLoaded", function() {

  // Set de trigger in the button
  const UIgetJokes = document.querySelector('.get-jokes');

  // Start function
  UIgetJokes.addEventListener('click', getJokes);

  function getJokes(e) {
    const number = document.querySelector('#number').value;
    const xhr = new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function() {
      if(xhr.status === 200) {
        const response = JSON.parse(this.responseText);
        let output = '';

        if(response.type === 'success') {
          response.value.forEach(function(message) {
            output += `
              <li>${message.joke}</li>
            `;
          });
        } else {
          output += `<li>Something went wrong..</li>`
        }

        document.querySelector('.jokes').innerHTML = output;
      } 
    }

    xhr.send();

    e.preventDefault();
  }
});



