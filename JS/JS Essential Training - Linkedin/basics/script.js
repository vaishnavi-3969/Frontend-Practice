const allCode = document.querySelectorAll('code');
for(let item of allCode){
    item.innerHTML =  `&lt;${item.innerHTML}&gt;`;
}