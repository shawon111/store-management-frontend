export const generateSellID = ()=> {
    const prefix = "USI";
    const minLength = 10;
    const maxLength = 11;
    const randomPartLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + (minLength - prefix.length);
    
    let randomPart = '';
    for (let i = 0; i < randomPartLength; i++) {
        randomPart += Math.floor(Math.random() * 10).toString();
    }
    
    return prefix + randomPart;
}
