let input = prompt("What would you like to do?");
const todos = ["Collect Eggs", "Clean cat litter box"];

while (input !== "quit" && input !== "q"){
    if(input === "list"){
        console.log("***************");
        for(let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("***************");
    } else if(input === "new"){
        const newTodo = prompt("Ok, what is the new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    } else if(input === "delete"){
        /*The following two lines can be combined into one.*/
        const indexStr = prompt("Ok, enter an index to delete!");
        const index = parseInt(indexStr);
        if(!Number.isNaN(index)){
            todos.splice(index,1);
            console.log(`Ok, deleted ${index}`);
        } else {
            console.log("Unknown index");
        }
    }


    
    input = prompt("What would you like to do?");


}
console.log("Ok, you quit the app");