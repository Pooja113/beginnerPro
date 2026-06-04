
//3751. Total Waviness of Numbers in Range I
const getWaviness = (x) => {
        const s = x.toString();
        let waviness = 0;

        for (let i = 1; i < s.length - 1; i++) {
            const isPeak = s[i] > s[i - 1] && s[i] > s[i + 1];
            const isValley = s[i] < s[i - 1] && s[i] < s[i + 1];
            if (isPeak || isValley) {
                waviness++;
            }
        }

        return waviness;
    };