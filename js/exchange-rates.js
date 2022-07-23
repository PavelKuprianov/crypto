const exchangeRatesList = document.querySelector('.exchange-rates__list');

const socket = new WebSocket('ws://web-socket-current.herokuapp.com');

const renderExchange = (wrapper, data) => {
  const { from, to, rate, change } = JSON.parse(data);

  const li = document.createElement('li');
  li.classList.add('exchange-rates__item',
    change === 1 ? 'exchange-rates__item_up' : 'exchange-rates__item_down');

  const currency = document.createElement('span');
  const value = document.createElement('span');

  currency.classList.add('exchange-rates__currency');
  value.classList.add('exchange-rates__value');

  currency.textContent = `${from}/${to}`;
  value.textContent = `${rate}`;

  li.append(currency, value);
  wrapper.prepend(li);

  if (wrapper.children.length > 4) {
    wrapper.children[4].remove();
  }
}

socket.addEventListener('message', (event) => {
  renderExchange(exchangeRatesList, event.data)
});

socket.addEventListener('error', err => {
  console.log(err)
})