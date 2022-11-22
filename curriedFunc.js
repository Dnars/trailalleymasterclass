
// CODE BY JOHNSON

const baseUrl = 'https://jsonplaceholder.typicode.com';
const endpoint = 'users';

const getData = (a) => {
    return (b) => {
        console.log('Loading: True')
        return async function() {
            try {
                const res = await fetch(`${a}/${b}`);

                if (!res.ok) {
                    throw new Error('Could not retrieve data')
                }

                const data = await res.json()
                
                return (
                    console.log('Loading: False')
                    // console.log(data)
                )

            } catch (err) {
                console.log(err)
            }
        }()
    }
}

getData(baseUrl)(endpoint);
