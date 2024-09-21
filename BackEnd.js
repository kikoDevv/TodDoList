//här länkar jag mina variablar på olika element i min html.
const input = document.getElementById("input");
const addBtn = document.querySelector("#addBtn");
const listBox = document.getElementById("form");
//Här lyssnar jag på knappen, när knappen trycks kör jag följande block av kodar!
addBtn.addEventListener("click", function (event) {
    if (input.value !== "") {//ser till att input är inte tomt annars vi vill inte lägga något tompt i listan.
        event.preventDefault(); //förnindrar att weblasaren refreshar.
        let addItemTo = document.getElementById("listBox");// addItemTo är länkat till en Ul elemnt som ska vara som en background men innehålla childElement i sig. 
        if (!addItemTo) { //ser till att dynamisk skapa loxBox element en gång bara när min kod körs. 
            addItemTo = document.createElement("ul");
            addItemTo.id = "listBox"; // Tilldelar ett id
            listBox.appendChild(addItemTo); // Lägger till ul i DOMen 
            console.log("listbox spawned");//loggar för att kolla om min kod har lyckades(: . 
        }
        const nyList = document.createElement("li");// skapar ny HTML element och länkar till NyList.
        nyList.textContent = input.value;//lägger text innehåll för nyligen skaped HTML element som är länkat till input.
        nyList.classList.add("nyList"); //lägger till class till elementen för att kunna styla det sen i css.
        addItemTo.appendChild(nyList);// och till slut lägst det till addItemTo vilket försig är länkad till <ul element i min HTML.
        //här ska genereras två knapper för varje  nyList item som läggs till.
        const doneBtn = document.createElement("button");
        doneBtn.textContent = "done";
        doneBtn.id ="doneBtn";
        nyList.appendChild(doneBtn);// ser till att knappen skapas i nyList men använder olika klass för syling.
        //Tabort knappen
        const tabortBtn = document.createElement("button");
        tabortBtn.textContent = "Tabort";
        
        
        
        console.log("doneeeeeeeeeee!");// konsol loggar för att se min kod har lyckades köra fram hit.
    }
});