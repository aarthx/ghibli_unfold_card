function criaCard(title, subtitle, img, description) {
    return (
        `<div class="card">
            <div class="top-card">
                <h2 class="title">${title}</h2>
                <span class=second-text>${subtitle}</span>
            </div>
            <div class="media-card media-${title}"
                style="background: url('${img}') center/cover;">
            </div>
            <div class="bottom-card">
                <p class="bottom-text">${description}</p>
                <div class="actions-card">
                    <button class="actions">Curtir</button>
                    <button class="actions">Compartilhar</button>
                </div>
            </div>
        </div>
        `          
    )
}



document.querySelector('.content').innerHTML = `
    ${criaCard('Princesa Mononoke','1997 ‧ Fantasia/Aventura ‧ 2h13m',
    'https://miro.medium.com/max/1400/1*nVDfyqj8Qo_2msg3h0eqig.jpeg', 
    'Um príncipe, em busca de uma cura, luta em uma guerra entre a mata e uma colônia mineira. Nesta aventura ele conhece Mononoke.')}
    ${criaCard('A Viagem de Chihiro', '2001 ‧ Fantasia/Aventura ‧ 2h5m'
    ,'https://cdn.ome.lt/vkR6qp7TK1Oky5mkpLD3daiAlIk=/1200x630/smart/extras/conteudos/Lista-03_8BYpSxv.jpeg'
    , 'Enquanto pouco a pouco a cidade vai ganhando vida: os postes acendem e aparecem uma variedade de espíritos e Chihiro busca seus pais.')}
    ${criaCard('O Castelo Animado' , '2004 ‧ Fantasia/Aventura ‧ 1h59m',
    'https://i0.wp.com/usinadeuniversos.com/wp-content/uploads/2020/12/ocasteloanimadoheader.png',
    'Sophie embarca numa odisseia em busca do Castelo Andante, onde reside um misterioso feiticeiro que poderá ajudá-la a reverter o feitiço.')}
`