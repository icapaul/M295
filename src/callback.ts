export function bestelleKaffee(callback: ()=>void){
    console.log("Barista macht Kaffee...");
    setTimeout(()=>{
        callback()
    }, 1000)
}