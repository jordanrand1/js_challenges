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

$('#chopBtn').click(function(){
  number = parseInt($('#chopNum').val())
  text = $('#chopText').val().split(' ').join('')
  tmp = []
  for (i = 0; i < text.length; i += number){
    tmp.push(text.slice(i,i+number))
  }
  output = tmp.join(' ')
  $('#output').text(output)
})