var app = {
  view: 'catalog',
  catalog: {
    items: [
      {
        itemId: 1,
        brand: 'Ludwig',
        name: 'Black Beauty',
        price: 749.99,
        description: 'A snare drum for people with too many drumsticks.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'United States',
        imageUrl: 'https://goo.gl/ubY0QA'
      },
      {
        itemId: 2,
        name: 'Darbuka',
        brand: 'Vatan',
        price: 79.99,
        description: 'A hand drum for people who like belly dancing.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Turkey',
        imageUrl: 'https://goo.gl/Q7X6VB'
      },
      {
        itemId: 3,
        name: 'Djembe',
        brand: 'Remo',
        price: 49.99,
        description: 'A hand drum for people with dreadlocks.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'West Africa',
        imageUrl: 'https://goo.gl/iKtU8x'
      },
      {
        itemId: 4,
        name: 'Hi-Hats',
        brand: 'Paiste',
        price: 400,
        description: 'A set of hats for people who spare no expense.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Switzerland',
        imageUrl: 'https://goo.gl/LV9l8O'
      },
      {
        itemId: 5,
        name: 'Giant Step',
        brand: 'Sonor',
        price: 599,
        description: 'A pedal for metal drummers with only one foot.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Germany',
        imageUrl: 'https://goo.gl/zsFo1q'
      },
      {
        itemId: 6,
        name: 'Travis Barker Signature',
        brand: 'Zildjian',
        price: 24.99,
        description: 'A set of drumsticks from the 90s.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'United States',
        imageUrl: 'https://goo.gl/Cro3tL'
      },
      {
        itemId: 7,
        name: 'Bodhran',
        brand: 'Meinl',
        price: 129.99,
        description: 'A frame drum for people who like to jig.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Ireland',
        imageUrl: 'https://goo.gl/YNb74O'
      },
      {
        itemId: 8,
        name: 'TR-09',
        brand: 'Roland',
        price: 399,
        description: 'A drum machine for people with no desk space.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Japan',
        imageUrl: 'https://goo.gl/gJYUxz'
      }
    ]
  },
  details: {
    item: null
  },
  cart: {
    items: []
  }
}

function findItem(id, catalog) {
  return catalog.items.filter(item => item.itemId === id)[0]
}

function renderItemDetails(item) {
  return createElement('div', { class: 'card details-card' }, [
    createElement('img', { class: 'card-img-top details-img', src: item.imageUrl }, []),
    createElement('div', { class: 'card-body' }, [
      createElement('span', { class: 'drum-pretext' }, ['the ',
        createElement('i', { class: 'drum-brand' }, [item.brand, ' ']),
        createElement('span', { class: 'h6 drum-name' }, [item.name])
      ]),
      createElement('p', { class: 'card-subtitle description' }, [item.description]),
      createElement('p', { class: 'card-text details' }, [item.details]),
      createElement('i', { class: 'card-text origin' }, ['Origin: ' + item.origin]),
      createElement('button', { class: 'add-to-cart' }, ['Add to Cart - $' + item.price.toFixed(2)]),
      createElement('button', { class: 'back-to-catalog' }, ['Back to Catalog'])
    ])
  ])
}

function renderItem(item) {
  return createElement('div', { class: 'card catalog-card', 'data-item-id': item.itemId }, [
    createElement('img', { class: 'card-img-top', src: item.imageUrl }, []),
    createElement('div', { class: 'card-body' }, [
      createElement('span', { class: 'drum-pretext' }, ['the ',
        createElement('i', { class: 'drum-brand' }, [item.brand, ' ']),
        createElement('span', { class: 'h6 drum-name' }, [item.name])
      ]),
      createElement('footer', { class: 'blockquote-footer' }, ['$' + item.price.toFixed(2)])
    ])
  ])
}

function renderCatalog(catalog) {
  return createElement('div', null, [
    createElement('h1', null, ['Jamazon']),
    createElement('div', { class: 'container' }, [
      createElement('div', { class: 'row' }, catalog.items.map(item =>
        createElement('div', { class: 'col-3' }, [ renderItem(item) ]))
      )
    ])
  ])
}

function renderCartText(cart) {
  return createElement('p', { class: 'cart-text' }, ['Cart (' + cart.items.length + ')'])
}

function renderCartItem(item) {
  return createElement('div', { class: 'cart-item' }, [
    createElement('img', { class: 'cart-img rounded float-left', src: item.imageUrl }, []),
    createElement('span', { class: 'cart-item-title' }, [
      createElement('span', { class: 'text-muted cart-brand' }, [item.brand]),
      createElement('span', { class: 'cart-item-name' }, [item.name])
    ]),
    createElement('span', { class: 'cart-item-price' }, ['$' + item.price.toFixed(2)])
  ])
}

function renderCart(cart) {
  return createElement('div', { class: 'cart-container' }, [
    createElement('h1', {}, ['Your Cart:']),
    createElement('div', {}, app.cart.items.map(item => renderCartItem(item))),
    createElement('span', { class: 'cart-count' }, ['Count: ' + app.cart.items.length]),
    createElement('span', {}, ['Total: ',
      createElement('span', { class: 'font-weight-bold' }, ['$' + app.cart.items.reduce((a, b) => a + b.price, 0).toFixed(2)])
    ]),
    createElement('button', { id: 'cart-to-catalog', class: 'back-to-catalog' }, ['Back to Catalog']),
    createElement('button', { class: 'cart-to-checkout' }, ['Checkout'])
  ])
}

function renderCheckout(cart) {
  return createElement('div', { class: 'cart-container' }, [
    createElement('h1', {}, ['Checkout:']),
    createElement('div', { class: 'container' }, [
      createElement('div', { class: 'row' }, [
        createElement('p', { class: 'col-4 text-left' }, ['Name:']),
        createElement('input', { class: 'col-8 checkout-input', type: 'text' }, []),
        createElement('p', { class: 'col-4 text-left' }, ['Address:']),
        createElement('input', { class: 'col-8 checkout-input', type: 'text' }, []),
        createElement('p', { class: 'col-4 text-left' }, ['Credit Card:']),
        createElement('input', { class: 'col-8 checkout-input', type: 'number' }, [])
      ])
    ]),
    createElement('p', { class: 'checkout-count float-right' }, ['Count: ' + cart.items.length]),
    createElement('p', { class: 'float-right' }, ['Total: ',
      createElement('span', { class: 'font-weight-bold' }, ['$' + cart.items.reduce((a, b) => a + b.price, 0).toFixed(2)])
    ]),
    createElement('button', { class: 'pay' }, ['Pay'])
  ])
}

function hideViews(viewToDisplay) {
  var $views = document.querySelectorAll('[data-view]')
  $views.forEach(view => {
    if (view.getAttribute('data-view') !== viewToDisplay) {
      view.classList.add('hidden')
    }
    else {
      view.classList.remove('hidden')
    }
  })
}

function renderApp(app, container) {
  hideViews(app.view)
  container.innerHTML = ''
  if (app.view === 'catalog') {
    container.appendChild(renderCatalog(app.catalog))
  }
  if (app.view === 'details') {
    container.appendChild(renderItemDetails(app.details.item))
  }
  if (app.view === 'cart') {
    container.appendChild(renderCart(app.cart.items))
  }
  if (app.view === 'checkout') {
    container.appendChild(renderCheckout(app.cart))
  }
  var $cartButton = document.querySelector('#cart')
  if (app.view === 'cart' || app.view === 'checkout') {
    $cartButton.classList.add('hidden')
  }
  else {
    $cartButton.classList.remove('hidden')
    $cartButton.innerHTML = ''
    $cartButton.appendChild(renderCartText(app.cart))
  }
}

function createElement(tagName, attributes, children) {
  var $element = document.createElement(tagName)

  for (var property in attributes) {
    $element.setAttribute(property, attributes[property])
  }

  children.forEach(child => {
    if (child instanceof Node === false) {
      $element.appendChild(document.createTextNode(child))
    }
    else {
      $element.appendChild(child)
    }
  })

  return $element
}

var $catalog = document.body.querySelector('[data-view="catalog"]')
var $details = document.body.querySelector('[data-view="details"]')

$catalog.addEventListener('click', e => {
  var item = e.target.closest('.catalog-card')
  if (item) {
    var id = parseInt(item.getAttribute('data-item-id'))
    app.details.item = findItem(id, app.catalog)
    app.view = 'details'
    renderApp(app, $details)
  }
})

$details.addEventListener('click', e => {
  if (e.target === document.querySelector('.add-to-cart')) {
    app.cart.items.push(app.details.item)
    renderApp(app, $details)
  }
  if (e.target === document.querySelector('.back-to-catalog')) {
    app.view = 'catalog'
    renderApp(app, $catalog)
  }
})

var $cartButton = document.querySelector('#cart')
var $cart = document.querySelector('[data-view="cart"]')

$cartButton.addEventListener('click', () => {
  if (app.cart.items.length > 0) {
    app.view = 'cart'
    renderApp(app, $cart)
  }
})

$cart.addEventListener('click', e => {
  if (e.target === document.querySelector('#cart-to-catalog')) {
    app.view = 'catalog'
    renderApp(app, $catalog)
  }
  if (e.target === document.querySelector('.cart-to-checkout')) {
    app.view = 'checkout'
    var $checkout = document.querySelector('[data-view="checkout"]')
    renderApp(app, $checkout)
  }
})

renderApp(app, $catalog)
