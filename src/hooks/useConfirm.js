const uesConfirm = (message = "", cb, rejection) => {
  if(!cb && typeof cb !== "function"){
    return;
  }
  if(rejection && typeof rejection !== "function"){
    return;
  }

  const confirmAction = () => {
    if(confirm(message)){
      cb();
    }else{
      rejection();
    }
  }

  return confirmAction;
}