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
    {name:"", description:""},
    {name:"", description:""},
    {name:"", description:""},
    {name:"", description:""},
    {name:"", description:""},
    {name:"", description:""},
]

commands.forEach(command => console.log(command.name+ " - " +command.description));

const notas = ["Git no da seguimiento a carpetas vacías",
    "git config --global alias.lg \"log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all\""
];

notas.push("test");

notas.push(".gitignore debe estar en la raíz del proyecto y contiene el nombre de los archivo o directorios a los que no queremos darles seguimiento");
notas.push("");

notas.forEach((nota, index) => console.log(nota, index));



//filter retorna un array, map no
let resultado = commands.filter(command => command.name === "git log");
let resultadoNoEncontrado = commands.filter(command => command.name !== "error");
console.log(resultado[0].description);
console.log(`resultadoNoEncontrado ${resultadoNoEncontrado}`);




