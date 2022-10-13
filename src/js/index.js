const InformacoesAba = document.querySelectorAll('.aba')
const InformacoesAbaSelecionado = document.querySelectorAll('.informacao')



InformacoesAba.forEach(aba=>{
    aba.addEventListener('click', ()=>{

        const AbaInfomacao = document.querySelector('.selecionado')
        AbaInfomacao.classList.remove('selecionado')

        const IdAba = aba.attributes.id.value  

        const IdAbaAberto = 'aba-' +  IdAba        
        const IdAberto = document.getElementById('aba-'+ IdAba)
        IdAberto.classList.add('selecionado')

        const AbaAtiva = document.querySelector('.ativo')
        AbaAtiva.classList.remove('ativo')

        const AbaSelecionadaAtiva = document.getElementById(IdAba)
        AbaSelecionadaAtiva.classList.add('ativo')
        

    })
})
