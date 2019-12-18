/**
 * This is a util class
 * it calls the Currency formater in the mai app
 */

export default {
    formatCurrency: function (num) {
        return 'RM' + Number(num.toFixed(1)).toLocaleString() + ' ';
    }
}