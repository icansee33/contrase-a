// aqui va todo el código
console.log("hola mundo")

const deleteTask = (id) =>{
    console.log("eliminando...", id )
    const taskListElement = document.getElementById("task-list")

    const elementoDelete = document.getElementById(id)

    taskListElement.removeChild(elementoDelete)

    const token = almacenamientoL.getItem('token')
}

try {  
    const response = await fetch(" https://graco-task-list.herokuapp.com/task", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify( newU )
    })
}catch(error){
    
}

    

    const deleteAll = (id) =>{
    console.log("eliminando...", id )

    const taskListElement = document.getElementById("task-list")

    const elementoDelete = document.getElementById(deleteAll)

    taskListElement.removeChild(elementoDelete)


}


const buttonAdd = document.getElementById("add-task-btn")

buttonAdd.addEventListener("click",async()=>{
    if(selectElement.value !=="" && inputElement.value !=="" && taskDateElement.value !==""){


        const newTask = { 
            "name": inputElement.value, 
            "date": taskDateElement.value , 
            "priority": selectElement.value 
        } 
        const token = localStorage.getItem('token') 
        const response = await fetch('https://graco-task-list.herokuapp.com/task', { 
            method: "POST", 
            headers: { 
                "Content-Type": "application/json", 
                'Authorization': "Bearer ${token}" 
            }, 
            body: JSON.stringify( newTask ) 
        }) 
        const data = await response.json() 
 
        if(response.status === 200){ 
            Swal.fire( 
                'Buen trabajo!', 
                'Registro Exitoso', 
                'success' 
            ) 
            init() 
        }else{ 
            Swal.fire({ 
                icon: 'error', 
                title: 'Oops...', 
                text: "${data.error}", 
                footer: '' 
            }) 
        } 
 
    }else{ 
        Swal.fire( 
            'Campos Vacios', 
            'Debe llenar todos los campos requeridos!', 
            'error' 
        ) 
    }

})




const btnElement = document.getElementById("add-task-btn")

console.log(btnElement) 

if(btnElement){
    btnElement.addEventListener("click", function() {
        //console.log("enviando tarea ...")
    })
}

//agarrar el elemento form(formulario)

const formElement = document.getElementById("task-form")

if(formElement){
    console.log("formulario funcionando....")
    //modificar el evento

    

    formElement.addEventListener("submit", function(event) {
        event.preventDefault()
        //extraer los datos(nombre y prioridad)
        const inputElement = document.getElementById("taskName")
        console.log(inputElement.value)
        const inputElementF = document.getElementById("taskFecha")
        console.log(inputElementF.value)

        

        let backgroundColor = ""


        if(inputElement.value !== ""){
            //buscar el select
            const selectEleement = document.getElementById("taskPriority")
            console.log(selectEleement.value)
            const taskListElement = document.getElementById("task-list")

           let mayorId = 1

           //verificamos cantidad de hijos en una etiketa
           if(taskListElement.children.length > 0){
            const ultimkoHijo = taskListElement.children[taskListElement.children.length - 1]
            mayorId += parseInt(ultimkoHijo.id) 


           }

           if(selectEleement.value < 3 ){

            backgroundColor = " background-color: #71E41F;"
           }else if(selectEleement.value > 2 && selectEleement.value <5){
            backgroundColor = "background-color: #FFA633;" 
           }else if(selectEleement.value >4){
            backgroundColor ="background-color: #EC382E "
           }

            taskListElement.innerHTML += `
            <li id="${mayorId}" class="list-group-item d-flex justify-content-between align-items-center"
            style="word-break: keep-all; ${backgroundColor}">
            <div class="mx-2 text-start" style="flex: 1;">
                <div class="fw-bold">${inputElement.value}</div>

                <div class="mx-23 text-start" style="flex: 1;">
                <div class="fw-bold">${inputElementF.value}</div>
            </div>
                
            </div>



           
            

            <span class="badge bg-primary rounded-pill mx-1">${selectEleement.value}</span>
            
            <button onclick="deleteTask(${mayorId})" type="button" class="btn btn-outline-danger btn-sm">
                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px"
                    height="20px">
                    <path
                        d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z" />
                </svg>
            
            </button>
            </li> 
            
            `


            

            


        }else{
            alert("debes especificar una tarea")
        }


    })

    `<button onclick="deleteAll(${mayorId})" type="button" class="btn btn-outline-danger btn-sm">
    
    
    </button>
`

    
}




// agarrar elemento de la lista

//agregar nuevo hijo//