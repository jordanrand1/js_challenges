var alphaBtn = $('#alphaBtn')

$('#alphaBtn').click(function(){
  input = $('#alphaText').val().toLowerCase()
  output = input.split('').sort().join('')
  console.log(output)
  $('#output').text(output)
})

$('#repeatBtn').click(function(){
  count = parseInt($('#repeatNum').val())
  text = $('#repeatText').val()
  output = []
  for (i = 0; i < count; i++){
    output.push(text)
  }
  output = output.join('')
  $('#output').text(output)
})