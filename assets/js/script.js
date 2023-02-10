function showModal() { 
    const element = document.querySelector('.modal')
    element.classList.add('showModal')
}

function hideModal() { 
    const element = document.querySelector('.modal')
    element.classList.remove('showModal')
}

const btn = document.querySelector('.copy')
const textArea = document.querySelector('textarea')

btn.addEventListener('click', (e) => {
    e.preventDefault()

    navigator.clipboard.writeText(textArea.value)
    alert('E-mail copiado para área de transferência!')

    hideModal()
})



//---------------------------------------------
