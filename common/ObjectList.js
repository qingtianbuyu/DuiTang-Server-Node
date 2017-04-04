/**
 * Created by yking on 2017/4/4.
 */

var ObjectList = function (total, next_start, object_list, more, limit) {
    this.total = total;
    this.next_start = next_start;
    this.object_list = object_list;
    this.more = more | 0;
    this.limit = limit | 0;
}
module.exports = ObjectList;