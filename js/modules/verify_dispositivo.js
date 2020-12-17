export default function verifyDispositivo() {
  const linkWhats = document.querySelectorAll("a");
  const linkDesk =
    "https://web.whatsapp.com/send?phone=5511977418876&text=Olá!%20Gostaria%20de%20mais%20informações%20sobre";
  const linkMobile =
    "https://wa.me/5511977418876?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre";

  function linkDispositivo(link) {
    linkWhats.forEach((element) => {
      if (element.attributes[0].name == "data-contato") {
        element.attributes.href.textContent = link;
      }
    });
  }

  if (screen.width < 640 || screen.height < 480) {
    linkDispositivo(linkMobile);
  } else if (screen.width < 1024 || screen.height < 768) {
    linkDispositivo(linkMobile);
  } else {
    linkDispositivo(linkDesk);
  }
}
