(function () {
  const div = document.querySelector('.injectit_customizeme')
  if (!div) { return }
  const pricesSpan = document.querySelectorAll('.oe_currency_value')
  const addToCartButton = document.querySelector('#add_to_cart')

  const src = div.innerText
  try {
    new URL(src)
  } catch (err) {
    return
  }

  Object.assign(div.style, { position: 'relative', display: 'block', width: '100%', height: '70vh' })
  div.innerHTML = ''

  const iframe = document.createElement('iframe')
  iframe.setAttribute('src', src)
  Object.assign(iframe.style, { width: '100%', height: '100%', margin: 0, padding: 0, border: 'none', outline: 'none' })
  div.appendChild(iframe)

  const getCustomization = () => iframe.contentWindow.postMessage('GET_CUSTOMIZATION', '*')
  addToCartButton.addEventListener('click', getCustomization)

  window.addEventListener('message', ({ data }) => {
    if (pricesSpan.length && data.type === 'SET_PRICE') {
      const price = data.price.toFixed(2)
      pricesSpan.forEach(span => span.innerText = price)
    } else if (data.type === 'PRODUCT_CUSTOMIZATION') {
      console.log(data.customization)
      console.log(data.price)
      // TODO JAK TO WYSŁAĆ DO ODOO
    }
  })
}())
