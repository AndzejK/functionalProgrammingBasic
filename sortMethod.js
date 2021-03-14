/*
    #1 return is <0 => x comes first
    #2 return is >0 => y comes first
    #3 return is 0 => nothing will be changed=
 */

function alphabeticalOrder(arr) {
   return console.log(arr.sort());
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

  const producuts = [
    {brand:'dell',
    price:1400
    },
    {brand:'mac',
    price:2400
    },
    {brand:'acer',
    price:1000
    },
    {brand:'samsung',
    price:1440
    }
  ]

  producuts.sort((x,y)=>x.price-y.price);
  console.log(producuts);