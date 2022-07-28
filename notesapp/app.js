 
console.log("Welcome to notes app. This is app.js");
showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");


  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  showNotes();
});

function showNotes(){
  let notes=localStorage.getItem("notes");
  if(notes==null){
    notesObj=[];
  }
  else{
    notesObj=JSON.parse(notes);

  }
let html="";
notesObj.forEach(function(element,index) {
  html +=`
  
    <div class="card mx-2 my-2" style="width: 18rem;">
    
        <div class="card-body">
          <h5 class="card-title">notes ${index+1}</h5>
          <p class="card-text">${element}</p>
          <a id="${index}" onclick="deleteNote(this.id)"  class="btn btn-primary">Delete Notes</a>
        </div>
      
    </div>`
});

let notesELm=document.getElementById("notes");
if(notesObj.length !=0){
  notesELm.innerHTML=html;
  
}
else{
  notesELm.innerHTML='There is nothing to show plz add a note'
}

}

//this is deleting activation key
function deleteNote(index){
  let notes=localStorage.getItem("notes");
  if(notes==null){
    notesObj=[];
  }
else{
notesObj=JSON.parse(notes);
}

notesObj.splice(index,1);

localStorage.setItem("notes", JSON.stringify(notesObj));
showNotes();


}

//THE SEARCH BUTTON ACTIVATION




let search=document.getElementById("searchTxt");
search.addEventListener("input", function(){
  // let inputVal=search.value;
  // console.log("the search event fired", inputVal)
  let cards=document.getElementsByClassName('card');
  Array.from(cards).forEach(function(element){



  let txt=document.getElementsByName("p")[0].innerText;
  if(txt.includes(inputVal)){
    element.style.display="block";
  }
else{
  element.style.display="none";
}
})
})


