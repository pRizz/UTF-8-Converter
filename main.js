/**
 * Created by Peter Ryszkiewicz (https://github.com/pRizz) on 9/28/2017.
 * https://github.com/pRizz/Unicode-Converter
 */

$(() => {
    const $escapedInput = $('#escapedInput')
    $escapedInput.on('input', () => {
        displayResults(convertAllEscapes($escapedInput.val(), 'none'), $escapedInput[0].id)
    })
})