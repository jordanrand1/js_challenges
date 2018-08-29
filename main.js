var alphaBtn = $('#alphabetizeBtn')

function alphabetizeString(e){
  alphaText = $('#alphabetizeText').text()
  alphaText.split('').sort().join('')
  alphaOutput = $('#alphabetizeOutput')
  alphaOutput.text(alphaText)
  console.log(alphaText)
}

$(alphaBtn).on('click', alphabetizeString())