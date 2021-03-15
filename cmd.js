

function myfunction(s){ 
        var t=document.getElementsByClassName("textfield")[0];
        var s1=t.value;
        if(s1=="0"){
            t.value=s
        }
        else{
        t.value+=s;
        }
}
function point(s){
    var t=document.getElementsByClassName("textfield")[0];
     s1=t.value;
    if(!s1.includes('.')){
        t.value+=".";
    }
}
function calculate(s){
    var d=document.getElementsByClassName("desk")[0];
    var t=document.getElementsByClassName("textfield")[0];
    s1=d.value;
    s2=t.value;
    d.style.visibility="visible";
    if(s1.includes('+')){
        s1=s1.slice(0,s1.length-1);
        t.value="0";
        d.value=Number(s1)+Number(s2);
    }
    else{
        if(s1.includes('-')){
            s1=s1.slice(0,s1.length-1);
            t.value="0";
            d.value=Number(s1)-Number(s2);
        }
        else{
            if(s1.includes('*')){
                s1=s1.slice(0,s1.length-1);
                t.value="0";
                d.value=Number(s1)*Number(s2);
            }
            else{
                if(s1.includes('/')){
                    s1=s1.slice(0,s1.length-1);
                    t.value="0";
                    d.value=Number(s1)/Number(s2);
                }
                else{
                    t.value="0";
                    d.value=s2;

                }
                
            }
        }}
        if(s=="="){
            t.value=d.value;
            d.value="0";
            d.style.visibility="Hidden"
        }
        else{
            d.style.visibility="visible";
            d.value+=s
        
    }
}