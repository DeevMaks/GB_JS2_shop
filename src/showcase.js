const $showcase = document.querySelector('.showcase');

const renderGoodsItem = ({ id, title, price }) => {
    return `<tr>            
            <th scope="row">${id}</th>
            <td>${title}</td>
            <td>${price}</td>
            </tr>`;


};

const renderGoodsList = (list) => {
  let goodsList = list.map(
          (item) =>  {
              return renderGoodsItem(item)
          }
      ).join('');

  $showcase.insertAdjacentHTML('beforeend', goodsList);
}

export default renderGoodsList