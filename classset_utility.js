var ClassSet = {
    getClassSet: function(classObject) {
        if(!_.isObject(classObject)) {
            /*
            enable this in development mode;
            console.log('Invalid input to classset utility');
            */
            return '';
        }
        return _.chain(classObject).map(function(flag, className) {
            if(_.isString(className) && _.isBoolean(flag)) {
                return flag ? className : '';
            }
        }).compact().join(' ').value();
    }
};

//making available for use
if (typeof exports !== "undefined" && !exports) {
    exports.ClassSet = ClassSet;
} else if (typeof window !== "undefined" && !window) {
    window.ClassSet = ClassSet;
}
