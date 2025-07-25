// Immedistely Invoked Function Expressions (IIFE)

// iife fun 
// sab se pehle first () than exicution () means call simple
(
    function iife (){
        //Name iife
        console.log("DB Connected")
    }
) ();


(
    () => {
        //Sample iife
        console.log("DB CONNECTED TWO")
    }
)()