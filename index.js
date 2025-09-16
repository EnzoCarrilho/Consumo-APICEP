'use strict'

async function pesquisarCep(cep){
    const url = `https://cdn.apicep.com/file/apicep/${cep}.json`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function preencherCampos({target}){
    const cepInfo = await pesquisarCep(target.value)
    document.getElementById('endereco').value = cepInfo.address
    document.getElementById('bairro').value = cepInfo.district
    document.getElementById('cidade').value = cepInfo.city
    document.getElementById('estado').value = cepInfo.state
}

document.getElementById('cep')
        .addEventListener('focusout', preencherCampos)