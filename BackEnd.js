// Hämtar referenser till olika HTML-element i dokumentet.
const input = document.getElementById("input"); // Inputfält där användaren skriver to do-uppgifter.
const addBtn = document.querySelector("#addBtn"); // Knappen som lägger till nya uppgifter.
const listBox = document.getElementById("form"); // Behållare där hela listan och statusinfo ska finnas.
let addItemTo = document.getElementById("listBox"); // Ul-element som ska innehålla listan med uppgifter.
let felmedelande = document.getElementById("titleText");
let todoList = []; // En array som lagrar alla uppgifter.

// Här lyssnar jag på addBtn efter klick. När användaren klickar på knappen "addBtn" körs följande kod:
addBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Förhindrar att sidan laddas om när man trycker på knappen.
    if (input.value.length !== 0) { // Kontroll för att säkerställa att användaren inte lämnar inputfältet tomt.
        felmedelande.textContent="Let's Do This!";
        let ItemsTodo; // Variabel för att hålla antalet uppgifter i listan.

        // Lyssnar efter alla klickhändelser på sidan för att uppdatera ItemsTodo.
        document.addEventListener("click", function() {
            ItemsTodo = addItemTo.childElementCount; // Räknar antal child-element (li) i ul-elementet (todo-listan).
            if(ItemsTodo == 0) {
                location.reload();
            }
        });

        // Skapa en uppgift som objekt och lägg till i arrayen
        let newTask = {
            text: input.value.trim(),
            done: false // Startar som icke-avklarad
        };
        todoList.push(newTask); // Lägger till uppgiften i arrayen.

        // Skapar ul-elementet för uppgifterna om det inte redan finns, plus några div-element för background.
        if (!addItemTo) {
            // Skapar en div för att visa statusinformation om listan (t.ex. antal uppgifter kvar).
            const infoDiv = document.createElement("div");
            infoDiv.classList.add("infoDiv"); // Lägger till en CSS-klass för att kunna styla div-elementet.
            listBox.appendChild(infoDiv); // Lägger till div-elementet i listBox (form-elementet).

            // Skapar ett p-element som visar hur många uppgifter som finns kvar att göra.
            let totalTodo = document.createElement("p");
            totalTodo.classList.add("total");
            totalTodo.id = "totalTodo"; // Ger elementet ett id för att kunna uppdatera textinnehållet senare.
            
            // Uppdaterar statusinformationen när användaren klickar på något på sidan.
            document.addEventListener("click", function() {
                totalTodo.textContent = "Task kvar: " + ItemsTodo; // Uppdaterar texten med antal uppgifter kvar.
            });
            infoDiv.appendChild(totalTodo); // Lägger till totalTodo i infoDiv (div-elementet för status).
            
            const shutDownBtn = document.createElement("button");
            shutDownBtn.id = "shutDown";
            shutDownBtn.innerHTML = '<i class="material-icons">power_settings_new</i>';
            infoDiv.appendChild(shutDownBtn);
            shutDownBtn.addEventListener("click", function(){
                location.reload();
            });

            // Skapar ett p-element som visar hur många uppgifter som är markerade som klara.
            let totalDone = document.createElement("p");
            totalDone.classList.add("total");
            totalDone.id = "totalDone"; // Ger elementet ett id för att uppdatera antalet klara uppgifter.
            
            // Lyssnar efter klick och uppdaterar antalet klara uppgifter (li med klassen "done").
            document.addEventListener("click", function() {
                let dn;
                dn = document.querySelectorAll("li.done"); // Hittar alla li-element med klassen "done".
                totalDone.textContent = "Task gjort: " + dn.length; // Uppdaterar texten med antal klara uppgifter.
            });
            infoDiv.appendChild(totalDone); // Lägger till totalDone i infoDiv.
            
            // Skapar ul-elementet för todo-listan om det inte redan finns.
            addItemTo = document.createElement("ul");
            addItemTo.id = "listBox"; // Ger ul-elementet ett id för att referera till det senare.
            listBox.appendChild(addItemTo); // Lägger till ul-elementet i DOM-strukturen.
        }

        // Skapar ett nytt li-element för att representera en ny uppgift.
        const nyList = document.createElement("li");
        nyList.textContent = newTask.text; // Hämtar texten från inputfältet och lägger till den i li-elementet.
        nyList.classList.add("nyList"); // Lägger till en CSS-klass för styling av li-elementet.
        addItemTo.appendChild(nyList); // Lägger till det nya li-elementet i ul (todo-listan).
        input.value = ""; // Rensar inputfältet efter att uppgiften har lagts till.

        // Skapar en knapp för att markera uppgiften som klar (med en ikon).
        const doneBtn = document.createElement("button");
        doneBtn.innerHTML = '<i class="material-icons">check_circle</i>'; // HTML för ikonen "check_circle".
        doneBtn.id = "doneBtn"; // Ger knappen ett id för att kunna identifiera den.
        nyList.appendChild(doneBtn); // Lägger till knappen i det nya li-elementet.

        // Skapar en knapp för att ta bort uppgiften (med en ikon).
        const tabortBtn = document.createElement("button");
        tabortBtn.innerHTML = '<i class="material-icons">delete</i>'; // HTML för ikonen "delete".
        tabortBtn.id = "tabortBtn"; // Ger knappen ett id för att kunna identifiera den.
        nyList.appendChild(tabortBtn); // Lägger till knappen i det nya li-elementet.

        // Lyssnar efter klick på Tabor knappen och tar bort uppgiften från listan.
        tabortBtn.addEventListener("click", function () {
            addItemTo.removeChild(nyList); // Tar bort li-elementet (uppgiften) från ul (todo-listan).
            let index = todoList.indexOf(newTask); // Hitta indexet i arrayen
            if (index > -1) {
                todoList.splice(index, 1); // Ta bort från arrayen
            }
        });

        // Lyssnar efter klick på "Klar"-knappen och markerar/avmarkerar uppgiften som klar.
        doneBtn.addEventListener("click", function () {
            newTask.done = !newTask.done; // Ändra status i arrayen
            nyList.classList.toggle("done"); // Lägger till eller tar bort klassen "done" för att stryka över texten.
        });
        console.log("done!"); // Loggar ett meddelande i konsolen för att veta att min kod lyckades köra hit.
    } else {
        // Här säger jag om input är tomt då byter jag title text till ett error-meddelande.
        felmedelande.textContent = "Oj, skriv något först!";
    }
});