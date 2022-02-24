export interface layer {
    name: string,
    file: string,
    opacity: number,
    color: string
};

export interface NamedLayerSet {
    name: string,
    ratioClass: string,
    layers: layer[]
}

export interface ChangeObject {
    type: string,
    layer?: layer,
    direction?: string
}
