const commands = [
    {name:"checkout -- .", description:""},
    {name:"git add <nombreDelArchivo>", description:""},
    {name:"git status", description:"entrega información de la rama donde estamos trabajando"},
    {name:"git reset <nombre del archivo>", description:"Para bajar un archivo de stage"},
    {name:"git branch", description:"Entrega el nombre de la rama en la que estamos trabajando:"},
    {name:"git add <nombreDelArchivo>", description:"ara agregar un archivo a stage"},
    {name:"git log", description:"Muestra los logs del repositorio"},
    {name:"git branch -m master main ", description:"Para cambiar el nombre de la rama master a main"},
    {name:"", description:""},
    {name:"", description:""},
    {name:"", description:""},
    {name:"", description:""},

]

commands.forEach(command => console.log(command.name+ " - " +command.description));


let resultado = commands.filter(command => command.name === "git log");


console.log(resultado[0].description);



