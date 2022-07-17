"use strict";

$(document).ready(function () {
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

    $('form').on('submit', (element) => {
        element.preventDefault()

        if ($('#username').val() === 'David123') {
            $('form small.text-danger').text('')
            $('form small.text-success').text("Welcome")
        } else {
            $('form small.text-success').text('')
            $('form small.text-danger').text("Invalid username")
        }
    })

    const cols = $('table th').length
    $('table').html("<tr><td>2</td><td>InServeOfGod</td><td>*****</td></tr>")
})
