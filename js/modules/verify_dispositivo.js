export default function verifyDispositivo() {
  const linkWhats = document.querySelectorAll("[data-contato]");
  const inputCustomMsgWhats = document.querySelector("#mensageWhats");
  const btnCustomWhats = document.querySelector("#customMsg");
  let isMobile = false;
  const mensage = "Olá! Gostaria de mais informações sobre seus serviços";
  const linkDesk =
    "https://web.whatsapp.com/send?phone=5511977418876&text=" + replaceWhiteSpace(mensage);
  const linkMobile =
    "https://wa.me/5511977418876?text=" + replaceWhiteSpace(mensage);

  function replaceWhiteSpace(msg){
    return msg.replaceAll(' ', '%20');
  }
  
  btnCustomWhats.addEventListener('click', () => {
    let msgCustomerWhats = inputCustomMsgWhats.value;
    
    if(msgCustomerWhats == ""){
      msgCustomerWhats = mensage;
    }
    
    isMobile ?
    btnCustomWhats.attributes.href.textContent = "https://wa.me/5511977418876?text=" + replaceWhiteSpace(msgCustomerWhats) :
    btnCustomWhats.attributes.href.textContent = "https://web.whatsapp.com/send?phone=5511977418876&text=" + replaceWhiteSpace(msgCustomerWhats);
    inputCustomMsgWhats.value = "";
  });

  if(linkWhats.length > 0) {

    function linkDispositivo(link) {
      linkWhats.forEach((element) => {
        element.attributes.href.textContent = link;
      });
    }

    if(screen.width < 1024 || screen.height < 768) {
      linkDispositivo(linkMobile);
      isMobile = true;
    } else {
      linkDispositivo(linkDesk);
      isMobile = false;
    }
  }
}
