
declare type Bike = {
    id: int;
    name: string;
}
export function findById(id: int): Promise<Bike>;
export function findByName(name: string): Promise<Array<Bike>>;
export function findAll(): Promise<Array<Bike>>;
export function create(name: string): Promise<Bike>;
export function update(id: int, name: string): Promise<Bike>;
export function remove(id: int): Promise<Bike>;
