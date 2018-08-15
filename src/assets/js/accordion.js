import $ from 'jquery'

const active = 'is-open';
const accordionBlock = '.accordion--block';
const accordionHead = '.accordion--head';
const accordionBody = '.accordion--body';

$(accordionHead).on('click', function () {
  const $this = $(this);

  $this
    .toggleClass(active)
    .closest(accordionBlock)
    .toggleClass(active)
    .siblings()
    .removeClass(active)
    .find(accordionHead)
    .removeClass(active);

  $this
    .siblings(accordionBody)
    .slideToggle()
    .closest(accordionBlock)
    .siblings()
    .find(accordionBody)
    .slideUp();
});
