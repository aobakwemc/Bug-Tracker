function NewTickets(){
    var element = document.getElementById("Modal_Container");
    element.style.display = "flex"
}

function CloseTickets(){
    var element = document.getElementById("Modal_Container");
    element.style.display = "none"
}

function SubmitTicket(Name, Surname, Programmer, Ticket, Description){
    //Create Object
    const Data = {
        UserName: Name,
        UserSurname: Surname,
        Fixer: Programmer,
        TicketNr: Ticket,
        Problem: Description
    }
    
    //Add div to New Ticket
    const AddTicket = document.createElement("div");
    var Conntainer = document.getElementById("AddTickets");
    AddTicket.id = "AddTicket"
    AddTicket.classList.add("New-Div");
    AddTicket.classList.add("content")
    Conntainer.appendChild(AddTicket);

    //Get User Data
    
    localStorage.setItem("UserData", JSON.stringify(Data))
    
    //add data to div
    var Information = AddTicket;
    Information.innerText += " Name  : " + Data.UserName  ;
    Information.innerText += "\n Surname : " + Data.UserSurname ; 
    Information.innerText += "\n Programmer : " + Data.Fixer; 
    Information.innerText += "\n Ticket Number: " + Data.TicketNr; 
    Information.innerText += "\n Problem : " + Data.Problem; 

    Conntainer.style.display = "grid"
    

    //Exit out of Pop up div
    var element = document.getElementById("Modal_Container");
    element.style.display = "none"; 

}
