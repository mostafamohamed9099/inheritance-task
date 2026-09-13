const totalPrice = 20;
const quantity = 30;
const total = totalPrice * quantity;



const isVisible = false;
const isEnable = true;
const isSubmit = isVisible && isEnable ;
const needAction = !isSubmit || total<=0;
console.log({ total , isSubmit , needAction});