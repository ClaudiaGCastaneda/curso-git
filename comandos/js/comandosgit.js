const commands = [
    {name:"checkout -- .", description:""},
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
    {name:"", descripcion:""},
    {name:"", descripcion:""},
    {name:"", descripcion:""},
    {name:"", descripcion:""},
    {name:"", descripcion:""},

]

commands.forEach(command => console.log(command.name+ " - " +command.description));

const notas = ["Git no da seguimiento a carpetas vacías",
    "git config --global alias.lg \"log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all\""
];

notas.push("test");
notas.forEach((nota, index) => console.log(nota, index));



//filter retorna un array, map no
let resultado = commands.filter(command => command.name === "git log");
let resultadoNoEncontrado = commands.filter(command => command.name !== "error");
console.log(resultado[0].description);
console.log(`resultadoNoEncontrado ${resultadoNoEncontrado}`);




