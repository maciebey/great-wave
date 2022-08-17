export interface layer {
    name: string,
    file: string,
    opacity?: number,
    color: string,
    order?: number
};

export interface NamedLayerSet {
    name: string,
    ratioClass: string,
    layers: layer[]
}

export interface ChangeObject {
    layerIndex: number,
    positionChange?: number,
    opacity?: number,
    color?: string
}
