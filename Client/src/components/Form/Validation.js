const Validation = (userData, errors, setErrors) => {
    // email
    if(!userData.email){
        setErrors({...errors, email:"Por favor completa este campo"});
    } else if(userData.email.length > 35){
        setErrors({...errors, email:"No puede superar los 35 caracteres"})
    } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)){
        setErrors({...errors, email:"Email invalido"})
    }else{setErrors({...errors, email:""})}

    // password
    if(userData.password.length < 6 || userData.password.length > 10){
        setErrors({...errors, password:"Longitud del password invalida"})
    }else if(!/\d/.test(userData.password)){
        setErrors({...errors, password:"Debe contener almenos un numero"})
    }else{
        setErrors({...errors, password:""})
    }

}

export default Validation;