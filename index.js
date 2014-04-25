
module.exports = naturals;

function naturals*(start) {
  start = start == null? 0 : start;
  while(1) yield start++;
}
