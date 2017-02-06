(function() {
    var reg_a = /#.+?$/,
    tmp_location_href = location.href;
    var last_str, catch_arr = tmp_location_href.match(reg_a);
    if (catch_arr) {
        last_str = catch_arr[0];
        tmp_location_href = tmp_location_href.replace(reg_a, '');
    } else {
        last_str = '';
    }
    if (tmp_location_href.lastIndexOf('l=en-us') > -1) {
        tmp_location_href = tmp_location_href.replace(/l=en-us/g, 'l=zh-cn');
    } else if (tmp_location_href.lastIndexOf('l=zh-cn') > -1) {
        tmp_location_href = tmp_location_href.replace(/l=zh-cn/g, 'l=en-us');
    } else {
        tmp_location_href += '?&l=zh-cn';
    }
    location.href = tmp_location_href + last_str;
})();