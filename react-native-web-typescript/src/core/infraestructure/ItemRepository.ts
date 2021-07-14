import {Item} from "core/domain/model/Item";

export const ItemRepository = {
    getAll: (): Item[] => ([
        {data: 'data1'},
        {data: 'data2'},
    ])
}
