/*！
 * formatMoney
 * 将数字转换成货币格式
 * 参数【places】: Number 保留的小数位
 * 参数【symbol】:  String 符号
 * 参数【thousand】: 每三位的分隔符
 * 参数【decimal】：个位与小数的分隔符
 * Date：2017-03-27
 * Author：Yiu Young
 */
Number.prototype.formatMoney = function (places, symbol, thousand, decimal) {
        places = !isNaN(places = Math.abs(places)) ? places : 2;
        symbol = symbol !== undefined ? symbol : "$";
        thousand = thousand || ",";
        decimal = decimal || ".";
        var number = this,
            negative = number < 0 ? "-" : "",
            i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;
        return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
};