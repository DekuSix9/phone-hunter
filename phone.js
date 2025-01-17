


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
               <p>There are many variations <br>i jf of passages of  available, but the <br> majority have suffered</p>
               <div class="card-actions flex justify-center">
               <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
               </div>
            </div>


   `
   phonecontainer.appendChild(phoneCard)
  });
//hide loading spinner
toggleLoadingspinner(false)

}

//
const handleShowDetails= async (id)=>{


//load single phone
   const res= await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
   const data= await res.json();
   const phone=data.data;
   showPhoneDetails(phone);
   console.log(phone)
}

const showPhoneDetails=(phone)=>{
   
   const showDetailsContainer=document.getElementById('show_details_container');

   showDetailsContainer.innerHTML = `
  <div class="flex flex-col items-center space-y-4">
    <img class="mx-auto" src="${phone.image}" alt="Phone Image" />
    <div class="text-left space-y-2">
    <p class="font-bold text-3xl my-8"><span ></span> ${phone.name}</p>
      <p><span class="font-bold">Storage:</span> ${phone.mainFeatures.storage}</p>
      <p><span class="font-bold">Display Size:</span>${phone.mainFeatures.displaySize}</p>
      <p><span class="font-bold">Chip Set:</span> ${phone.mainFeatures.chipSet}</p>
      <p><span class="font-bold">Memory:</span> ${phone.mainFeatures.memory}</p>
      <p><span class="font-bold">GPS:</span> ${phone.others.GPS}</p>
    </div>
  </div>
`;




   show_details_modal.showModal();
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