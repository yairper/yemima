$(function () {
  $('.people').click(function (e) {
    selectPeopleCount(this)
  })

  selectPeopleCount('.people:nth-child(2)')

  function selectPeopleCount (el) {
    $('.people').removeClass('people-active')
    $(el).toggleClass('people-active')
    setPrices()
  }

  $('.category').click(function (e) {
    var $this = $(this)
    e.stopPropagation()
    $this.toggleClass('selected')
    setPrices()

    if ($this.data('type') == 'workshop') {
      var isSelected = $this.hasClass('selected')
      $('[data-type="dj"], [data-type="photo"]').toggleClass('price-included', isSelected)
    }
  })

  function setPrices () {
    var peopleCount = $('.people-active').data('value')
    var prices = alg[peopleCount]
    var totalPrice = { min: 0, max: 0 }

    Object.keys(prices).forEach(function (type) {
      var currentPrice = prices[type]
      var price = getPrice(currentPrice)
      setTypePrice(type, price)

      if (isPriceSelected(type)) {
        if (price.min) {
          totalPrice.min += price.min
          totalPrice.max += price.max
        }
        else {
          totalPrice.min += price
          totalPrice.max += price
        }
      }
    })

    if (totalPrice.max == 0)
      $('.total-price').hide()
    else {
      $('.total-price').show()

      if (totalPrice.min == totalPrice.max)
        $('.total-price .price').text(totalPrice.min + '₪')
      else
        $('.total-price .price').text(totalPrice.min + '₪' + '-' + totalPrice.max + '₪')
    }
  }

  function setTypePrice (type, price) {
    var $price = $('.category[data-type="'+type+'"] .price')
    var newPriceText = formatPrice(price)

    var COLOR_TRANSITION_MS = 300

    if ($price.text() != newPriceText) {
      $price.css({
        'transition': 'color '+COLOR_TRANSITION_MS+'ms',
        'color': 'transparent'
      })

      setTimeout(function () {
        $price.text(newPriceText)
        $price.css('color', '')

        setTimeout(function () {
          $price.css('transition', '')
        }, COLOR_TRANSITION_MS)
      }, COLOR_TRANSITION_MS)
    }
  }

  function formatPrice (price) {
    if (price.min)
      return 'כ-' + (price.min + (price.max - price.min) / 2) + '₪'
    else
      return price + '₪'
  }

  function getPrice (price) {
    var result

    if (price.withoutWorkshop) {
      if (isWorkshopSelected())
        result = 0
      else
        result = price.withoutWorkshop
    }
    else
      result = price

    return result
  }

  function isWorkshopSelected () {
    return isPriceSelected('workshop')
  }

  function isPriceSelected (type) {
    return $('.selected[data-type="'+type+'"]').length
  }

  $('.category-info').click(function (e) {
    e.stopPropagation()

    var category = this.parentElement.dataset.type

    $('.info-modal').show()
    $('.info-modal > main[data-type="'+category+'"]').show()
  })

  $('.info-modal-close').click(function () {
    $('.info-modal').hide()
    $('.info-modal > main').hide()
  })
})
