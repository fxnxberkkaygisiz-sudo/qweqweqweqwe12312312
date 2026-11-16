// Mobile Select Menu
const selectMenu = document.querySelector('.uk-select-dropdown');

if (selectMenu) {
    selectMenu.addEventListener('change', (e) => {
        const selectedValue = e.target.value;
        if (selectedValue) {
            window.location.href = selectedValue;
        }
    });
}

// Mobile Select Filter
const selectFilter = document.querySelector('.uk-select-filter');

if (selectFilter) {
    selectFilter.addEventListener('change', (e) => {
        const selectedValue = e.target.value;
        const allItems = document.querySelectorAll('.js-filter div[data-cat]');

        allItems.forEach(item => {
            if (selectedValue && item.getAttribute('data-cat') !== selectedValue) {
                item.style.display = 'none';
            } else {
                item.style.display = 'block';
            }
        });

        if (!selectedValue) {
            allItems.forEach(item => {
                item.style.display = 'block';
            });
        }
    });
}

$(function () {
    // Mask
    $('.phone-mask').mask('(500) 000 00 00');

    // Textarea Letter Counter
    $('.character-counter').on('input', function () {
        const maxLength = $(this).attr('maxlength');
        const currentLength = $(this).val().length;
        const remainingLength = maxLength - currentLength;

        const counter = $(this).next('.counter');
        counter.html(`<span class="uk-text-emphasis">${currentLength}</span>/${maxLength}`);

        if (remainingLength <= 0) {
            counter.addClass('uk-text-emphasis');
        } else {
            counter.removeClass('uk-text-emphasis');
        }
    });

    $('.show-more').on('click', function (event) {
        event.preventDefault();

        const targetId = $(this).data('target');
        const $content = $('#' + targetId);
        const lessText = $(this).data('less');
        const moreText = $(this).data('more');

        if ($content.hasClass('expanded')) {
            $content.removeClass('expanded').css('display', '-webkit-box');
            $(this).text(moreText);
        } else {
            $content.addClass('expanded').css('display', 'block');
            $(this).text(lessText);
        }
    });
});
