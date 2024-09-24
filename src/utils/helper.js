export function filterData(searchText, allRestaurants) {
    return allRestaurants.filter((restaurant) => {
        const nameMatch = restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase());
        const descriptionMatch = restaurant?.info?.description?.toLowerCase().includes(searchText.toLowerCase());
        return nameMatch || descriptionMatch;
    });
}