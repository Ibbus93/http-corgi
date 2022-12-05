const info = [100, 101, 102, 103];
const successful = [200, 201, 202, 203, 204, 205, 206, 207];
const redirect = [300, 301, 302, 303, 304, 305, 307, 308];
const clientErrors = [
  400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414,
  415, 416, 417, 418, 420, 421, 422, 423, 424, 425, 426, 429, 431, 444, 450,
  451, 497, 498, 499,
];
const serverErrors = [
  500, 501, 502, 503, 504, 506, 507, 508, 509, 510, 511, 521, 522, 523, 525,
  599,
];

export const acceptedStatuses = [
  ...info,
  ...successful,
  ...redirect,
  ...clientErrors,
  ...serverErrors,
];
