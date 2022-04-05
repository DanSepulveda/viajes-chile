// ENABLES BOOTSTRAP TOOLTIPS
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


// This function changes some elements classes to switch between dark and light mode
const changeMode = (mode) => {
    if (mode === 'dark') {
        $('body').removeClass('light')
        $('.icon').removeClass('fa-moon')
        $('.icon').addClass('fa-sun')
    } else {
        $('body').addClass('light')
        $('.icon').removeClass('fa-sun')
        $('.icon').addClass('fa-moon')
    }
}

// JQUERY CODE
$(function () {
    // FUNCTION 1 -- DARK MODE
    // Set localstorage item to remember user preference about dark/light mode
    let mode
    const storage = localStorage.getItem('mode')
    if (!storage) {
        localStorage.setItem('mode', 'dark')
        mode = 'dark'
    } else {
        mode = storage
    }

    changeMode(mode)

    $('.icon').click(function () {
        // Changes localstorage when users click on moon/sun icon
        mode = mode === 'dark' ? 'light' : 'dark'
        localStorage.setItem('mode', mode)

        changeMode(mode)
    })
    // FUNCTION 2 -- ALERT WHEN CLICKING FORM BUTTON
    $('.submit').click(function (e) {
        e.preventDefault()
        // Swal.fire('Any fool can use a computer')
        Swal.fire({
            icon: 'success',
            title: 'Bien',
            text: 'Correo enviado correctamente',
        })
    })
})