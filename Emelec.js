export function EMELEC({title, name, tiposocio, numerosocio, localidad, sociodesde})
{

    console.log(title, name);

    /*const objeto =
    {
        Nombre: "Xavier Morales",
        cedula: "1319395932",
        Localidad: "Tribuna San Martin",
        NumeroSocio: "19068",
       

    }*/
   
    return <div> 
            <h1> INFORMACIÓN DEL SOCIO</h1>
            <h3>Nombres y apellidos del socio: {name}
            </h3>
            <h3>Tipo Socio: {tiposocio}</h3>
            <h3>Numero de socio: {numerosocio}</h3>
            <h3>Localidad: {localidad}</h3>
    </div>    

}

export function ACTIVIDADSOCIO({mespagado,añopagado})

{
    var fecha = new Date();
    var mes = fecha.getMonth()+1;
    var año = fecha.getFullYear();
    console.log(mes);
    console.log(año);

    if(mespagado == mes && añopagado == año)
    
    {
        return <div>
            <p>"ESTADO: ACTIVO"</p>
        </div>
    }
    else if (mespagado > mes && añopagado == año)
        {
        return <div>
            <p>"ESTADO: ACTIVO"</p>
        </div>
    }
    else if (añopagado > año)
   {
        return <div>
            <p>"ESTADO: ACTIVO"</p>
        </div>
    }
   else
   {
    return <div>
        <p>ESTADO: INACTIVO</p>
        <p>ACERCATE A PAGAR AL ESTADIO CAPWELL, O ELECTRONICAMENTE</p>
    </div>
   }

    
}



export default EMELEC;