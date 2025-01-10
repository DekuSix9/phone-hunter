


const loadPhone= async (searchText,isShowall)=>{
   const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
   const data=await res.json();
   const phones=data.data
   displayPhones(phones,isShowall)
  
}

const displayPhones=(phones,isShowall)=>{
   const phonecontainer=document.getElementById('phone-container');
   phonecontainer.textContent=''

   const showAllContainer=document.getElementById('show-all-container')
   if(phones.length>12 && !isShowall){
      showAllContainer.classList.remove('hidden')
   }
   else{
      showAllContainer.classList.add('hidden')
   }

   if(!isShowall){
      phones=phones.slice(0,12)

   }


  


  phones.forEach(phone => {
   // console.log(phone)
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
//hide loading spinner
toggleLoadingspinner(false)

}


function handleSearch(isShowall){
   toggleLoadingspinner(true);
   const searchField=document.getElementById('search-field');
   const searchText=searchField.value;
   console.log(searchText)
   loadPhone(searchText,isShowall)


}

// const handleSearch2=()=>{
//    toggleLoadingspinner(true);
//    const searchField=document.getElementById('search-field2');
//    const searchText=searchField.value;
   
//    loadPhone(searchText)

// }
//show loading spinner
const toggleLoadingspinner=(isLoading)=>{
   const loadingSpinner=document.getElementById('loading-spinner');
   if(isLoading){
      loadingSpinner.classList.remove('hidden')
   }
   else{
      loadingSpinner.classList.add('hidden')
   }
}


const handleShowAll=()=>{
   handleSearch(true)

}


// loadPhone();