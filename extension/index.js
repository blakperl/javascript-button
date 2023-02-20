function saveInput() {
    console.log("button clicked")
}  

let myLeads =[]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById ("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    // console.log ("Button clicked!")
    myLeads.push(inputEl.value)
      
    // bellow function will help to clear the input value 
    inputEl.value = ""  
    renderLeads()
})

// the diffenet between const and let is that const cannot be 
// reassigned and usually save a constant 
function renderLeads ()  {

    let listItems = ""

    for (let i = 0; i < myLeads.length; i++) {
        // console.log(myLeads [i])
        // ulEl.textContent += "<li>" + myLeads [i] + "</li> "
        // ulEl.innerHTML += "<li>" + myLeads [i] + "</li> " (easier to understant than)
    
        // listItems += "<li>" + myLeads [i] + "</li>" (this will not clear input value)

        // bellow attribute will turn the input  to a link


        // listItems += "<li><a  target ='_blank' href ='" + myLeads [i] + "'>" +  myLeads [i] + " </a></li> "

        listItems += '
            <li> 
        
                    <a  target ='_blank' href ='" + myLeads [i] + "'>" +  myLeads [i] + " </a>
        
        
             </li>
            
        '
    
        // const li = document.createElement("li")
        // li.textcontent = myLeads []
        // ulEl.append(li)  (all these)
    }
    
    ulEl.innerHTML = listItems
}

