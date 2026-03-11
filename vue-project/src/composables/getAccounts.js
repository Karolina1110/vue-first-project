import axios from 'axios';

const getAccounts = async () => {
    try {
        const response = await axios.get('http://localhost:5000/accounts');
        return(response.data);
    } catch (error) {
        console.error('Error fetching accounts', error);
        return([])
    }
}
export default getAccounts