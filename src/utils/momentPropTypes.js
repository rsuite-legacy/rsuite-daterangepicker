import PropTypes from 'prop-types';
import moment from 'moment';

// @see https://github.com/moment/moment/blob/develop/src/moment.js#L80
const MomentConstructor = moment.prototype.constructor;

export const instanceOfMoment = PropTypes.instanceOf(MomentConstructor);
// alias
export default instanceOfMoment;
