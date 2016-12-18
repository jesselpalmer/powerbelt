export const _math_ = {
    isEven: num => {
        return num % 2 === 0;
    },

    isOdd: num => {
        return num % 2 !== 0;
    },

    isSquared: num => {
        let count = 0;

        while (count <= num / 2) {
            if ((count * count) === num) { 
                return true
            }
            
            count++;
        }

        return false;
    },

    cubed: num => {
        return num * num * num;
    },

    square: num => {
        return num * num;
    }
};