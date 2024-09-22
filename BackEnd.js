//här länkar jag mina variablar på olika element i min html.
const input = document.getElementById("input");
const addBtn = document.querySelector("#addBtn");
const listBox = document.getElementById("form");
//Här lyssnar jag på knappen, när knappen trycks kör jag följande block av kodar!
addBtn.addEventListener("click", function (event) {
    if (input.value !== "") {//ser till att input är inte tomt annars vi vill inte lägga något tompt i listan.
        event.preventDefault(); //förhindrar att weblasaren refreshar.
        let addItemTo = document.getElementById("listBox");// addItemTo är länkat till en Ul elemnt som ska vara som en background men innehålla childElement i sig. 
        if (!addItemTo) {
            //här skapar jag en div element som innehåller status info om listan.
            const infoDiv = document.createElement("div");
            infoDiv.classList.add("infoDiv");
            listBox.appendChild(infoDiv)
            //här skapar jag en några p tag för innehålla info om listan.
            //let istället för konst, för att kunna ändra innehållet sen.
            let totalTodo = document.createElement("p");
            totalTodo.classList.add("total");
            totalTodo.id = "totalTodo";
            totalTodo.textContent = "Antal kvar: 00";
            infoDiv.appendChild(totalTodo);
            //total done i todo listan.
            let totalDone=document.createElement("p");
            totalDone.classList.add("total");
            totalDone.id="totalDone";
            totalDone.textContent="Antal gjorde: 00"
            infoDiv.appendChild(totalDone);            
            //ser till att dynamisk skapa listBox och det ska skapas bara en gång, när vi har något i vår lista. 
            addItemTo = document.createElement("ul");
            addItemTo.id = "listBox"; // Tilldelar ett id
            listBox.appendChild(addItemTo); // Lägger till ul i DOMen 
            console.log("listbox spawned");//loggar för att kolla om min kod har lyckades(: . 
        }
        const nyList = document.createElement("li");// skapar ny HTML element och länkar till NyList.
        nyList.textContent = input.value.trim();//lägger text innehåll för nyligen skaped HTML element som är länkat till input.
        nyList.classList.add("nyList"); //lägger till class till elementen för att kunna styla det sen i css.
        addItemTo.appendChild(nyList);// och till slut lägst det till addItemTo vilket försig är länkad till <ul element i min HTML.
        //här ska genereras två knapper för varje  nyList item som läggs till.
        const doneBtn = document.createElement("button");
        doneBtn.innerHTML = '<i class="material-icons">check_circle</i>';
        doneBtn.id = "doneBtn";
        nyList.appendChild(doneBtn);// ser till att knappen skapas i nyList men använder olika klass för syling.
        //Tabort knappen
        const tabortBtn = document.createElement("button");
        tabortBtn.innerHTML = '<i class="material-icons">delete</i>';
        tabortBtn.id = "tabortBtn";
        nyList.appendChild(tabortBtn);
        //Här lyssnar jag på tabortBtn för klicks, om tabortBtn trycks så körs kodeblock/function som tar bort nylist från addItemTo.
        tabortBtn.addEventListener("click", function () {
            addItemTo.removeChild(nyList);
            console.log("delete har gåt igenom!!!!")
        });
        //Lyssnar för klicks på doneBtn, om det händer byts class id på nyList till class "done" vilket strycker på texten för sig.
        doneBtn.addEventListener("click", function () {
            nyList.classList.toggle("done");
        });






        console.log("doneeeeeeeeeee!");// konsol loggar för att se min kod har lyckades köra fram hit.
    }
});