


function justDOit() {
  let pageInfo = document.querySelector('.container');
  let directory = ``;
  let title = ``;
  title = `<h1>Internal Company Directory</h1>`;


  for (let i = 0; i < customers.results.length; i++) {


directory +=

`<article>

   <div class="employees">
     <img src="${customers.results[i].picture.large}"></img>
     <div class="customer_name">
     ${customers.results[i].name.first}
     ${customers.results[i].name.last}
     </div>
     <div class="email">
     ${customers.results[i].email}
     </div>
     <div class="address1">
     ${customers.results[i].location.street}
     </div>
     <div class="address1">
     ${customers.results[i].location.state}
     </div>
     <div class="address1">
     ${customers.results[i].location.postcode}
     </div>
     <div class="phone">
     ${customers.results[i].cell}
     </div>
</article>
`;

pageInfo.innerHTML = directory;
}
console.log(directory);
 };

justDOit();
