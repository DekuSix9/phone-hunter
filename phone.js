


const loadPhone= async ()=>{
   const res= await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
   const data=await res.json();
   const phones=data.data
   displayPhones(phones)
  
}

const displayPhones=phones=>{
   const phonecontainer=document.getElementById('phone-container');
  phones.forEach(phone => {
   console.log(phone)
   const phoneCard=document.createElement('div');
   phoneCard.classList=`"card bg-gray-100 w-96 shadow-xl mt-4 p-4 rounded-xl ml-12`;
   phoneCard.innerHTML=`<figure>
               <img
               src="${phone.image}"
               alt="Shoes" />
            </figure>
            <div class="card-body">
               <h2 class="card-title">${phone.phone_name}</h2>
               <p>${phone.slug}</p>
               <div class="card-actions justify-end">
               <button class="btn btn-primary">Buy Now</button>
               </div>
            </div>


   `
   phonecontainer.appendChild(phoneCard)
  });


}


function handleSearch(){
   const searchField=document.getElementById('search-field');
   const searchText=searchField.value;
   console.log(searchText)


}


loadPhone();