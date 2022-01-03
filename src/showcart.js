
const renderCartList = () => {


    //const $showcase = document.querySelector('.table goods-item');

    var element = document.createElement('div')
    element.className = 'modal_cart'
    element.innerHTML = '<div class="modal" tabindex="-1">\n' +
    '  <div class="modal-dialog">\n' +
    '    <div class="modal-content">\n' +
    '      <div class="modal-header">\n' +
    '        <h5 class="modal-title">Modal title</h5>\n' +
    '        </div>\n' +
    '      <div class="modal-body">\n' +
    '        <p>Modal body text goes here.</p>\n' +
    '      </div>\n' +
    '      <div class="modal-footer">\n' +
    '        <button type="button" onclick="modalclose();" id="mclose" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>'

       // var app = document.querySelector('.text-center');
        document.body.appendChild(element);

        //let goodsList = list.map(
        //        (item) =>  {
        //            return renderGoodsItem(item)
        //        }
        //    ).join('');

        //$showcase.insertAdjacentHTML('beforeend', goodsList);

}
        export default renderCartList
    //export {renderCartList, modal_f};
