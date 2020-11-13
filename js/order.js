let getValue = (key) => document.getElementById(key).value;
let setValue = (key, val) => document.getElementById(key).value = val;
setValue('goodsNum', 1)
function submit(e) {
    let data = {
        goodsName: getValue('goodsName'),
        modelName: getValue('modelName'),
        specifications: getValue('specifications'),
        goodsNum: getValue('goodsNum'),
        goodsPrice: getValue('goodsPrice'),
        name: getValue('name'),
        phone: getValue('phone'),
        takeName: getValue('takeName'),
        takePhone: getValue('takePhone'),
        takeAddress: getValue('takeAddress'),
    }
    console.log(data)
    // axios.post('', '', '')
}