function calcular(){
    var t = document.getElementById('ttxt')
    var tab = document.getElementById('seltab')
    if (t.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(t.value)
        let c = 1
        tab.innerHTML = ``
        for(r=1;r<=10;r++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}