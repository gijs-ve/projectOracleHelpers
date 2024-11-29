import { Resource, ResourceType } from '../types';

/**
 * Get a resource from an array of resources
 *
 * @param array An array of resources
 * @param type The type of resource to get
 */

const getFromArray = (array: Resource[], type: ResourceType) => {
    const result = array.find((resource) => resource.type === type);
    if (!result) {
        throw new Error('Resource not found');
    }
    return result;
};
/**
 * Get the current count of a resource based on the time provided
 *
 * @param resource A resource object
 * @param checkedTime The time in milliseconds
 */

const getCount = (resource: Resource, checkedTime: number) => {
    const resourceUpdateTime = new Date(resource.updatedAt).getTime();
    const minutesPassed = (checkedTime - resourceUpdateTime) / 60000;
    const newAmount = resource.amount + resource.perMinute * minutesPassed;
    const result = Math.round(newAmount * 10) / 10;
    if (!result || result < 0) {
        return 0;
    }
    return result;
};

/**
 * Check if a resource has a sufficient amount
 *
 * @param resource A resource object
 * @param checkedValue The value to check against the resource amount
 * @param checkedDate The time to compare against in milliseconds, defaults to Date.now()
 */

const isSufficient = ({
    resource,
    checkedValue,
    checkedTime = Date.now(),
}: {
    resource: Resource;
    checkedValue: number;
    checkedTime?: number;
}): boolean => {
    return getCount(resource, checkedTime) >= checkedValue;
};

export const resources = {
    getFromArray,
    getCount,
    isSufficient,
};
