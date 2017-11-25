/*

* Loading and and runnig JS (from HTML )


 */

function get_three_randoms(j){
    console.log("מגרילה שלושה מספרים שלמים בין 0 ל-100 ומדפיסה את שלושתם ומי הגדול ביותר");
    var greater = 0;
    for(i = 0; i < j; i++ ) {
        var a = Math.round(Math.random() * 10);
        console.log(a);
        if(greater < a){
            greater = a;
        }
    }

    console.log("The greater number is "+ greater);
}
get_three_randoms(3);
/**************************************************************/
function GetTotalOfRandom (){
    console.log("מגרילה מספר בין 1,000 ל 9,999 ועד בכלל ומדפיסה את סכום ספרותיו");
    var MyRandom = 0;
    while (MyRandom < 1000) {
          MyRandom = Math.floor(Math.random() * 10000);
    }
    var MyNumber = MyRandom;
    var MyTotal = 0;
    console.log("My random = " + MyRandom);
    for (i = 0 ; i < 4 ; i++){

        MyTotal = MyTotal +  (1 * MyNumber.toString().substr(i,1));
        console.log(  MyNumber.toString().substr(i,1));
    }
    console.log("My total = " + MyTotal);
}
GetTotalOfRandom();
/********************************************************/

function Get_Greatest_Divider(a,b) {

   var c = 1;

    while (c > 0) {
        b--;
        c = a % b;

    }

    return b;
}

function find_common_divider(k,l){
    console.log("מקבלת שני מספרים כארגומנטים ומדפיסה את המספר הגדול ביותר אשר שניהם מתחלקים בו");
    var m =  Get_Greatest_Divider(Math.min(k,l),Math.min(k,l));

    while ( Math.max(k,l)%m > 0){
      m = Get_Greatest_Divider(Math.min(k,l),m-1);
    }
    return m;
}
console.log(find_common_divider(1112,112));

/***********************************************************************/
function get_the_smalleset_multiplyer(k,l){
    console.log("מקבלת שני מספרים ומדפיסה את המכפלה המשותפת הקטנה ביותר שלהם");
    var i = bignumber = smallnumber = 1;
    bignumber = Math.max(k,l);
    smallnumber = Math.min(k,l);
    while((bignumber * i) % smallnumber   != 0){
        i++;
    }
    console.log("Two numbers are: " + bignumber + "," + smallnumber + " Smalleset multiplyer is " + bignumber * i);

}
get_the_smalleset_multiplyer(33,6);