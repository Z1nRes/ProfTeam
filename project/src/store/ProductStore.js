import {makeAutoObservable} from 'mobx';

export default class ProductStore{
    constructor(){
        this._types = [
            {id: 1, name: "1st type"},
            {id: 2, name: "2nd type"},
            {id: 3, name: "3rd type"},
            {id: 4, name: "4th type"}
        ]
        this._products = [
            {id: 1, name: "Veritatis qui et velit ad.", description: "Eos minus qui non molestiae dolor. Dolor vero animi voluptatem molestias nihil. Quasi dignissimos nobis minus voluptas tenetur aut. Voluptatem amet cumque illo.", price: 4197},
            {id: 2, name: "Adipisci sed quod labore odio labore dolorem.", description: "Tempore repellat enim facilis neque molestias. Ea consequatur dignissimos deleniti. In nulla nisi porro sapiente illo. Magnam quia labore exercitationem voluptatibus.", price: 8173},
            {id: 3, name: "Veritatis qui et velit ad.", description: "Eos minus qui non molestiae dolor. Dolor vero animi voluptatem molestias nihil. Quasi dignissimos nobis minus voluptas tenetur aut. Voluptatem amet cumque illo.", price: 4197},
            {id: 4, name: "Adipisci sed quod labore odio labore dolorem.", description: "Tempore repellat enim facilis neque molestias. Ea consequatur dignissimos deleniti. In nulla nisi porro sapiente illo. Magnam quia labore exercitationem voluptatibus.", price: 8173},
            {id: 5, name: "Veritatis qui et velit ad.", description: "Eos minus qui non molestiae dolor. Dolor vero animi voluptatem molestias nihil. Quasi dignissimos nobis minus voluptas tenetur aut. Voluptatem amet cumque illo.", price: 4197},
            {id: 6, name: "Adipisci sed quod labore odio labore dolorem.", description: "Tempore repellat enim facilis neque molestias. Ea consequatur dignissimos deleniti. In nulla nisi porro sapiente illo. Magnam quia labore exercitationem voluptatibus.", price: 8173}
        ]
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setProducts(products){
        this._products = products
    }
    setSelectedType(type){
        this._selectedType = type
    }

    get types(){
        return this._types
    }
    get products(){
        return this._products
    }
    get selectedType(){
        return this._selectedType
    }
}