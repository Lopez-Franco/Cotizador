export const getHistoryLS = () =>{
    return JSON.parse(localStorage.getItem('history')) || [];
}
