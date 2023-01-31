
declare type Shop = {
    id: int;
    name: string;
}
export function findById(id: int): Promise<Shop>;
export function findByName(name: string): Promise<Array<Shop>>;
export function findAll(): Promise<Array<Shop>>;
export function create(name: string): Promise<Shop>;
export function update(id: int, name: string): Promise<Shop>;
export function remove(id: int): Promise<Shop>;
