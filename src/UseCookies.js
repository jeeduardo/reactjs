export const useCookies = () => {
    const setCookie = (name, value) => {
        document.cookie = `${name}=${value}`;
    }
    
    const getCookie = (name) => {
        const cookies = document.cookie.split('; ');
        let value = '';

        cookies.forEach(cookie => {
            if (cookie.startsWith(`${name}=`)) {
                value = cookie.replace(`${name}=`, '');
            }
        });

        return value;
    }
    
    return [setCookie, getCookie];
};
