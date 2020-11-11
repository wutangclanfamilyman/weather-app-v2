export default function converToFahrenheit(cel = 100) {
    if(cel) {
        return Math.round((cel * 9 / 5) + 32);
    }
}