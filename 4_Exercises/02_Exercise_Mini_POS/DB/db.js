const data = "DATA"; // local storage saved key

export function saveCustomerDB(new_customer) {
    let pre_data = localStorage.getItem(data);
    let data_arr = [];
    // undefine/ null/ "" / false
    if (pre_data) {
        data_arr = JSON.parse(pre_data);
    }
    data_arr.push(new_customer);
    localStorage.setItem(data, JSON.stringify(data_arr));
}

export function getCustomerDB() {
    let pre_data = localStorage.getItem(data);
    let data_arr = [];
    // undefine/ null/ "" / false
    if (pre_data) {
        data_arr = JSON.parse(pre_data);
    }
    return data_arr;
}