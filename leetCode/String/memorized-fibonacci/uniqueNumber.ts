const uid = ():string => {
  const val1 :string = Date.now().toString();
  const val2 :string = Math.random().toString(36).substr(2);
  return val1+val2
};

console.log(uid)
