import { useState } from 'react'
const App = () => {
    const [value, setValue] = useState({ 
        normal: '', 
        texto:'', 
        select: '', 
        check: false,
        estado: 'feliz'
    })
    const handleChange = (e) => {
        setValue((state) => ({
            ...state,
            [e.target.name]: e.target.type === 'checkbox' 
            ? e.target.checked 
            : e.target.value
        }))
    }
    console.log(value)
    return (
        <div>
            {value.length < 5 ? <span>longitud minima 5</span> : null}
            <input type="text" name="normal" value={value.normal} onChange= {handleChange} />
            <textarea name='texto' onChange={handleChange} value ={value.texto} />

            <select value={value.select} name='select' onChange={handleChange}>
                <option value=''>-- Seleccione --</option>
                <option value='chanchofeliz'>Chancho feliz</option>
                <option value='chanchitofeliz'>Chanchito feliz</option>
                <option value='chanchitotriste'>Chanchito triste</option>
                <option value='felipe'>Felipe</option>
            </select>
                
            <input 
                type="checkbox"
                name="check"
                onChange={handleChange}
                checked={value.check}
            />

            <div onChange={handleChange}>
                <label>Chancho</label>
                <input 
                    onchange={handleChange}
                    type="radio" 
                    value='feliz' 
                    name='estado'
                    checked={value.estado === 'feliz'} 
                /> Feliz
                <input 
                    onchange={handleChange}
                    type="radio" 
                    value='triste' 
                    name='estado' 
                    checked={value.estado === 'triste'} 
                /> Triste
                <input 
                    onchange={handleChange}
                    type="radio" 
                    value='felipe' 
                    name='estado' 
                    checked={value.estado === 'felipe'} 
                /> Felipe
            </div>
        </div>
    )
}

export default App