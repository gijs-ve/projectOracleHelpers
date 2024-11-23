import { Resource } from '../types';
/**
 *
 * @param resource A resource object
 * @param now The time in milliseconds
 */

const getResourceCount = (resource: Resource, now: number) => {
    const resourceUpdateTime = new Date(resource.updatedAt).getTime();
    const minutesPassed = (now - resourceUpdateTime) / 60000;
    const newAmount = resource.amount + resource.perMinute * minutesPassed;
    return Math.round(newAmount * 10) / 10;
};

/**
 *
 * @param resource A resource object
 * @param checkedValue The value to check against the resource amount
 * @param checkedDate The time to compare against in milliseconds, defaults to Date.now()
 */

const resourcesAreSufficient = ({
    resource,
    checkedValue,
    checkedDate = Date.now(),
}: {
    resource: Resource;
    checkedValue: number;
    checkedDate?: number;
}): boolean => {
    return getResourceCount(resource, checkedDate) >= checkedValue;
};

export const resources = {
    getResourceCount,
    resourcesAreSufficient,
};
