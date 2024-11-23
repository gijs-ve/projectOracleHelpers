import { Resource } from '../types';
/**
 *
 * @param resource A resource object
 * @param time The time in milliseconds
 */

const getCount = (resource: Resource, time: number) => {
    const resourceUpdateTime = new Date(resource.updatedAt).getTime();
    const minutesPassed = (time - resourceUpdateTime) / 60000;
    const newAmount = resource.amount + resource.perMinute * minutesPassed;
    const result = Math.round(newAmount * 10) / 10;
    if (!result || result < 0) {
        return 0;
    }
    return result;
};

/**
 *
 * @param resource A resource object
 * @param checkedValue The value to check against the resource amount
 * @param checkedDate The time to compare against in milliseconds, defaults to Date.now()
 */

const isSufficient = ({
    resource,
    checkedValue,
    checkedDate = Date.now(),
}: {
    resource: Resource;
    checkedValue: number;
    checkedDate?: number;
}): boolean => {
    return getCount(resource, checkedDate) >= checkedValue;
};

export const resources = {
    getCount,
    isSufficient,
};
