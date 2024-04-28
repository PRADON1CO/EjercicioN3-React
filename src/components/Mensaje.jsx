import React, { useState } from 'react';

const Mensaje = ({mensaje}) => {
    const [msj, setMsj] = useState("")

    return (
        <div>
            <h2>Hello {mensaje + msj} !</h2>
            <button onClick={() => {setMsj(" (From changed state)")}}>Click Me!</button>
        </div>
    );
};

export default Mensaje;