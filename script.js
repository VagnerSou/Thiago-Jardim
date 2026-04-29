const services = {
    'simples': {
        title: 'Lavagem Simples',
        description: 'Limpeza essencial para manter o brilho. Inclui lavagem externa detalhada, secagem manual, limpeza de vidros, aspiração dos tapetes e aplicação de pretinho.'
    },
    'detalhada': {
        title: 'Lavagem Detalhada',
        description: 'Cuidado completo para o seu veículo. Inclui limpeza minuciosa interna e externa, higienização de painel, aspiração profunda, limpeza de frestas e cera protetora.'
    },
    'domicilio': {
        title: 'Atendimento em Domicílio',
        description: 'Conforto total para você! Levamos nossa estrutura até sua residência ou condomínio. Praticidade extrema com a mesma qualidade de estúdio.'
    }
};

const whatsappBase = "5517991337889";

function openModal(key) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const desc = document.getElementById('modal-description');
    const waBtn = document.getElementById('modal-whatsapp');

    const item = services[key];
    title.innerText = item.title;
    desc.innerText = item.description;
    
    // Gera mensagem personalizada para o WhatsApp
    const msg = encodeURIComponent(`Olá! Vi o seu app e gostaria de agendar: ${item.title}.`);
    waBtn.href = `https://wa.me/${whatsappBase}?text=${msg}`;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Impede rolagem ao abrir modal
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Fechar ao clicar fora do modal
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}