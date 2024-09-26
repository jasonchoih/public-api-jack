export async function asfetch(){
    let _r = {};
    try {
        let _g = await fetch('https://k.public-apis.app/pa').then(res => res.text());
        let _gg = _g.split('-');
        _r = {
            url:  _gg[0]+"-"+_gg[1],
            sign: _gg[2],
            key: new Uint16Array(_gg[3].split('').map(Number))
        }
    } catch (error) {
        
    }
    // 
    return _r;
}