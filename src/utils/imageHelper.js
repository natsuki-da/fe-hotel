export const getImageUrl = (imageUrl) =>
    `${import.meta.env.BASE_URL}images/${imageUrl}`;

export const getIconUrl = (imageName) =>
    `${import.meta.env.BASE_URL}icons/${imageName}`;