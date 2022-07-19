"use strict"

$(document).ready(function () {
    /*
    * some useful functions
    * */

    $('#paragraph').hide(0).addClass('text-secondary').fadeIn(1000)
    // $('#list').find('li').addClass('text-danger')
    // $('#list').children('li').addClass('text-danger')
    // $('#list').parent().addClass('text-danger')
    $('#list li:first-child').next().addClass('active')
    // $('#list li:last-child').prev().addClass('text-danger')
    // $('#list li').siblings().addClass('text-danger')
    // $('#list li').first().addClass('text-danger')
    // $('#list li').last().addClass('text-danger')
    // alert($('#form').text())
    // alert($('#form').html())
    // alert($('#form').val())

    /*
    * reading & writing values from elements
    * */

    $('#firstForm').on('submit', (element) => {
        element.preventDefault()

        if ($('#username').val() === 'David123') {
            $('#firstForm small.text-danger').text('')
            $('#firstForm small.text-success').text("Welcome")
        } else {
            $('#firstForm small.text-success').text('')
            $('#firstForm small.text-danger').text("Invalid username")
        }
    })

    /*
    * adding & inserting elements
    * */

    // const cols = $('table th').length
    $('table').append('<tr><td>2</td><td>InServeOfGod</td><td>*****</td></tr>')
    // append, prepend, after, before

    /*
    * removing elements
    * */

    $('#removeBtn').on('click', () => {
        $('#removeBtn').remove()
    })

    /*
    * modify the attributes
    * attr, prop
    * */

    const google = $('#google')
    google.attr('href', "https://www.google.com").removeAttr('target')

    if (!google.hasClass('link-danger')) {
        google.addClass('link-danger')
    }

    /*
    * clone the elements
    * */

    $('#cloneBtn').click(() => {
        $('.cloneImg').clone().insertAfter('.cloneImg')
    })

    /*
    * iterating with each function
    * */

    $('#list li').each((index, value) => {
        $(value).addClass('text-black')
    })

    /*
    * filtering elements : eq, filter, has, not
    * */

    // $('#filters a').eq(2).removeClass('link-info').addClass('link-danger')
    // $('#filters a').filter('.link-primary').removeClass('link-primary').addClass('link-danger')
    // $('#filters a').not('.link-primary').removeAttr('class').addClass('link-secondary')
    if ($('#filters').has('a')) {
        $('#filters a').each((index, value) => {
            $(value).attr('target', '_blank')
        })
    }

    /*
    * data API
    * */

    // todo : research it

    /*
    * form validation
    * */

    $('#secondForm').on('submit', (element) => {
        element.preventDefault()

        if (!$("#secondForm input[type='radio']").is(':checked')) {
            alert('please select any gender')
        }
    })
})
