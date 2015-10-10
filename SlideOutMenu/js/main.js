$(' a[href="#spirits"]').on('click', function (){
  console.log('tracer 1');
  $(' section#spirits').toggleClass('active');
});

$(' a[href="#beverages"]').on('click', function (){
  console.log('tracer 2');
  $(' section#beverages').toggleClass('active');
});

$(' a[href="#liquors"]').on('click', function (){
  console.log('tracer 3');
  $(' section#liquors').toggleClass('active');
});

$(' a[href="#mission"]').on('click', function (){
  console.log('tracer 4');
  $(' section#mission').toggleClass('active');
});

$(' a[href="#contact"]').on('click', function (){
  console.log('tracer 5');
  $(' section#contact').toggleClass('active');
});
