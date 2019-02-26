// use function to update the state in an immutable way
export const updatedObject = (oldObject, newProperties) => {
    return {
        ...oldObject,
        ...newProperties
    };
};
