modal = [1,2,3,4];

for(let i = 0; i < modal.length; i++){
    
    let products = document.createElement('div')
    // products.id = `abrir-modal-${i}`
    products.className = 'column'
    products.innerHTML = `
      <div class="card">
        <div class="card-image">
          <img src="./img/370x700_samsung_galaxy_a21s_black.png" alt="">
        </div>
        <div class="card-title">Samsung</div>
        <div class="card-description">Galaxy A21s 128 GB</div>
        <div class="card-footer">
          <button type="button" id="abrir-modal-${i}"  class="btn-solicitar">Solicitar</a>
        </div>
      </div>
    `
    
    
    document.querySelector('#products').appendChild(products)

    let modal = document.createElement('div')
	modal.className = 'modal-test'
    modal.id = `modal-test-${i}`
	modal.innerHTML = `
    <div class="modal-contenido">
        <div class="modal-body">
            <div id="cerrar-modal-${i}" class="btn-cerrar"></div>
            <h3 class="modal-titulo">¡Te ayudamos a contratar!</h3>
            <p class="modal-mensaje">Ingresa los datos solicitados y nosotros te llamaremos gratis</p>
            <div class="modal-form">
                <form id="form-${i}">
                    <input type="text" id="txt-email-${i}" class="input-modal" placeholder="Email">
                    <input type="text" id="txt-telefono-${i}" class="input-modal" placeholder="Teléfono">
                    <label>
                        <input type="radio" name="contact" id="rd-email-${i}" value="email" class="input-modal-radio">
                        Contactar por email
                    </label>
                    <label>
                        <input type="radio" name="contact" id="rd-whatsapp-${i}" value="whatsapp" class="input-modal-radio">
                        Contactar por whatsapp
                    </label>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" id="enviar-${i}" class="btn-modal">Enviar</a>
            </div>
        </div>
    </div>
        `
    document.querySelector('#modals').appendChild(modal)


    const abrir_modal = document.querySelector(`#abrir-modal-${i}`)
    const cerrar_modal = document.querySelector(`#cerrar-modal-${i}`)
    const form  = document.querySelector(`#form-${i}`);
    const enviar  = document.querySelector(`#enviar-${i}`);
    
    abrir_modal.addEventListener('click', () => {
        document.getElementById(`modal-test-${i}`).style.display = 'block'
    })

    cerrar_modal.addEventListener('click', () => {
        document.getElementById(`modal-test-${i}`).style.display = 'none'
        
    })

    enviar.addEventListener('click', () => {
        const txt_email = form.elements[`txt-email-${i}`].value
        // const txt_telefono = form.elements[`txt-telefono-${i}`].value
        const rd_email = form.elements[`rd-email-${i}`].checked
        const rd_whatsapp = form.elements[`rd-whatsapp-${i}`].checked

        if(rd_email === true){
            alert('se envio la solicitud por email')
            document.getElementById(`modal-test-${i}`).style.display = 'none'
            form.reset()
        }else{
            if(rd_whatsapp === true){
                window.open(`https://wa.me/77999757?text=Hola buenas tardes, me gustaria asesoriamiento`, '_blank');
                document.getElementById(`modal-test-${i}`).style.display = 'none'
                form.reset()
            }
        }
    }); 
}


// let modal_whatsapp = document.createElement('div')
//     modal_whatsapp.className = 'modal-test'
//     modal_whatsapp.id = `modal-test`
// 	modal_whatsapp.innerHTML = `
//     <div class="modal-contenido">
//         <div class="modal-body">
//             <div id="cerrar-modal" class="btn-cerrar"></div>
//             <h3 class="modal-titulo">¡Te ayudamos a contratar!</h3>
//             <p class="modal-mensaje">Ingresa los datos solicitados y nosotros te llamaremos gratis</p>
//             <div class="modal-form">
//                 <form id="form">
//                     <input type="text" id="txt-email" class="input-modal" placeholder="Email">
//                     <input type="text" id="txt-telefono" class="input-modal" placeholder="Teléfono">
//                     <label>
//                         <input type="radio" name="contact" id="rd-email" class="input-modal-radio">
//                         Contactar por email
//                     </label>
//                     <label>
//                         <input type="radio" name="contact" id="rd-whatsapp" class="input-modal-radio">
//                         Contactar por whatsapp
//                     </label>
//                 </form>
//             </div>
//             <div class="modal-footer">
//                 <button type="button" id="enviar" class="btn-modal">Enviar</a>
//             </div>
//         </div>
//     </div>
//         `
//     document.querySelector('#modal-whatsapp').appendChild(modal_whatsapp)


//     const abrir_modal = document.querySelector('#abrir-modal')
//     const cerrar_modal = document.querySelector('#cerrar-modal')
//     const abrir_whatsapp = document.querySelector('#abrir-whatsapp')

//     const form  = document.querySelector('#form');
//     const enviar  = document.querySelector('#enviar');

    

//     abrir_modal.addEventListener('click', () => {
//         document.getElementById('modal-test').style.display = 'block'
//     })

//     cerrar_modal.addEventListener('click', () => {
//         document.getElementById('modal-test').style.display = 'none'
//     })

//     enviar.addEventListener('click', () => {
//         const txt_email = form.elements['txt-email'].value
//         const txt_telefono = form.elements['txt-telefono'].value
//         const rd_email = form.elements['rd-email'].checked
//         const rd_whatsapp = form.elements['rd-whatsapp'].checked

//         if(rd_email === true){
//             alert('se envio la solicitud por email')
//             document.getElementById('modal-test').style.display = 'none'
//             form.reset()
//         }else{
//             if(rd_whatsapp === true){
//                 window.location.href = `https://wa.me/${txt_telefono}?text=${txt_email}`
//                 document.getElementById('modal-test').style.display = 'none'
//                 form.reset()
//             }
//         }
//     });

    
