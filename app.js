const templateTareas = document.getElementById("templateTareas").content;
const wrapper = document.getElementById("wrapper");
const fragment = document.createDocumentFragment();

const form = document.getElementById("formAction");

let arrTareas = []


form.addEventListener('submit', e => {
    e.preventDefault()
    tareas(e.target)
})

const tareas = (objTarea) => {
    const title = objTarea.querySelector('#form_title')
    const description = objTarea.querySelector('#form_description')
    const inportancia = objTarea.querySelector('.form_input--check')

    const errorForm = (bError) => {
        bError ? title.classList.remove('validForm') : title.classList.add('validForm')
        bError ? description.classList.remove('validForm') : description.classList.add('validForm')
    }

    if(title.value === '' && description.value === ''){
        errorForm(false)
    }else{
        errorForm(true)
        setTareas({
            titleTarea: title.value,
            descriptionTareas: description.value,
            inportancia: inportancia.checked
        })
    }

    
}


const setTareas = (tareas) => {
    const result = arrTareas.findIndex(tarea => tarea.count === 1)


    if(result === -1) arrTareas.push(tareas)


    

    pintarTareas(arrTareas)
}


const pintarTareas = (tareas) => {

    wrapper.innerHTML = ''

    tareas.forEach(tarea => {
        templateTareas.querySelector('.card_title').textContent = tarea.titleTarea
        templateTareas.querySelector('.card_paragraph').textContent = tarea.descriptionTareas
        templateTareas.querySelector('.card_valid').textContent = tarea.inportancia ? 'inportante': ''

        const cloneNode = templateTareas.cloneNode(true)

        fragment.appendChild(cloneNode)
    })

    wrapper.appendChild(fragment)

    document.addEventListener("click", e => setPintarTareas(e))
    
}



const setPintarTareas = ({target:{dataset, parentElement}}) => {
    if(dataset.btn === 'btn_valid'){
        console.log('clicked')
        parentElement.parentElement.classList.toggle('cards--tached')
    }
}