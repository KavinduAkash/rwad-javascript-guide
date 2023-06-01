export class Customer {
    constructor(customer_id, customer_first_name, customer_last_name, customer_address) {
        this._customer_id = customer_id;
        this._customer_first_name = customer_first_name;
        this._customer_last_name = customer_last_name;
        this._customer_address = customer_address;
    }

    get customer_id() {
        return _customer_id;
    }

    set customer_id(customer_id) {
        this._customer_id = customer_id;
    }

    get customer_first_name() {
        return _customer_first_name;
    }

    set customer_first_name(customer_first_name) {
        this._customer_first_name = customer_first_name;
    }

    get customer_last_name() {
        return _customer_first_name;
    }

    set customer_last_name(customer_last_name) {
        this._customer_last_name = customer_last_name;
    }

    get customer_address() {
        return _customer_first_name;
    }

    set customer_address(customer_address) {
        this._customer_address = customer_address;
    }
}