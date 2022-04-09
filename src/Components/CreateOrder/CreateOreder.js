import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdDangerous } from "react-icons/md";

const CreateOreder = () => {

    const {register, formState :{ errors } , handleSubmit} = useForm();
    const encargar = () => {
        console.log('navi')
    }
    const navigate = useNavigate()

    return (
        <div className = 'main'>
            <h2 className ='h2-login'>Generar Pedido</h2>
            <div className = "log-in-container">
                <form className='form-login' onSubmit ={handleSubmit(encargar)}>
                    <div className = 'campo radius-t arriba'>
                        <input className='input-form radius-t' type = 'text'
                        autoComplete = 'off'
                        placeholder = 'Nombre y apellido'
                        name='nombre'
                        {...register('nombre', {
                            required:{
                                value: true,
                                message: 'El campo nombre es requerido',
                            },
                            minLength:{
                                value: 6,
                                message: 'Introduce un nombre valido'
                            }
                        })}/>
                    </div>
                    <div className='campo  arriba'>
                        <input className='input-form radius-t' type = 'select'
                            autoComplete = 'off'
                            placeholder = 'Producto a encargar'
                            name='producto'
                            {...register('producto', {
                                required:{
                                    value: true,
                                    message: 'El campo producto es requerido',
                                },
                                minLength:{
                                    value: 5,
                                    message: 'Introduce un producto valido'
                                }
                            })}/>
                    </div>
                    <div className = 'campo  arriba'>
                        <input className='input-form radius-t' type = 'text'
                        autoComplete = 'off'
                        placeholder = 'Kilos'
                        name='kilos'
                        {...register('kilos', {
                            minLength:{
                                value: 1,
                                message: 'Introduce un peso valido'
                            },
                            pattern: {
                                value:  /^[0-9]*(\.?)[ 0-9]+$/,
                                message: "El peso debe ser expresado en numeros"
                            }
                        })}/>
                    </div>
                    <div className = 'campo  arriba'>
                        <FaPhoneAlt/>
                        <input className='input-form radius-t' type = 'text'
                        autoComplete = 'off'
                        placeholder = 'Telefono'
                        name='phone'
                        {...register('phone', {
                            required:{
                                value: true,
                                message: 'El campo telefono es requerido',
                            },
                            minLength: {
                                value: 10,
                                message: "El telefono debe tener al menos 10 caracteres"
                            },
                            pattern: {
                                value: /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/,
                                message: "El formato de telefono no es correcto"
                            }
                        })}/>
                    </div>
                    <div className = 'campo  arriba'>
                        <input className='input-form radius-t' type = 'text'
                        autoComplete = 'off'
                        placeholder = 'Seña'
                        name='senia'
                        {...register('senia', {
                            minLength:{
                                value: 3,
                                message: 'Introduce una seña valida'
                            },
                            pattern: {
                                value:  /^[0-9]*(\.?)[ 0-9]+$/,
                                message: "La seña debe ser expresada solo en numeros"
                            }
                        })}/>
                    </div>

                    <button type="submit" value="submit" className = 'button-submit'> Encargar </button>
                </form>
            </div>
            <div className='messages'>
                <div className='message'>
                    {errors.nombre && <span className='error-message'>{errors.nombre.message}</span>}
                    <div className = 'caja-boton'>
                        {errors.nombre && <MdDangerous className='icon-error'/>}
                    </div>
                </div>
                <div className='message'>
                    {errors.producto && <span className='error-message'>{errors.producto.message}</span>}
                    <div className = 'caja-boton'>
                        {errors.producto && <MdDangerous className='icon-error'/>}
                    </div>
                </div>
                <div className='message'>
                    {errors.kilos && <span className='error-message'>{errors.kilos.message}</span>}
                    <div className = 'caja-boton'>
                        {errors.kilos && <MdDangerous className='icon-error'/>}
                    </div>
                </div>
                <div className='message'>
                    {errors.phone && <span className='error-message'>{errors.phone.message}</span>}
                    <div className = 'caja-boton'>
                        {errors.phone && <MdDangerous className='icon-error'/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateOreder