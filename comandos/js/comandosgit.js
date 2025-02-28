const commands = [
    {name:"checkout -- .", description:"Descarta los cambios que no se han guardado"},
    {name:"git add <nombreDelArchivo>", description:""},
    {name:"git status", description:"entrega información de la rama donde estamos trabajando"},
    {name:"git reset <nombre del archivo>", description:"Para bajar un archivo de stage"},
    {name:"git branch", description:"Entrega el nombre de la rama en la que estamos trabajando:"},
    {name:"git add <nombreDelArchivo>", description:"Para agregar un archivo a stage"},
    {name:"git log", description:"Muestra los logs del repositorio"},
    {name:"git branch -m master main ", description:"Para cambiar el nombre de la rama master a main"},
    {name:"git add *.extension", description:"Para agregar todos los archivos que cumplen con la condición de tener una extension explícita"},
    {name:"git status --short", description:"Descripcion corta para saber que archivo ha sido modificado"},
    {name:"git config --global alias.s status --short", description:"Genera un alias para un comando. lo que va después del punto de alias es el nombre del alias (s) lo que sigue del espacio es el comando que queremos ejecutar con ese alias (status --short)"},
    {name:"git config -e --global", description:"Para editar el archivo de configuracion global de manera manual"},
    {name:"git diff", descripcion:"Para identifcar las diferencias entre archivos en local y en stage"},
    {name:"git commit --amend -m \"Nuevo mensaje\"", descripcion:"Para modificar el mensaje del último commit"},
    {name:"git reset --soft HEAD^ ", descripcion:"HEAD^ Indica el último commit  HEAD^2 indica el segundo antes del ultimo commit"},
    {name:"git add <directorio>", descripcion:"Para agregar todo el directorio git add historias/"},
    {name:"git commit --amend", descripcion:"Abre los detalles del último commit"},
    {name:"git commit -am \"Mensaje\"", description:"Forma corta de git add y git commit -m"},
    {name:"git reset --soft <HASH corto>", description:"Nos lleva al commit indicado"},
    {name:"git reset --mixed <HASH corto>", description:""},
    {name:"git reset --hard <HASH corto>", description:"Es destructuvo y deja el repositorio como lo teníamos en ese momento"},
    {name:"git reflog", description:"Referencia a todo lo que ha sucedido en orden cronológico"},
    {name:"git reset --hard <HASH corto>", description:"Nos mueve a como esta el repositorio en ese momento"},
    {name:"git mv <nombreDelArchivo> <nuevoNombreDelArchivo>", description:"Renombra un archivo"},
    {name:"git rm <nombreDelArchivo>", description:"Para eliminar un archivo"},
    {name:"git reset --hard", description:"Es equivalente a git checkout -- . "},
    {name:"git branch <nombreDeLaRama>", description:"Par crear una rama"},
    {name:"git branch", description:"Para listar las ramas"},
    {name:"git checkout <nombreDeLaRama>", description:"Ir a una rama"},
    {name:"git merge <nombreDeLaRama>", description:"Para unir una rama <nombreDeLaRama> a la rama donde me encuentro"},
    {name:"git branch -d <nombreDeLaRama>", description:"Para borrar una rama"},
    {name:"git branch -d <nombreDeLaRama> -f", description:"Para borrar una rama a pesar de que no se hayan integrado sus cambios"},
    {name:"git checkout -b <nombreDeLaRama>", description:"Crea una rama y nos mueve a esa rama"},
    {name:"", description:""},
    {name:"", description:""},
    {name:"", description:""},
    {name:"", description:""},
];
const commandsMerge = [];

const commandsTags = [
    {name:"git tag <nombreDelTag>", description:"Para crear un tag"},
    {name:"git tag -d <nombreDelTag>", description:"Para borrar un tag"},
    {name:"git tag -a v1.0.0 -m \"Version 0.0.1\"", description:"Para generar un tag anotado"},
    {name:"git tag", description:"Listar los tags"},
    {name:"git tag -a v0.0.1 <HashCorto>", description:"Para generar un tag de un commit específico"},
    {name:"git show <nombreDelTag>", descripcion:"Muestra los detalles del tag"},
    {name:"", descripcion:""},
    {name:"", descripcion:""},

];

const commandsStash = [
    {name:"git stash", descripcion:"guarda todos los cambios aunque no estén colocados en stage"},
    {name:"git stash list", descripcion:"Lista los stashs"},
    {name:"git stash pop", descripcion:"Recupera los cambios que habiamos colocado en el último stash"},
    {name:"git stash clear", descripcion:"Parar borrar todos los stash"},
    {name:"git stash apply <nombreDelStash>", descripcion:"Rcupera los cambios de un stash particular"},
    {name:"git stash drop <nombreDelStash>", descripcion:"Borra el stash indicado en el nombre"},
    {name:"git stash show <nombreDelStash>", descripcion:"Muestra los detalles del stash"},
    {name:"git stash save <nombreDelStash>", descripcion:"Para crear un stash con un nombre"},
    {name:"", descripcion:""},
    {name:"", descripcion:""},
];

const commandsRebase = [
    {name:"git rebase master", descripcion:"Se ejecuta mientras estamos en la rama diferente a master y coloca nuestros commits como si fueran los m{as recientes"},
    {name:"git rebase -i ", descripcion:"Para unificar commits"},
    {name:"", descripcion:""},
    {name:"", descripcion:""},
    {name:"", descripcion:""},
    {name:"", descripcion:""},
];



commands.forEach(command => console.log(command.name+ " - " +command.description));
commandsStash.forEach();

const notas = ["Git no da seguimiento a carpetas vacías",
    "git config --global alias.lg \"log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all\""
];

notas.push("test");

notas.push(".gitignore debe estar en la raíz del proyecto y contiene el nombre de los archivo o directorios a los que no queremos darles seguimiento");
notas.push("Si quiero hacer merge debo estar en la rama en la quiero unir mis cambios");
notas.push("El merge con estrategia recursiva sucede cuando la rama master puede ser unificada con la rama que queremos unir y que tiene cambios que no han sido integrados")
notas.push("v1.0.0 Indica una version mayor, el segundo número es una nueva funcioanlidad, el tercero es para un bug/fix");
notas.push("Stash mantiene los cambios que no han sido subidos a stage o commit de manera segura y temporal");
notas.push("Rebase se utiliza para unir o separar commits, para reorganizar");
notas.push("Rebase actualiza la base de código sobre la que estamos trabajando");



notas.forEach((nota, index) => console.log(nota, index));



//filter retorna un array, map no
let resultado = commands.filter(command => command.name === "git log");
let resultadoNoEncontrado = commands.filter(command => command.name !== "error");
console.log(resultado[0].description);
console.log(`resultadoNoEncontrado ${resultadoNoEncontrado}`);




