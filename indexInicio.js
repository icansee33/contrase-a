const btnlogin = document.getElementById("btnL")

btnlogin?.addEventListener( "click", async() => {
    console.log("iniciando sesion...")

    const correoI = document.getElementById("email")
    const contraseña = document.getElementById("contraseña")



    if(correoI.value === "" || contraseña.value === ""){
        alert("debe llenar los espacios vacios")
        return
    }

    const dataToSend ={
        email: correoI.value,
        password: contraseña.value
    }

    console.log(dataToSend)

    try {
        
        
        const response = await fetch("https://graco-task-list.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( dataToSend )
        })

        const data = await response.json()


        console.log(data)


        if(response.status ===200){
            const jwt = data.token
            localStorage.setItem('token', jwt)
            Swal.fire(
                'Buen trabajo!',
                'inicio exitoso!',
                'success'
              )
              window.location.href = "indexT.html"
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