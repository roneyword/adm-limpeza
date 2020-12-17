export default function btnFloating(){

    const btn = document.querySelector('.btn__icon');
    const containerBtnFloating = document.querySelector('.btn__floating__contato');

    btn.addEventListener('click', () => {
        containerBtnFloating.classList.toggle('active');
    })

}