export const getHistoryLS = () => {
    return JSON.parse(localStorage.getItem('history')) || [];
}
export const filterByCategory = (data) => {
    const locations = [];
    const properties = [];

    data.forEach((e) => {
        if (e.category === 'ubicacion') {
            locations.push({
                id: e.id,
                type: e.type,
                factor: e.factor
            })
        } else {
            properties.push({
                id: e.id,
                type: e.type,
                factor: e.factor
            })
        }
    });
    return [locations,properties]
}