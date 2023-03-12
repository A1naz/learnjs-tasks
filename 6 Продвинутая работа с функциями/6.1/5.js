let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function revPrintList(list) {
  if (list.next) revPrintList(list.next);
  console.log(list.value);
}

revPrintList(list);
