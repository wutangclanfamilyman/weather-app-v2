export default class LocalStorageController {

    addItem = (city) => {
        try {
            const names = localStorage.getItem('names');
            if(!names) {
                let newArr = [city];
                localStorage.setItem('names', JSON.stringify(newArr))
            }
            else {
                //namesArr = names.split(' ')
                let namesArr = JSON.parse(names)
                console.log(namesArr.length);
                if(namesArr.length >= 5) {
                    namesArr.pop();
                }
                namesArr.unshift(city)
                localStorage.setItem('names', JSON.stringify(namesArr))
            }

        }
        catch (e) {
            console.log(e);
        }

    }

    getItems = () => {
        try {
            const names = localStorage.getItem('names');

            return JSON.parse(names)

        } catch(e) {
            console.log(e);
        }
    }

}