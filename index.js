const names=[];
function add(){
    const a=prompt("enter name to add!").trim();
    if(a.length !== 0){
        console.clear();
        names.push(a);
        console.log(names);
        document.getElementById("result").innerHTML = `${a} is added!`;
    }else{
        document.getElementById("result").innerHTML = `nothing is added!`;
    }
}
function replace(){
    const x=prompt("enter name to replace!").trim();
    const y=prompt("enter name to replace with!").trim();
    if(x.length !== 0 || y.length !== 0){
        console.clear();
        var r=names.indexOf(x);
        names.splice(r,1,y);
        console.log(names);
        document.getElementById("result").innerHTML = `${x} is replaced by ${y}!`;
    }else{
        document.getElementById("result").innerHTML = `nothing is replaced!`;
    }
}
function del(){
    const d=prompt("which name do you want to delete?").trim();
    if(d.length !== 0){
        console.clear();
        var o=names.indexOf(d);
        names.splice(o,1);
        console.log(names);
        document.getElementById("result").innerHTML = `${d} is deleted!`;
    }else{
        document.getElementById("result").innerHTML = `nothing is deleted!`;
    }
}