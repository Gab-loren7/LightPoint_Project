function OpenModalSugestoes() {
    const overlay = document.getElementById('janela-modal');

    // Abre o modal
    overlay.classList.add('abrir');
    document.body.style.overflowY = 'hidden'; // trava o scroll da página

    // Fecha o modal ao clicar fora ou no botão de fechar
    overlay.addEventListener('click', (e) => {
        if (e.target.id === 'fechar' || e.target.id === 'janela-modal') {
            overlay.classList.remove('abrir');
            document.body.style.overflowY = 'auto'; // destrava o scroll
        }
    });
}
