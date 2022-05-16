import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre, propietario, email, fecha, sintomas, id} = paciente;
    
    const handleEliminar = () => {
        const respuesta = confirm("¿Quiere eliminar paciente?");
        if (respuesta) {
            eliminarPaciente(id)
        }
    }

    return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'> Nombre: {''}
            <span className='font-normal normal-case'>{nombre}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'> Propietario: {''}
            <span className='font-normal normal-case'>{propietario}</span>
        </p>            
        <p className='font-bold mb-3 text-gray-700 uppercase'> Email {''}
            <span className='font-normal normal-case'>{email}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'> Fecha Alta: {''}
            <span className='font-normal normal-case'>{fecha}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'> Síntomas: {''}
            <span className='font-normal normal-case'>{sintomas}</span>
        </p>                                          

        <div className='flex justify-between'>
            <button className= "text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg px-10 py-2 mx-3 uppercase"
                type="button"
                onClick={() => setPaciente(paciente)}
            >Editar</button>    
            <button className= "text-white bg-red-600 hover:bg-red-700 rounded-lg px-10 py-2 mx-3 uppercase"
                type="button"
                onClick={handleEliminar}
            >Eliminar</button>               
        </div>
    </div>
  )
}

export default Paciente