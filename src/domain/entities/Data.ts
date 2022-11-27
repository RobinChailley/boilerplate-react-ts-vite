interface CreateDataInterface {
    uuid: string;

    name: string;

    description: string;
}

class Data {

    private readonly _uuid: string;

    private readonly _name: string;

    private readonly _description: string;

    constructor(createDataInterface: CreateDataInterface) {
        const { uuid, name, description } = createDataInterface;

        this._uuid = uuid;
        this._name = name;
        this._description = description;
    }

    get uuid(): string {
        return this._uuid;
    }

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }
}

export default Data;
