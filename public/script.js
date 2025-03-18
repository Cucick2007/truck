function showDetails(musicId) {
    const details = document.getElementById(musicId);
    
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        details.innerHTML = getMusicDetails(musicId);
    } else {
        details.style.display = 'none';
    }
}

function getMusicDetails(musicId) {
    switch(musicId) {
        case 'bohemian':
            return `
                <p><strong>Álbum:</strong> A Night at the Opera</p>
                <p><strong>Gênero:</strong> Rock</p>
                <p><strong>Lançamento:</strong> 1975</p>
                <p><strong>Curiosidade:</strong> A música é famosa por seu estilo operístico e complexo.</p>
            `;
        case 'shape':
            return `
                <p><strong>Álbum:</strong> ÷ (Divide)</p>
                <p><strong>Gênero:</strong> Pop</p>
                <p><strong>Lançamento:</strong> 2017</p>
                <p><strong>Curiosidade:</strong> A música se tornou um sucesso mundial e quebrou vários recordes.</p>
            `;
        case 'letitbe':
            return `
                <p><strong>Álbum:</strong> Let It Be</p>
                <p><strong>Gênero:</strong> Rock</p>
                <p><strong>Lançamento:</strong> 1970</p>
                <p><strong>Curiosidade:</strong> A música é considerada um dos maiores clássicos do rock.</p>
            `;
        default:
            return `<p>Detalhes não encontrados.</p>`;
    }
}
