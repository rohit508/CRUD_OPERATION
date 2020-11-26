const add = () => {


    
    // get id of element 
    const fname = document.getElementById("inputFirst");
    const lname = document.getElementById("inputlast");
    const Email = document.getElementById("inputEmail");
    const phone = document.getElementById("inputPhone");
    const location = document.getElementById("inputlocation");
    var listdata = document.getElementById("listdata");
    
  if (fname.value && lname.value && Email.value && phone.value && location.value != "") {


    // create a Element of data 
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var tdbtn = document.createElement('td');
      // CREATE BTN DELETE 
      var delbtn = document.createElement('button');
      var dettext = document.createTextNode("DELETE");
      
      // CREATE BTN EDIT 
      var EDITbtn = document.createElement('button');
      var Etext = document.createTextNode("EDIT");



// Element of TR 
    var append = listdata.appendChild(tr)

// LIST OF DATA 
    const fname1 = append.appendChild(td1)
    var fText = document.createTextNode(fname.value)
    fname1.appendChild(fText)

    const laname2 = append.appendChild(td2)
    var lText = document.createTextNode(lname.value)
    laname2.appendChild(lText)

    const Email3 = append.appendChild(td3)
    var EText = document.createTextNode(Email.value)
    Email3.appendChild(EText)
    
    const phone5 = append.appendChild(td5)
    var pText = document.createTextNode(location.value)
    phone5.appendChild(pText)



    const location4 = append.appendChild(td4)
    var locationText = document.createTextNode(phone.value)
    location4.appendChild(locationText)

    
    //  btn delete 
    const btn6 = append.appendChild(tdbtn)
    var delbtn1 = btn6.appendChild(delbtn)
    const  dltetext = delbtn1.appendChild(dettext)
    delbtn.setAttribute("class", "btn btn-danger")
   delbtn.setAttribute("onclick", "deleteitem(this)")
    

    //  btn EDIT
    const btn5 = append.appendChild(tdbtn)
    var Elbtn1 = btn5.appendChild(EDITbtn)
    const  EDITtext = Elbtn1.appendChild(Etext)
    EDITbtn.setAttribute("class", "btn btn-warning")
    EDITbtn.setAttribute("onclick", "Edititem(this)")
    fname.value = ""
    lname.value = ""
    Email.value = ""
    phone.value = ""
   location.value =""
    
}


else{
    alert("This Field is Required")
    fname.value = ""
    lname.value = ""
    Email.value = ""
    phone.value = ""
   location.value =""
}
}

// DELETE ALL Function 

function deleteall() {
    listdata.innerHTML = ""
}

// DELETE ITEM
const deleteitem = (d) =>{
    d.parentNode.parentNode.remove()
}

// DELETE ITEM
const Edititem = (E) =>{
// Edit funtion not work
    }



     