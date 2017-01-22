// var xxxb = 'this-xxx';
// alert(xxxb + '  ' + /*typeof*/  $.fn.jquery );
// console.log('[%s]-->[%s]', xxxb, typeof chrome.tb);
(function () {
    // return;
    var dom_layers = top.document.body.querySelectorAll('.a_dom_layer');
    if (dom_layers.length > 0) {
        top.document.body.removeChild(dom_layers[0]);
        return;
    }
    var div_dom = top.document.createElement('div');
    div_dom.innerHTML = '<textarea style="width:100%;height:100%">' + /*$.fn.jquery +*/ '</textarea>';
    div_dom.style.position = 'fixed';
    div_dom.style.left = '40%';
    div_dom.style.top = '10px';
    div_dom.style.height = '200px';
    div_dom.style.width = '200px';
    div_dom.style.backgroundColor = 'white';
    div_dom.style.border = '2px solid blue';
    div_dom.style.zIndex = '999999999';
    div_dom.className = 'a_dom_layer';
    top.document.body.appendChild(div_dom);
    var textarea_dom = div_dom.children[0];
    textarea_dom.focus();
    div_dom.onkeydown = function (event) {
        if (event.keyCode == 27) { //Esc键
            var will_del_dom = top.document.body.querySelectorAll('.a_dom_layer')[0];
            top.document.body.removeChild(will_del_dom);
        } else if (event.keyCode == 13) {
            if (event.ctrlKey || event.altKey || event.shiftKey) {
                var base_arr = textarea_dom.value.split(/\D/);
                var sum = 0, true_arr = [];
                base_arr.forEach(function(each_one){
                    if (each_one != '') {
                        true_arr.push(each_one)
                        sum += Number(each_one);
                    }
                });
                console.log('how_to_sum:[%s]\ntotal:[%s]', true_arr.join('+'), sum);
            }
        }
    }

    // var jq = top.document.createElement('script');
    // jq.src = 'http://localhost/jq.1.10.js';
    // top.document.body.appendChild(jq);

})();