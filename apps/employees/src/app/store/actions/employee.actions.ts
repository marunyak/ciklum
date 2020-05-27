export class FetchEmployee {
    static readonly type = '[Employees] Fetch Employee';
    constructor(public id) {}
}

export class UpdateEmployee {
    static readonly type = '[Employees] Update Employee'
    constructor(public employee) {}
}

export class SaveUpdateEmployee {
    static readonly type = '[Employees] Save Update Employee'
    constructor() {}
}
