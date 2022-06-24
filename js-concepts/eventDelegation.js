const grandparent = document.querySelector('#grandparent');
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

// grandparent.addEventListener('click', () => {
//   console.log('grandparent clicked');
// });

// parent.addEventListener('click', () => {
//   console.log('parent clicked');
// });

// child.addEventListener('click', () => {
//   console.log('child clicked');
// });

grandparent.addEventListener(
  'click',
  () => {
    console.log('grandparent clicked');
  },
  true
);

parent.addEventListener(
  'click',
  () => {
    console.log('parent clicked');
  },
  false
);

child.addEventListener(
  'click',
  () => {
    console.log('child clicked');
  },
  true
);
