export interface Manager<T> {
    add(t: T);

    edit(id: number, t: T);

    findByID(id: number);

    delete(id: number);
}