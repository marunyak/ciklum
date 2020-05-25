export class FetchEmployees {
    static readonly type = '[Employees] Fetch Employees'
}

export class AddEmployees {
    static readonly type = '[Employees] Add Employee'
    constructor(public employee) {}
}
