import React from 'react'
import ReactDOM from 'react-dom/client'
import EMELEC, { ACTIVIDADSOCIO } from './Emelec'
const root2 = ReactDOM.createRoot(document.getElementById("root"));



root2.render(

    <>
    <EMELEC name="Francisco Xavier Morales García" tiposocio="Socio eléctrico" numerosocio ={15326}
        localidad="Tribuna San Martín" sociodesde="2017"/>

    <ACTIVIDADSOCIO mespagado= {5} añopagado={2022} />
   </>

);