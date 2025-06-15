type Mods = Record<string, string | boolean>;
export const classNames = (cls: string, mods: Mods = {}, additional: string[]): string => {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.keys(mods).filter((clsName: string) => mods[clsName])
    ].join(' ');
}
