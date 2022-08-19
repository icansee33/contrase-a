const nombre = document.getElementById("nombre")
const apellido = document.getElementById("Apellido")
const correo = document.getElementById("Correo")
const contraseña = document.getElementById("Contraseña")
const registro = document.getElementById("btnR")

registro.addEventListener("click",async() => {
    const newU = {
        "name":nombre.value,
        "lastName":apellido.value,
        "email":correo.value,
        "password":contraseña.value
        
    }

    
    try {
        
        
        const response = await fetch(" https://graco-task-list.herokuapp.com/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( newU )
        })

        const data = await response.json()
       

        console.log(data)


        if(response.status ===200){
            Swal.fire(
                'Buen trabajo!',
                'registro exitoso!',
                'success'
              )
              window.location.href = "/"
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Ueeepaa',
                text: 'debes llenar los espacios vacios!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
                    
        }
        

    } catch (error) {
        alert(error)
    }

})



