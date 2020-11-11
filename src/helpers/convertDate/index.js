export default function convertDate(date) {

    const today = new Date();

    const weekday = new Intl.DateTimeFormat('en', {weekday: 'short'}).format(date)
    const day = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(date);
    const month = new Intl.DateTimeFormat('en', {month: 'short'}).format(date);
    return (date.getDate() !== (today.getDate() + 1)) ? `${weekday}, ${day} ${month}` : 'Tommorow';
}