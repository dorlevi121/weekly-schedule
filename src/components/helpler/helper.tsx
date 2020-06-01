import moment from 'moment';
import { Event } from '../../models/system/event';

export const dateformat = "yyyy/MM/DD";
export const eventFormat = "YYYY-MM-DD HH:mm";
export const hebDays = ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"];


// Get week number and return all the days of week
export const getWeekDaysByWeekNumber = (weeknumber?: number) => {
    var date = moment().isoWeek(weeknumber || 1).startOf("week"), weeklength = 6, days = [];
    while (weeklength--) {
        days.push(date.format(dateformat));
        date.add(1, "day")
    }
    return days;
}

export const monthHebToEng = (month: string) => {
    switch (month) {
        case 'ינואר':
            return 'January';
        case 'פבואר':
            return 'February';
        case 'מרץ':
            return 'March';
        case 'אפריל':
            return 'May';
        case 'מאי':
            return 'May';
        case 'יוני':
            return 'June';
        case 'יולי':
            return 'July';
        case 'אוגוסט':
            return 'August';
        case 'ספטמבר':
            return 'September';
        case 'אוקטובר':
            return 'October';
        case 'נובמבר':
            return 'November';
        case 'דצמבר':
            return 'December';
    }
}

export const monthNumberToHeb = (month: number): string => {
    switch (month) {
        case 1:
            return 'ינואר';
        case 2:
            return 'פבואר';
        case 3:
            return 'מרץ';
        case 4:
            return 'אפריל';
        case 5:
            return 'מאי';
        case 6:
            return 'יוני';
        case 7:
            return 'יולי';
        case 8:
            return 'אוגוסט';
        case 9:
            return 'ספטמבר';
        case 10:
            return 'אוקטובר';
        case 11:
            return 'נובמבר';
        default:
            return 'דצמבר'
    }
}


// Dictionary of events - id: Week Number , value: Array of events such that place i in the array represent a day 
// (0 - Sunday... 2 - thursday). Every day its a dictionary of events such that the key is the start hour and the value is the event.
export const events: { [weekNumber: number]: { [startHour: string]: Event }[] } = {}

events[20] = new Array(7)
events[21] = new Array(7)
events[22] = new Array(7)
events[23] = new Array(7)

const sunday: { [startHour: string]: Event } = {}; // All the events in sunday, week 20.
const monday: { [startHour: string]: Event } = {};
const wensday: { [startHour: string]: Event } = {};

sunday['14:45'] = {
    id: 1,
    title: 'תור ראשון',
    employeeId: 1,
    userId: "0502243024",
    start: moment("2020-05-10 14:45").format(eventFormat),
    end: moment("2020-05-10 15:30").format(eventFormat)
}

monday['07:45'] = {
    id: 2,
    title: 'תור שני',
    employeeId: 1,
    userId: "0502243024",
    start: moment("2020-05-11 07:45").format(eventFormat),
    end: moment("2020-05-11 08:00").format(eventFormat)
}

wensday['11:45'] = {
    id: 3,
    title: 'תור שלישי',
    employeeId: 1,
    userId: "0502243024",
    start: moment("2020-05-13 11:45").format(eventFormat),
    end: moment("2020-05-13 12:45").format(eventFormat)
}

wensday['13:45'] = {
    id: 3,
    title: 'תור רביעי',
    employeeId: 1,
    userId: "0502243024",
    start: moment("2020-05-13 13:45").format(eventFormat),
    end: moment("2020-05-13 15:00").format(eventFormat)
}

events[20][0] = sunday;
events[20][1] = monday;
events[20][3] = wensday;

events[21] = new Array(7);
const sundayWeek21: { [startHour: string]: Event } = {}; // All the events in sunday week 21

sundayWeek21['08:45'] = {
    id: 4,
    title: 'תור חמישי',
    employeeId: 1,
    userId: "0502243024",
    start: moment("2020-05-17 08:45").format(eventFormat),
    end: moment("2020-05-17 10:45").format(eventFormat)
}
events[21][0] = sundayWeek21;