function action(id, value){
  console.log(`id:${id} val:${value}`)
}

function Step(callBack, id, value) {
  callBack(id, value);
}

Step(action, 1, "Alexander");
Step((id, value)=>{console.log(`id:${id} val:${value}`)}, 2, "Maria")
