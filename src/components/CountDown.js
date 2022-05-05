const count = document.createElement('div');
count.id = 'count';
count.classList.add('container');

const head = document.createElement('h1');
head.id = 'head';
head.innerText = 'Countdown to Your Birthday';

const countDownList = ['day', 'hour', 'minute', 'second'];

const unorderedList = document.createElement('ul');
countDownList.forEach(item => {
  const listItem = document.createElement('li');
  const span = document.createElement('span');
  span.id = item;
  
  listItem.append(span, `${item}s`);
  unorderedList.append(listItem);
});

const CountDown = () => {
  count.style.visibility = 'visible';
  count.append(head, unorderedList);
  return count;
};

export default CountDown;
