setTimeout(function () {
    console.log("Hi")
}, 3000)

setTimeout(function () {
    console.log("Vaishnavi")
}, 4000)

setTimeout(function () {
    console.log("Good Morning")
}, 5000)

setTimeout(function () {
    console.log("Modal opened!")
}, 1500)

/*
Challenge:
1. Take control of the 'modal' div with JavaScript.
2. Swap out our console.log for a line of code
   which will change the CSS 'display' property
   of our modal to 'inline'.
*/

const modal = document.getElementById('modal')
const closeBtn = document.getElementById('modal-close-btn');
const consentForm = document.getElementById('consent-form')
const declineBtn = document.getElementById('decline-btn');
const modalChoiceBtns = document.getElementById('modal-choice-btns')


setTimeout(function () {
    modal.style.display = 'inline'
}, 1500)

/*
Challenge:
1. Take control of the close button.
2. Use an event listener to set the display 
   property of the modal to 'none' when the
   close button is clicked.
*/

closeBtn.addEventListener('click', function () {
    modal.style.display = 'none'
})/*
Challenge:
1. Take control of the form element. 
2. Add an eventListener to the form to listen for a
   "submit" event.
3. When a user clicks "accept", prevent the default
   behaviour that triggers the refresh.
4. Log out "form submitted".
*/



consentForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('form submitted')
    /*
Challenge:
1. Take control of the "modal-text" element. 
2. Make it so that when a user clicks on 
   the accept button, the HTML string below
   is inserted into the modal-text div.

<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div>
*/
    const modalText = document.getElementById('modal-text')
    modalText.innerHTML = `
    <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p> `
    /*   
Challenge: 
1. Use a setTimeout to make the phrase "Uploading
   your data to the dark web" change to "Making the 
   sale..." after 1.5 seconds.
⚠️ Do not change the loading svg!
*/
    setTimeout(function () {
        const uploadText = document.getElementById('uploadText')
        uploadText.innerText = 'Making the sale...'
    }, 1500)
    /*   
    Challenge: 
    1. Make it so that 1.5 seconds after seeing the 
       "Making the sale..." message, the modal is 
       cleared of its content and the following 
       string of HTML is displayed instead.
       
       `<h2>Thanks you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
        ` 
    */
    /*   
 Challenge: 
 1. Make the button that closes the modal disabled.
 2. Make that button become usable when the final 
    modal message has been displayed to the user.
 */

    setTimeout(function () {
        const data = new FormData(consentForm);
        const name = data.get('fullName');

        document.getElementById('modal-inner').innerHTML = `
    <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div> 
`
        closeBtn.disabled = false
    }, 3000)
})

/*   
Challenge: 
1. Take control of the decline btn. (What do you
   need to do to make that possible?)
2. Set up an eventListener that is triggered 
   when a user's cursor hovers over the decline 
   button. (Google the event to listen out for!)
3. For now, just log out "hovered" when that 
   happens. 
*/
declineBtn.addEventListener('mouseenter', function(){
    modalChoiceBtns.classList.toggle('modal-choice-btns-reverse')
})




