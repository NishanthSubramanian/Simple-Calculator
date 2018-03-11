var live ="0";
var memory ="0";
var operation =0;
var maxlength =30;
function AddDigit(dig)
{
    if(live.length > maxlength)
        live="too long";
    else{
        if((eval(live)==0)&&(live.indexOf('.')==-1))
            live = dig;
        else
            live+=dig;    
        }
    document.calculator.display.value=live;
}
function Dot()
{
    if(live.length==0)
        live="0.";
    else if((live.indexOf('.')==-1)&&(live.indexOf('e')==-1))
        live+=".";
    document.calculator.display.value=live;
}
function Clear()
{
        live="0";
        document.calculator.display.value=live;    
}
function AllClear()
{
    live="0";
    memory="0";
    operation =0;
  document.calculator.display.value=live;
}
function Operate(x)
{
    if(operation!=0)
        Calculate();
    if(x.indexOf("*")>-1)
        operation =1;
    if(x.indexOf("/")>-1)
        operation =2;
    if(x.indexOf("+")>-1)
        operation =3;
    if(x.indexOf("-")>-1)
        operation =4;
    memory=live;
    live="";
      document.calculator.display.value=live;
}
function Calculate()
{
    if(operation==1)
        live=eval(memory)*eval(live);
     if(operation==2)
         {
             if(eval(live)==0)
                 live="No dividing by Zero"
             else
                 live=eval(memory)/eval(live);
         }
    if(operation==3)
        live=eval(memory)+eval(live);
    if(operation==4)
        live=eval(memory)-eval(live);
    memory="0";
    operation =0;
    live+="";
          document.calculator.display.value=live;
}
function DoExponent()
 {
  if ( live.indexOf("e") == -1 )
       { live = live + "e0";
         document.calculator.display.value = live;
       };
 }
  function PlusMinus()
 {
  if  (live.indexOf("e") != -1)
    { var epos = live.indexOf("e-");
      if (epos != -1)
         { live = live.substring(0,1+epos) + live.substring(2+epos); //clip out -ve exponent 
         } else
         { epos = live.indexOf("e");
           live = live.substring(0,1+epos) + "-" + live.substring(1+epos); //insert -ve exponent
         };
    } else
    {  if ( live.indexOf("-") == 0 )
         { live = live.substring(1);
         } else
         { live = "-" + live;
         };
       if (    (eval(live) == 0)
            && (live.indexOf(".") == -1 )
          ) { live = "0"; };
    };
  document.Calculator.Display.value = live;
 }
