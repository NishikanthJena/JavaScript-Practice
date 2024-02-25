// Write some code to check if someone is old enough to drive 

        let age = 15;

        if (age >= 18) {
            console.log(`person can ride`);
        }else if(age >= 16) {
            console.log(`Almost there`);
        } else {
            console.log(`person can not ride`);
        }


        // Logical Operator

        // AND Operator &&
        
        // console.log(true && true);
        // console.log(true && false);
        // console.log(false && false);
        // console.log(false && true );

        // OR operator ( || ) 
        // -> It checks Atleast one side is true, then displays true.

        // console.log(true || false);

        // NOT Operator (!)
        // -> `!` Exclamation is called Not Operator
        //  NOT operator only uses one boolean value abd it flips it into the opposite value.
        // if the value is true , the NOT Operator will flip it into false.

        // console.log(!true);     // false
        // console.log(!false);    // true

        // Truthy and Falsy Values

        // if(5) {      // here `5`-> it behaves just like true
        //     console.log(`truthy`);
        // }

        // if(0) {      // here `0`-> it behaves just like falsy
        //     console.log(`truthy`);
        // }

        // How to know the falsy values:
        // false, 0, empty strings(''), NaN, undefined, null
        // Any value not in the above list is truthy value
        
        // Example :

        // const cartQuantity = 1;

        // if (cartQuantity) {
        //     console.log(`cart has product`);
        // }

        // console.log(!0);    // True

        // console.log(`text` / 5);    // NaN

        // let name;
        // console.log(name);  // undefined - represents this variable doesn't have any value 

        // // you can not use variable with const
        // // if you really want to use undefined with const then

        // const variable = undefined;
        // console.log(variable);


        // Ternary Operator ( ? : ) 

        // Shortcut of if Stmt is ternary operator
        // if (true){
        //     console.log(`truthy`);
        // } else {
        //     console.log(`falsy`);
        // }

        // the above if stmt can be written in small 

        const result = true ? `truthy` : `falsy`
        console.log(result);

        // Shortcut of if Stmt is ternary operator

        // let result1 ;
        // if (1) {
        //     console.log(`truthy`);
        // } else {
        //     console.log(`falsy`);
        // }

        // the above if stmt can be written in small  
        
        // const result1 = 0 ? `truthy` : `falsy`
        // console.log(result1);

        // Guard operator &&

        // false && console.log(`hello`);

        // shortcut of if stmt using Guard operator && 

        // if(condition = 1){
        //     console.log(`hello`);
        // }

        // let msg;
        // if (condition = 1){
        //     msg = `hello`;
        //     console.log(msg);
        // }

        // shortcut of above code 

        // const msg1 = 8 && `hello`;
        // console.log(msg);

        // Default Operator ||

        // let currency;

        // if (condition){
        //     currency = `USD`;
        // }

        const currency = undefined || `USD`;
        console.log(currency);