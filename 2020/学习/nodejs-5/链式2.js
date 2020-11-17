module.exports = {
    wh: '',
    where: function(wh) {
        this.wh = wh;
        return this;

    },

    select: function() {
        if (this.wh == undefined) {
            var sql = 'select * from xx';
        } else {
            var sql = 'select * from xx where' + this.wh;
        }
        this.wh = undefined;
        // 重置信息，不影响下一次条件判断
    }

}