const msperDay = 24 * 60 * 60 * 3600;

const sept0519 = new Date(msperDay * (44 * 365 + 11 + 197));

const option = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
};

const WIB = new Intl.DateTimeFormat('en-US', option).format;

console.log(WIB(sept0519));